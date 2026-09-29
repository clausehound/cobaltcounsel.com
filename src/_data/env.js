// Build-time switches. SITE_PREVIEW=1 marks a review build (a preview app on
// App Platform): pages get noindex and robots.txt blocks everything, so the
// unlisted preview URL never competes with the real site in search.
module.exports = {
  preview: process.env.SITE_PREVIEW === "1",
};
