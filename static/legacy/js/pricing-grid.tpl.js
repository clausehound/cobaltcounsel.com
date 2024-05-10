(() => {
  const parser = new DOMParser();
  const cur = document.currentScript;

  const section = document.createElement("section");
  section.className = "pricing-grid";

  section.innerHTML = `
  <p>At Cobalt, we operate on the values of trust and transparency. Our lawyers are committed to providing affordable and transparent business law services, which, for us, is as important as the rule of law itself. As such, we agree on all fees with you in advance.</p>
  <p>We leverage our innovative technologies to make sure your scoped work gets done fast, properly and done at a cost-effective rate. No more worrying about legal costs spiraling out of control - through our fixed-fee pricing options and other custom pricing arrangements, we strive to accommodate you or your company's needs.</p>
  <p>Cobalt has a complete pricing menu available upon request. Selected pricing options are below:</p>`;

  const rows = [
    ["Scoping call", "No charge"],
    ["<b>Strategic review</b> of your deal documents", "$45"],
    [
      "<b>Deep and detailed document review/editing</b> session",
      "$175 (+/- on request)"
    ],
    ["<b>Same-Day Incorporation</b>", "$350"],
    [
      "<b>Drafting of your Shareholders' Agreement, Vesting Agreement, Hiring Agreements, Many Others</b>",
      "Fast, 100% Fixed Fee"
    ]
  ];

  const table = document.createElement("table");
  table.className = "pricing-grid";
  table.innerHTML = "<tr><th>What You Need</th><th>Cost</th></tr>";
  rows.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${row[0]}</td>
    <td>${row[1]}</td>`;
    table.appendChild(tr);
  });

  section.appendChild(table);

  const footer = document.createElement("footer");
  footer.innerHTML = `<p>Taxes, government filing fees in addition.</p>`;
  section.appendChild(footer);

  cur.parentNode.insertBefore(section, cur);
})();
