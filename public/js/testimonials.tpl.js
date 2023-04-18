(() => {
  const parser = new DOMParser();
  const cur = document.currentScript;

  const testimonials = [
    {
      language:
        'We have been impressed with the commitment by Cobalt to providing a thoughtful response within a six hour service level, with their deal knowledge capture through their software platform, and with the speed at which their software and lawyers are able to collect our thinking and map from prior deals into future deals. As our understanding of their legal and technological capabilities have advanced, we have increased our desire to create [...] automations around [...] legal documentation.',
      author: 'Michael Younder',
      credentials:
        'Head of CMS Partnerships for an award-winning digital Design Agency, trusted by numerous enterprise clients, worldwide, with specialties in mobile design, web design, and the ethos of creating "smart" interfaces has have helped their firm skyrocket in growth over its 10+ years in market.',
    },
    {
      language:
        'Cobalt has been an excellent partner for us. The client focus and support is outstanding. Their Drafting Sprints have been very effective for us, helping progress deals based on our timeline, while keeping our legal down, it’s a WIN-WIN. It’s easy to recommend Cobalt.',
      author: 'Brett Hurlock',
      credentials:
        'The Camlachie Inspection Co., Successful president since 2013, providing contract services for inspections, consultations, coordination and evaluation, survey development, work selection, and manpower supply.',
    },
    {
      language:
        'The lawyers at Cobalt [...] assisted us with a variety of general corporate legal matters and, specifically with the finalization of our shareholders’ agreement. As these agreements can become quite complex, I was impressed with the attention to detail and true legal expertise that was provided. Above all else, they were keen to ensure that all my concerns were addressed and went above and beyond to consider all aspects of the formation of my business.',
      author: 'Rahim Lalani',
      credentials:
        'CTO and Co-Founder of an online platform that makes finding quality homecare service providers accessible through vetted agencies, reviews and seamless payment processing.',
    },
    {
      language:
        'I’ve had a thoroughly enjoyable experience with Cobalt Lawyers who supported my seed round of financing with a California-based VC. My experience with Cobalt has been very different from my frustrating experience with law firms in the past, where I was billed for things that I had already paid years earlier. I would describe my experience with Cobalt as transparent, as they have what I call a “countdown timer”, so that I can know what they’re working on. It’s great that Cobalt tells me basically everything that I need to know and I can see exactly what’s going on. I specifically enjoy their approach to limited scoping and I thought the initial discovery call was a great way to kick off our relationship. With Cobalt, I know that I’m going to get the value out of it since I’m able to see essentially what is happening in real time.',
      author: 'Carl Mascarenhas',
      credentials: 'Joe Zoo, an Ed Tech startup that is helping more than 5 million students.',
    },
    {
      language:
        'The [Cobalt Lawyers] have assisted us with a variety of commercial legal matters and, specifically, the development of an online terms of use and privacy policy. The protection and collection of personal information of the audience that use our services are of great importance to us, and with the depth of experience of the Cobalt team, they have helped us to ensure that we understand how we can ensure our compliance with privacy laws and provide our audience comfort that their information is secure. The Cobalt team shares the same values of transparency and trust as is evident in our experiences working with them.',
      author: 'Brian Prosserman',
      credentials:
        'Founder of a platform dedicated to bridging the gap between volunteers and organizations, that is helping organizations bring in the right volunteers, and helping volunteers find meaningful opportunities that will support them throughout their professional lives.',
    },
    {
      language:
        'The lawyers at Cobalt are exceptionally understanding of the founder journey, cost sensitivities, business risks and concerns. I have never felt like any question is too small or large of a question. Where work was out of budget for me, Cobalt willingly worked through my problems to make sure I could tackle the parts that mattered the most and stay within budget. Cobalt has walked us through every stage of our company from new company standard document creation, to growth, to financing, to managing internal deals and related disputes. Where we need assistance with preparation for negotiations, Cobalt supplied us with the thinking to support advancing arguments on our own behalf, in a way that was understandable and easy to follow. Their approach to online collaboration works within the founder schedule to keep us in sync. I have referred Cobalt in the past, and would continue to do so in the future.',
      author: 'Alex Leduc',
      credentials:
        'CEO of Mortgauge. an online Real Estate Services company that assists Canadian homeowners navigate the homebuying journey and get the best mortgage offers for their current and future properties.',
    },
    {
      language:
        '[Cobalt] assisted us with a variety of commercial legal matters and, specifically in the recruitment and human resources industry [...]. Our unique business model required a complex set of legal documents to support the variety of channels and services that we provide. The expertise and knowledge of the Cobalt team with online services and technology was a crucial asset in helping us navigate our legal requirements and satisfy the needs of our business.',
      author: 'Lisa Huang',
      credentials:
        'Co-founder of an innovative, future-of-work mobile platform that connects businesses with qualified staff looking for more work. Businesses acquire new talent to help them succeed, and workers receive meaningful work experience through the use of a secure and intuitive platform.',
    },
    {
      language:
        'Our product is protected by patent and Cobalt assisted us with a variety of general corporate/commercial legal matters and, specifically in the areas of international product IP protection, cross border sales, cross border corporate finance negotiations for both large and angel fundraising rounds. I have been highly impressed with the suite of startup knowledge, services and tools provided by Cobalt to our company to support our growth. We have been actively using the Clausehound platform [Cobalt’s tech provider] over the years, since the early days when that product was launched by the Cobalt Lawyers. The combination of learning materials embedded in the documents available in that library, and advice provided by Cobalt to support those documents, is a competitively affordable package for our startup company.',
      author: 'Trung Pham',
      credentials:
        'CEO of a company creating innovative mobile-enabled commercial furnishings tool, as featured on Dragon’s Den, CBS, FOX News and TechCrunch, among many other media outlets, and well on their way to becoming a household name in DIY furnishing automation technologies.',
    },
    {
      language:
        'As a new company founder with a limited budget, I was very concerned about legal costs – which were completely managed through my work with Cobalt, who answered questions round-after-round within their fixed fee budget and their unlimited questions policy. The lawyers at Cobalt are exceptionally thoughtful, business-savvy, and attentive to our internal considerations in their documentation, drafting, and provision of legal services. They have assisted us with a variety of general corporate/commercial legal matters and, specifically in the early stages of building an online marketplace. The Cobalt lawyers patiently walked me through a variety of agreements and issues including intellectual property ownership, hiring, e-commerce, APIs and many other topics.',
      author: 'Venkat Chandra',
      credentials:
        'Founder of a SaaS-enabled marketplace focused on knowledge and expertise orchestration.',
    },
    {
      language:
        'As a fast growing startup, we have been navigating our search for a startup commercial lawyer carefully, and we are thrilled that we have discovered the lawyers at Cobalt who are exceptionally responsive, thoughtful, and business-savvy to our internal considerations. [Cobalt] assisted us with a variety of general corporate/commercial legal matters including primarily, negotiations on behalf of our company with counterparties who are large hospitals and pharmaceutical companies [...]. They have also assisted us with services to file copyright – dealing with both the Canadian Intellectual Property Office and US Patent and Trademark Office [...]. Where we have a general legal question, [...] Cobalt’s knowledgeable team is always ready with an answer or with a blog article on their content-rich Clausehound blog [Cobalt’s tech provider], for us to read through. They have been a true growth partner to our startup’s growth story',
      author: 'Kapil Kalra',
      credentials:
        'Co-founder of a MedTech company creating mobile-enabled training materials adopted by life sciences companies globally, as recognized with a winning product at the Gold Stevie International Business Awards, and the prestigious Brandon Hall Group Bronze Award.',
    },
    {
      language:
        'The lawyers at Cobalt [...] have assisted us with a variety of general corporate/commercial legal matters and, specifically in the intellectual property and technology spheres, they have assisted us with reviews of various commercial contracts including master services agreements, software services agreements, and co-working agreements. These agreements have typically included significant IP and IT provisions that require attention to detail and true legal expertise.',
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
        "The Cobalt team made what would otherwise have felt like a grueling traverse through endless contracts, feel instead like a smooth & guided process. They walked our startup through the steps needed to facilitate a major fundraising round, and the team was always a pleasure to meet with, as the discourse was always patient and insightful. The rush vs non-rush option gave us the flexibility to spend more when we needed things rushed, or visa versa, to spend less and move at the firm's speed. This paired with their discovery calls & work over the weekend initiatives makes them the most startup-friendly firm out there!",
      author: 'Alex Simonelli',
      credentials: 'Daydream Drinks, A Canadian pioneer in hemp-based beverage products',
    },
    {
      language:
        'Working with the Cobalt team has been a breeze, especially for a startup like myself. Their business model in terms of budget and methodology sure supports small businesses. They’re a valuable resource for all things legal, and the team is phenomenal in making sure I’m happy with the outcome.',
      author: 'Jenni Salonga',
      credentials:
        'Sparkked, A business advisory marketplace that connects individuals seeking advice to subject-matter experts, leading them to holistic success.',
    },
    {
      language:
        'Cobalt Lawyers has been our legal counsel for about eight years. They support us with all our corporate legal matters, including shareholder and partnership agreements, IP law, employment law, and other ad hoc requirements. The key aspects of their services that make them unique are their ability to promptly assign legal resources to our requirements, breakdown and simplify scenarios for our cross-functional executive teams to clearly and logically understand the event and make decisions, and identify efficient and cost-effective processes to help us achieve our goals, every time. Kudos to them for their commitment to innovation in the legal field that has certainly demystified the world of legalities!',
      author: 'Anand Karat',
      credentials:
        'Vretta Inc., E-Assessment and Learning Solutions recognized by several renowned awarding bodies for the quality and implementation across all education levels, including the International e-Assessment Awards, the International Educational Games Competition, and Brandon Hall Excellence Awards.',
    },
  ];

  const distinctions = [
    'Seven-time sponsor of Startup Weekend Toronto, recurring sponsor of Ivey Venture Forum, and recurring judge of the annual Ivey business plan competition. Hundreds of hours of judging and mentoring venture capital competitions and technology hackathons.',
    'City of Toronto Official Training Partner, training hundreds of startups on startup business law foundation over the course of a year.',
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
