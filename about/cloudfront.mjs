"use strict";
import fs from "fs";
import prettier from "prettier";
import https from "https";
import { execPipe, map, tap } from "iter-tools";
import minimist from "minimist";

// wget --no-check-certificate -nH -E -H -k -K -p about http://unbouncepages.com/paperchaser/

const args = minimist(process.argv.slice(2));

if (!args.i) {
  console.error("Usage: ts-node cloudfront.mjs -i <path to index.html>");
  exit(1);
}

// File destination.txt will be created or overwritten by default.
fs.copyFile(args.i, `${args.i}.bak`, (err) => {
  if (err) throw err;
});

const data = fs.readFileSync(args.i, "utf-8");

const logger = fs.createWriteStream(`${args.i}.log`, {
  flags: "w", // 'a' means appending (old data will be preserved)
});

const createWrite = (wt) => (line) => wt.write(`${line}\n`);
const log = createWrite(logger);

const of = fs.createWriteStream(args.i, {
  flags: "w",
});
const write = createWrite(of);

const cloudfrontRegex =
  /\/\/([^\.]+).cloudfront.net\/about2.clausehound.com([/\w]+)(\/.+\..\w+)/;

const main = () => [
  ...execPipe(
    prettier.format(data, { parser: "angular" }).split("\n"),
    map(parseCloudfront),
    // add map(clkn) (see above comment)
    map(parseClausehound),
    tap(write)
  ),
];

//log to file in same dir as input/output (poss to read from as input)
//write to same file as input (unless -o specified. input as default. maybe kep backup so we dont have to save as webpage again)
//

var download = function (url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = https
    .get(url, function (response) {
      response.pipe(file);
      file.on("finish", function () {
        file.close(cb); // close() is async, call cb after close completes.
      });
    })
    .on("error", function (err) {
      // Handle errors
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      log(`shit: ${err.message}`);
    });
};

function parseCloudfront(line) {
  if (!cloudfrontRegex.test(line)) return line;
  const match = cloudfrontRegex.exec(line);

  // download asset
  const downFile = `.${match[2]}/index_files${match[3]}`;
  download(`https:${match[0]}`, downFile);

  return line.replace(cloudfrontRegex, "$2/index_files$3");
}

const clausehoundRegex = /about2.clausehound.com/;
const isLightbox = /clkn\/rel/;
const isLink = /https:\/\/about2.clausehound.com\/.*\/clkn\/http(s?)\/(.*)/;

function parseClausehound(line) {
  if (isLightbox.test(line)) {
    log(`lightbox: ${line}`);
    return line;
  }

  if (isLink.test(line)) {
    return line.replace(isLink, "http$1://$2");
  }

  if (!clausehoundRegex.test(line)) return line;
  const match = clausehoundRegex.exec(line);

  log(`dunno: ${match.input}`);
  return line;
  //return line.replace(clausehoundRegex, "$2/index_files$3");
}

main();
