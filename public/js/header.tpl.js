(() => {
  const el = document.createElement('header');
  el.id = 'masthead';
  el.className = 'site-header';
  el.setAttribute('role', 'banner');

  el.innerHTML = `<header id="masthead" class="site-header" role="banner">
  <div class="navbar navbar-main sticky-navigation navbar-fixed-top">
    <div class="container container-header">
      <div class="header-inner">
        <div class="header-inner-site-branding">
          <div class="site-branding-wrap">
            <div class="site-branding">
              <a href="/" title="">
                <img src="/images/unnamed.png" alt="" />
              </a>
            </div>
          </div>
          <div class="menu-toggle-button-wrap">
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
              <i class="fa fa-bars"></i>
              <span>Primary Menu</span>
            </button>
          </div>
        </div>
        <div class="main-navigation-wrap">
          <nav id="site-navigation" class="main-navigation" role="navigation">
            <div class="menu-top-main-container">
              <ul id="primary-menu" class="menu">
                <li
                  id="menu-item-88"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-88"
                >
                  <a href="/" aria-current="page">Home</a>
                </li>
                <li
                  id="menu-item-89"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"
                >
                  <a href="/team.html">Team</a>
                </li>
                <li
                  id="menu-item-1071"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1071"
                >
                  <a href="/transactions.html">Recent Work</a>
                </li>
                <li
                  id="menu-item-90"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-90"
                >
                  <a href="/contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
          <!-- #site-navigation -->
        </div>
      </div>
      <!-- .header-inner -->
    </div>
    <!-- .container -->
  </div>
</header>`;

  document.currentScript.parentNode.insertBefore(el, document.currentScript);
})();
