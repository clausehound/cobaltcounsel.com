const { execFileSync } = require("node:child_process");

module.exports = function (eleventyConfig) {
  // static/ is served from the site root, verbatim. This is what carries
  // /overview/, /legacy/**, /DealPrep/**, /ClausehoundAIVideo/**, /ads.txt,
  // /terms.pdf, /moonclerk.js and /icons/**. See handoff §6.
  eleventyConfig.addPassthroughCopy({ static: "." });
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

  // Build the client-side TS bundle after every Eleventy build, so `--serve`
  // rebuilds it too. One esbuild call, no plugin.
  eleventyConfig.on("eleventy.after", () => {
    execFileSync("npm", ["run", "build:js"], { stdio: "inherit" });
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data",
    },
    // .html files are rendered with Liquid (Eleventy's default for .html).
    templateFormats: ["html"],
  };
};
