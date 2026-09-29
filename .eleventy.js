const { execFileSync } = require("node:child_process");

module.exports = function (eleventyConfig) {
  // static/ is served from the site root, verbatim. This is what carries
  // /legacy/**, /DealPrep/**, /ClausehoundAIVideo/**, /ads.txt, /terms.pdf,
  // /moonclerk.js and /icons/**. See handoff §6.
  eleventyConfig.addPassthroughCopy({ static: "." });
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

  // Insights (the merged Clausehound and DealPrep blogs). Each post is
  // src/insights/<slug>/index.md with its images beside it; copying the images
  // to the same folder keeps the posts' relative image links working.
  eleventyConfig.addPassthroughCopy("src/insights/**/*.{jpg,jpeg,png,gif,svg,webp,pdf,JPG,JPEG,PNG,GIF}");

  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("src/insights/*/index.md")
      .sort((a, b) => b.date - a.date),
  );

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
    // Posts are plain markdown: they're old content and some quote code, so
    // they must not be run through a template engine first.
    templateFormats: ["html", "md"],
    markdownTemplateEngine: false,
  };
};
