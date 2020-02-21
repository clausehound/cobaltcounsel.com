(() => {
  const email = 'inquiries@cobaltcounsel.com';
  const address = '330 Bay Street, Suite 1400 Toronto, Ontario, Canada M5H2S8';
  const el = document.createElement('footer');
  el.id = 'colophon';
  el.className = 'site-footer';
  el.setAttribute('role', 'contentinifo');
  el.innerHTML = `
  <hr />
  <section class="site-info">
    <address>
      Main (Mailing Address): <a target="_blank" href="https://www.google.com/maps/place/${address}">${address}</a>
      Telephone: 1-647-749-0047 Fax: 1-866-678-7731 E-mail: <a href="mailto:${email}">${email}</a> |
      Copyright © ${new Date().getFullYear()} Cobalt Lawyers. All Rights Reserved.
    </address>
  </div>
    `;

  document.currentScript.parentNode.insertBefore(el, document.currentScript);
})();

