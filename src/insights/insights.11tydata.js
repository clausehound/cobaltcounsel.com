// Defaults for every post under src/insights/<slug>/index.md.
// URLs keep the old blog slugs, so blog.clausehound.com/<slug>/ can 301 to
// /insights/<slug>/ one-for-one.
module.exports = {
  layout: "post.html",
  permalink: (data) => `/insights/${data.page.fileSlug}/`,
};
