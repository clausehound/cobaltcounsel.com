(() => {
  const parser = new DOMParser();
  const cur = document.currentScript;

  const testimonials = [
    {
      language:
        "I have been impressed by the approach to teaching, level of diligence and startup-friendly pricing I have been able to receive. When getting started, Cobalt immediately provided me with access to the Clausehound blog and learning library, which was launched and written by the lawyers at Cobalt. The materials provided a wealth of knowledge in the form of thousands of answers to questions on deal points that other startups, entrepreneurs and business professionals had struggled over, that I was able to use as a learning resource during our engagement. This made it possible for me to climb a steep learning curve briskly, gracefully, and affordably. Cobalt encouraged an unlimited number of questions from the moment we first connected and onwards, and the learning materials supported that question and answer process delightfully.",
      author: "Vania S.",
      credentials:
        "Founder of a female-led business entrepreneur advisory group and a resident Business Coach at an on-campus incubator."
    },
    {
      language:
        "I was impressed by the depth of learning materials made available to me by Cobalt, including access to the Clausehound software, which was used as a collaborative portal to support my discussions with the Cobalt lawyers. I was able to populate my questions and track previous questions (both mine and those shared by other entrepreneurs). Because their software is cloud-based, I was able to access my private collaborative portal at all hours of the night, useful for a growing and flexible company like ours.",
      author: "Morgan R.",
      credentials:
        "CEO of an innovative mobile app helping users strengthen their resilience and mental flourishing, collaborating with organizations such as the Ontario Brain Institute and the University Health Network and changing the way mental health support is delivered."
    },
    {
      language:
        "The [Cobalt Lawyers] have assisted us with a variety of commercial legal matters and, specifically, the development of an online terms of use and privacy policy. The protection and collection of personal information of the audience that use our services are of great importance to us, and with the depth of experience of the Cobalt team, they have helped us to ensure that we understand how we can ensure our compliance with privacy laws and provide our audience comfort that their information is secure. The Cobalt team shares the same values of transparency and trust as is evident in our experiences working with them.",
      author: "Brian P.",
      credentials:
        "Founder of a platform dedicated to bridging the gap between volunteers and organizations, that is helping organizations bring in the right volunteers, and helping volunteers find meaningful opportunities that will support them throughout their professional lives."
    },
    {
      language:
        "As a new company founder with a limited budget, I was very concerned about the cost of legal services spiraling out of control, and the Cobalt team took those fears away by encouraging an unlimited number of questions even before we got started, by including that commitment [to unlimited questions] up front in writing, and by sharing learning materials and answers promptly and during the working period.",
      author: "Yashin S.",
      credentials:
        "Former program manager of a scale-up program at a leading Canadian growth and sales accelerator, and currently the Managing Director of a startup consulting firm, helping high potential Toronto companies build processes and strategies to accelerate market growth in a variety of spaces, including real estate, media and entertainment, among others."
    },
    {
      language:
        "The lawyers at Cobalt are exceptionally understanding of the founder journey, cost sensitivities, business risks and concerns. I have never felt like any question is too small or large of a question. Where work was out of budget for me, Cobalt willingly worked through my problems to make sure I could tackle the parts that mattered the most and stay within budget. Cobalt has walked us through every stage of our company from new company standard document creation, to growth, to financing, to managing internal deals and related disputes. Where we need assistance with preparation for negotiations, Cobalt supplied us with the thinking to support advancing arguments on our own behalf, in a way that was understandable and easy to follow. Their approach to online collaboration works within the founder schedule to keep us in sync. I have referred Cobalt in the past, and would continue to do so in the future.",
      author: "Alex L.",
      credentials:
        "CEO of Mortgauge. an online Real Estate Services company that assists Canadian homeowners navigate the homebuying journey and get the best mortgage offers for their current and future properties."
    },
    {
      language:
        "Through their use of Clausehound [...], the Cobalt approach means that our team has been able to self-educate and ask the “right” questions, which has saved us a lot of money in leapfrogging over the most basic of questions. The lawyers at Cobalt have at each turn provided us with exceptionally thoughtful, thorough responses to our questions, and have supported us with their business-savvy [...] key takeaways and learning points, and attention to our internal considerations in their documentation, drafting, and provision of legal services.",
      author: "Keren M.",
      credentials:
        "Co-Founder and CEO of an award-winning, fast growing data analytics company that uses AI to improve collaboration between borrowers and lenders to streamline the commercial lending journey (as featured on notable sites such as Forbes, Bank Innovation and Financial Revolutionist)."
    },
    {
      language:
        "[Cobalt] assisted us with a variety of commercial legal matters and, specifically in the recruitment and human resources industry [...]. Our unique business model required a complex set of legal documents to support the variety of channels and services that we provide. The expertise and knowledge of the Cobalt team with online services and technology was a crucial asset in helping us navigate our legal requirements and satisfy the needs of our business.",
      author: "Lisa H.",
      credentials:
        "Co-founder of an innovative, future-of-work mobile platform that connects businesses with qualified staff looking for more work. Businesses acquire new talent to help them succeed, and workers receive meaningful work experience through the use of a secure and intuitive platform."
    },
    {
      language:
        "We have been impressed with the commitment by Cobalt to providing a thoughtful response within a six hour service level, with their deal knowledge capture through their software platform, and with the speed at which their software and lawyers are able to collect our thinking and map from prior deals into future deals. As our understanding of their legal and technological capabilities have advanced, we have increased our desire to create [...] automations around [...] legal documentation.",
      author: "Michael Y.",
      credentials:
        'Head of CMS Partnerships for an award-winning digital Design Agency, trusted by numerous enterprise clients, worldwide, with specialties in mobile design, web design, and the ethos of creating "smart" interfaces has have helped their firm skyrocket in growth over its 10+ years in market.'
    },
    {
      language:
        "Our product is protected by patent and Cobalt assisted us with a variety of general corporate/commercial legal matters and, specifically in the areas of international product IP protection, cross border sales, cross border corporate finance negotiations for both large and angel fundraising rounds. I have been highly impressed with the suite of startup knowledge, services and tools provided by Cobalt to our company to support our growth. We have been actively using the Clausehound platform over the years, since the early days when that product was launched by the Cobalt Lawyers. The combination of learning materials embedded in the documents available in that library, and advice provided by Cobalt to support those documents, is a competitively affordable package for our startup company.",
      author: "Trung P.",
      credentials:
        "CEO of a company creating innovative mobile-enabled commercial furnishings tool, as featured on Dragon’s Den, CBS, FOX News and TechCrunch, among many other media outlets, and well on their way to becoming a household name in DIY furnishing automation technologies."
    },
    {
      language:
        "As a new company founder with a limited budget, I was very concerned about legal costs – which were completely managed through my work with Cobalt, who answered questions round-after-round within their fixed fee budget and their unlimited questions policy. The lawyers at Cobalt are exceptionally thoughtful, business-savvy, and attentive to our internal considerations in their documentation, drafting, and provision of legal services. They have assisted us with a variety of general corporate/commercial legal matters and, specifically in the early stages of building an online marketplace. The Cobalt lawyers patiently walked me through a variety of agreements and issues including intellectual property ownership, hiring, e-commerce, APIs and many other topics.",
      author: "Venkat C.",
      credentials:
        "Founder of a SaaS-enabled marketplace focused on knowledge and expertise orchestration."
    },
    {
      language:
        "As a fast growing startup, we have been navigating our search for a startup commercial lawyer carefully, and we are thrilled that we have discovered the lawyers at Cobalt who are exceptionally responsive, thoughtful, and business-savvy to our internal considerations. [Cobalt] assisted us with a variety of general corporate/commercial legal matters including primarily, negotiations on behalf of our company with counterparties who are large hospitals and pharmaceutical companies [...]. They have also assisted us with services to file copyright – dealing with both the Canadian Intellectual Property Office and US Patent and Trademark Office [...]. Where we have a general legal question, [...] Cobalt’s knowledgeable team is always ready with an answer or with a blog article on their content-rich Clausehound blog, for us to read through. They have been a true growth partner to our startup’s growth story",
      author: "Kapil K.",
      credentials:
        "Co-founder of a MedTech company creating mobile-enabled training materials adopted by life sciences companies globally, as recognized with a winning product at the Gold Stevie International Business Awards, and the prestigous Brandon Hall Group Bronze Award."
    },
    {
      language:
        "The lawyers at Cobalt [...] have assisted us with a variety of general corporate/commercial legal matters and, specifically in the intellectual property and technology spheres, they have assisted us with reviews of various commercial contracts including master services agreements, software services agreements, and co-working agreements. These agreements have typically included significant IP and IT provisions that require attention to detail and true legal expertise.",
      author: "Chris E.",
      credentials:
        "CEO of a Software Development Firm helping companies build the software they need to innovate, grow, adapt and change. Their company values and development practices have helped them ship 200 products for enterprise and growth stage startups with a team of more than 150, in several offices across North America, over the course of two decades."
    },
    {
      language:
        "Cobalt Lawyers is the best kept secret on Bay Street, and we are pleased to recommend them.",
      author: "Peter E.",
      credentials:
        'CEO of a world-leading Expertise Marketing Platform and open expert network. Winner of the 2018 CODiE Award for "Best Content Marketing Solution," their platform helps organizations better manage and promote their expertise.'
    },
    {
      language:
        "Starting a company is stressful, but having good lawyers helps! The Cobalt team took the time to ensure that the documents suited both us and our investors, while sticking to their fixed fee quote. They guided us through the process with flexibility and professionalism.",
      author: "Gerard M.",
      credentials:
        "COO and Co-founder of a personalized shopping aggregator and gift giving website. Featured on the homepage of Product Hunt and on a popular reality TV show."
    },
    {
      language:
        "We have been a client of Cobalt's since 2012 and have always enjoyed the professional services offered to us by the firm. We have always received attention, advice and guidance on the issues that matter to us the most. We consider them a trusted partner.",
      author: "Paul Crowe",
      credentials: "CEO - Symbility Intersect"
    },
    {
      language: "Speedy corporate work - everything is automated well!",
      author: "Bernie L.",
      credentials:
        "Serial Entrepeneur and investor with over a decade of experience at venture capital and private equity funds in NYC, Montreal and Toronto."
    }
  ];
  const distinctions = [
    "Seven-time sponsor of Startup Weekend Toronto, recurring sponsor of Ivey Venture Forum, and recurring judge of the annual Ivey business plan competition. Hundreds of hours of judging and mentoring venture capital competitions and technology hackathons.",
    "City of Toronto Official Training Partner, training hundreds of startups on startup business law foundation over the course of a year.",
    "Legal Technology Pioneer recognized by the Law Society of Ontario as a speaker on fixed-fee legal services in the earliest days of fixed-fee billing.",
    "Official Legal Supplier to the City of Mississaga, as External Technology Law counsel (for the second of two consecutive 5-year terms).",
    "Cobalt Lawyers launched Clausehound [hyperlink] and DealPrep [hyperlink] to improve business law accessibility and transparency, and Clausehound is now used by thousands of entrepreneurs in more than 60 incubators, accelerators, colleges, universities and municipalities, for entrepreneur and small business support, and for training on legal topics."
  ];

  const section = document.createElement("section");
  section.className = "all-testimonials";

  testimonials.forEach(testimonial => {
    const blockquote = document.createElement("blockquote");
    blockquote.innerHTML = `
    ${testimonial.language}
    <footer>
      <cite>${testimonial.author}<span> ${testimonial.credentials}</span></cite>
    </footer>`;
    section.appendChild(blockquote);
  });

  distinctions.forEach(distinction => {
    const blockquote = document.createElement("blockquote");
    blockquote.className = 'distinction';
    blockquote.innerHTML = distinction;
    section.appendChild(blockquote);
  });
  cur.parentNode.insertBefore(section, cur);
})();
