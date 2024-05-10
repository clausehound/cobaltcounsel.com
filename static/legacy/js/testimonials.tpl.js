(() => {
  const parser = new DOMParser();
  const cur = document.currentScript;

  const testimonials = [
    {
      language:
        'We have been impressed with the commitment by Cobalt to providing a thoughtful response within a six hour service level, with their deal knowledge capture through their software platform, and with the speed at which their software and lawyers are able to collect our thinking and map from prior deals into future deals. As our understanding of their legal and technological capabilities have advanced, we have increased our desire to create [...] automations around legal documentation.',
      author: 'Michael Younder',
      credentials:
        'Head of CMS Partnerships for an award-winning digital Design Agency, trusted by numerous enterprise clients, worldwide, with specialties in mobile design, web design, and the ethos of creating "smart" interfaces has have helped their firm skyrocket in growth over its 10+ years in market.',
    },
    {
      language:
        'Cobalt has been an excellent partner for us. The client focus and support is outstanding. Their Drafting Sprints have been very effective for us, helping progress deals based on our timeline. It’s easy to recommend Cobalt.',
      author: 'Brett Hurlock',
      credentials:
        'The Camlachie Inspection Co., Successful president since 2013, providing contract services for inspections, consultations, coordination and evaluation, survey development, work selection, and manpower supply.',
    },
    {
      language:
        'The protection and collection of personal information of the audience that use our services are of great importance to us, and with the depth of experience of the Cobalt team, they have helped us to ensure that we understand how we can ensure our compliance with privacy laws and provide our audience comfort that their information is secure. The Cobalt team shares the same values of transparency and trust as is evident in our experiences working with them.',
      author: 'Brian Prosserman',
      credentials:
        'Founder of a platform dedicated to bridging the gap between volunteers and organizations, that is helping organizations bring in the right volunteers, and helping volunteers find meaningful opportunities that will support them throughout their professional lives.',
    },
    {
      language:
        'The lawyers at Cobalt [...] have assisted us with reviews of various commercial contracts including master services agreements, software services agreements [...] These agreements have typically included significant IP and IT provisions that require attention to detail and true legal expertise.',
      author: 'Chris Eben',
      credentials:
        'CEO of a Software Development Firm helping companies build the software they need to innovate, grow, adapt and change. Their company values and development practices have helped them ship 200 products for enterprise and growth stage startups with a team of more than 150, in several offices across North America, over the course of two decades.',
    },
    {
      language:
        'Cobalt Lawyers is the best kept secret on Bay Street, and we are pleased to recommend them.',
      author: 'Peter Evans',
      credentials:
        'CEO of a world-leading Expertise Marketing Platform and open expert network. Winner of the 2018 CODiE Award for "Best Content Marketing Solution," their platform helps organizations better manage and promote their expertise.',
    },
    {
      language: 'Speedy corporate work - everything is automated well!',
      author: 'Bernie Li',
      credentials:
        'Serial Entrepreneur and investor with over a decade of experience at venture capital and private equity funds in NYC, Montreal and Toronto.',
    },
    {
      language:
        "The key aspects of Cobalt's services that make them unique are their ability to promptly assign legal resources to our requirements, breakdown and simplify scenarios for our cross-functional executive teams to clearly and logically understand the event and make decisions, and identify efficient and cost-effective processes to help us achieve our goals, every time. Kudos to them for their commitment to innovation in the legal field that has certainly demystified the world of legalities!",
      author: 'Anand Karat',
      credentials:
        'Vretta Inc., E-Assessment and Learning Solutions recognized by several renowned awarding bodies for the quality and implementation across all education levels, including the International e-Assessment Awards, the International Educational Games Competition, and Brandon Hall Excellence Awards.',
    },
  ];

  const distinctions = [
    'Seven-time sponsor of Startup Weekend Toronto, recurring sponsor of Ivey Venture Forum, and recurring judge of the annual Ivey business plan competition. Hundreds of hours of judging and mentoring venture capital competitions and technology hackathons.',
    'Legal Technology Pioneer recognized by the Law Society of Ontario as a speaker on fixed-fee legal services in the earliest days of fixed-fee billing.',
    'Official Legal Supplier to the City of Mississauga, as External Technology Law counsel (for the second of two consecutive 5-year terms).',
  ];

  const section = document.createElement('section');
  section.className = 'all-testimonials';

  const start = +(cur.hasAttribute('start') ? cur.getAttribute('start') : 0);
  const end = +(cur.hasAttribute('end') ? cur.getAttribute('end') : testimonials.length);

  testimonials.slice(start, end).forEach((testimonial) => {
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `
    ${testimonial.language}
    <footer>
      <cite>${testimonial.author}<span> ${testimonial.credentials}</span></cite>
    </footer>`;
    section.appendChild(blockquote);
  });

  if (!cur.hasAttribute('end')) {
    distinctions.forEach((distinction) => {
      const blockquote = document.createElement('blockquote');
      blockquote.className = 'distinction';
      blockquote.innerHTML = distinction;
      section.appendChild(blockquote);
    });
  }
  cur.parentNode.insertBefore(section, cur);
})();
