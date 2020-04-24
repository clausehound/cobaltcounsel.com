(() => {
  const parser = new DOMParser();
  const cur = document.currentScript;

  const section = document.createElement("section");
  section.className = "pricing-grid";

  section.innerHTML = `
<h1>How We Work With Lawyers</h1>
<p>We're often asked to recommend lawyers to support our members with their custom requests.<p>
<p>We're pleased to recommend Cobalt Lawyers, who've provided to us an affordability pledge.</p>
<p>Cobalt has a complete pricing menu available upon request. Selected pricing options are below:</p>`;

  const rows = [
    ["Scoping call 1", "No charge"],
    ["<b>Strategic review</b> of your deal documents 2", "$45 + Tax"],
    [
      "<b>Deep and detailed document review/editing</b> session 3",
      "$175 + Tax (+/- on request)"
    ],
    ["<b>Same-Day Incorporation</b>4", "$350 + Tax + Government Fees"],
    [
      "<b>Drafting of your Shareholders' Agreement, Vesting Agreement, Hiring Agreements, Many Others</b> 4",
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

  cur.parentNode.insertBefore(section, cur);
})();
