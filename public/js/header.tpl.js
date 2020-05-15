(() => {
  const el = document.createElement("header");
  el.id = "masthead";
  el.className = "site-header";
  el.setAttribute("role", "banner");

  el.innerHTML = `
  <div class="navbar navbar-main sticky-navigation navbar-fixed-top">
    <div class="container container-header">
      <div class="header-inner">
        <div class="header-inner-site-branding">
          <div class="site-branding">
            <a href="/" title="Cobalt Counsel">
              <img src="/images/unnamed.png" alt="" />
            </a>
          </div>
          <div class="menu-toggle-button-wrap">
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
              ☰
              <span>Primary Menu</span>
            </button>
          </div>
        </div>
        <div class="main-navigation-wrap">
          <nav id="site-navigation" class="main-navigation" role="navigation">
            <div class="menu-top-main-container">
              <ul id="primary-menu" class="menu">
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"
                >
                  <a href="/team.html">Team</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1071"
                >
                  <a href="/transactions.html">Recent Work</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="/testimonials.html">Testimonials</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="/pricing.html">Pricing</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page"
                >
                  <a href="/events.html">Events</a>
                </li>
                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-90"
                >
                  <a href="/contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>`;

  const primary = el.querySelector("#primary-menu");
  const toggle = el.querySelector(".menu-toggle");
  if (primary == null || toggle == null) {
    throw new Error("Failed to build menu controls");
  }

  window.addEventListener("keydown", e => {
    if (e.key == "Escape") primary.classList.remove("open");
  });
  document.addEventListener("click", e => {
    if (!el.contains(e.target)) {
      primary.classList.remove("open");
    }
  });
  toggle.addEventListener("click", () => primary.classList.toggle("open"));

  document.currentScript.parentNode.insertBefore(el, document.currentScript);
})();
