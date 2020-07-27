(() => {
  const parser = new DOMParser();
  const cur = document.currentScript;

  fetch("https://blog.clausehound.com/rss.xml")
    .then(res => res.text())
    .then(xml => parser.parseFromString(xml, "text/xml"))
    .then(doc =>
      Array.from(doc.querySelectorAll("item"), el => ({
        title: el.querySelector("title").textContent,
        link: el.querySelector("link").textContent
      })).slice(0, 10)
    )
    .then(articles => {
      const ul = document.createElement("ul");
      ul.className = "rss-aggregator";
      articles.forEach(article => {
        const li = document.createElement("li");
        li.className = "feed-item";
        li.innerHTML = `
<a
  class="latestPubTitle"
  target="_blank"
  rel="nofollow"
  href="${article.link}"
>${article.title}</a>`;
        ul.appendChild(li);
      });

      cur.parentNode.insertBefore(ul, cur);
    });
})();
