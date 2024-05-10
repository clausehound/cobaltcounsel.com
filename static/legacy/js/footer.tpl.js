(() => {
  const email = 'rajah@cobaltcounsel.com';
  const address = 'Legal Innovation Zone, 10 Dundas St. East (10th floor), Suite 1002 Toronto, ON M5B 2G9';
  const el = document.createElement('footer');
  el.id = 'colophon';
  el.className = 'site-footer';
  el.setAttribute('role', 'contentinifo');
  el.innerHTML = `
  <address class="container">
    <a target="_blank" href="https://www.google.com/maps/place/${address}">${address}</a>
    <br />
    📞 1-647-749-0047 📠 1-866-678-7731 ✉️  <a href="mailto:${email}">${email}</a>
    <br />
    Copyright © ${new Date().getFullYear()} Cobalt Lawyers. All Rights Reserved.
  </address>
  `;

  document.currentScript.parentNode.insertBefore(el, document.currentScript);
})();

