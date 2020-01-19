(() => {
  const email = 'inquiries@cobaltcounsel.com';
  const address = '330 Bay Street, Suite 1400 Toronto, Ontario, Canada M5H2S8';
  const el = document.createElement('footer');
  el.id = 'colophon';
  el.className = 'site-footer';
  el.setAttribute('role', 'contentinifo');
  el.innerHTML = `
  <div class="container">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
      <li id="text-7" class="widget widget_text">
        <div class="textwidget">
          <div style="text-align: center">
            <a href="http://cobaltcounsel.com/contact-us/#in-the-community">
              Find Us in the Community
            </a>
          </div>
        </div>
      </li>
    </div>
    <div class="col-sm-4"></div>
  </div>
  <div class="container">
    <div class="site-info">
      <div class="col-sm-10 col-sm-offset-1 section-line section-line-footer"></div>
      <div class="site-info-inner">
        Main (Mailing Address): <a target="_blank" href="https://www.google.com/maps/place/${address}">${address}</a>
        Telephone: 1-647-749-0047 Fax: 1-866-678-7731 E-mail: <a href="${email}">${email}</a> |
        Copyright © ${new Date().getFullYear()} Cobalt Lawyers. All Rights Reserved.
      </div>
    </div>
  </div>
    `;

  document.currentScript.parentNode.insertBefore(el, document.currentScript);
})();

