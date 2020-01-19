// Google Analytics Script
(function(i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);

(() => {
  ga("create", "UA-93857742-1", "auto");
  ga("send", "pageview");
  document.currentScript.parentNode.innerHTML += `
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Fast, Fixed Fee, High-Quality Legal Services" />
<meta name="robots" content="noodp" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="canonical" href="https://cobaltcounsel.com/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Cobalt Counsel - Fast, Fixed Fee, High-Quality Legal Services" />
<meta property="og:description" content="Fast, Fixed Fee, High-Quality Legal Services" />
<meta property="og:url" content="https://cobaltcounsel.com/" />
<meta property="og:site_name" content="Cobalt Counsel" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:description" content="Fast, Fixed Fee, High-Quality Legal Services" />
<meta
  name="twitter:title"
  content="Cobalt Counsel - Fast, Fixed Fee, High-Quality Legal Services"
/>
<script type="application/ld+json">
  {
    "@context": "http:\/\/schema.org",
    "@type": "WebSite",
    "@id": "#website",
    "url": "https:\/\/cobaltcounsel.com\/",
    "name": "Cobalt Counsel",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https:\/\/cobaltcounsel.com\/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
</script>
<script async="" src="./js/fbevents.js"></script>
<script async="" src="./js/analytics.js"></script>
<script src="./js/jquery.js"></script>
<script src="./js/communityLoading.js"></script>
<script src="./js/common.js"></script>
<script src="./js/util.js"></script>
    `;

})();
