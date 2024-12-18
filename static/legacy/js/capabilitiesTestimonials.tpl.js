// Testimonials that are now on Capabilities.html
(() => {
  const parser = new DOMParser();
  const cur = document.currentScript; 

  const testimonialCapabilites = [
    {
      language:
        'The lawyers at Cobalt [...] assisted us with a variety of general corporate legal matters and, specifically with the finalization of our shareholders’ agreement. As these agreements can become quite complex, I was impressed with the attention to detail and true legal expertise that was provided. Above all else, they were keen to ensure that all my concerns were addressed and went above and beyond to consider all aspects of the formation of my business.',
      author: 'Rahim Lalani',
      credentials:
        'CTO and Co-Founder of an online platform that makes finding quality homecare service providers accessible through vetted agencies, reviews and seamless payment processing.',
    },
    {
      language:
        'The Cobalt team made what would otherwise have felt like a grueling traverse through endless contracts, feel instead like a smooth & guided process. They walked our startup through the steps needed to facilitate a major fundraising round, and the team was always a pleasure to meet with, as the discourse was always patient and insightful. The rush vs non-rush option gave us the flexibility to spend more when we needed things rushed, or visa versa, to spend less and move at the firm's speed. This paired with their discovery calls & work over the weekend initiatives makes them the most startup-friendly firm out there!",
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
        'I’ve had a thoroughly enjoyable experience with Cobalt Lawyers who supported my seed round of financing with a California-based VC. My experience with Cobalt has been very different from my frustrating experience with law firms in the past, where I was billed for things that I had already paid years earlier. I would describe my experience with Cobalt as transparent, as they have what I call a “countdown timer”, so that I can know what they’re working on. It’s great that Cobalt tells me basically everything that I need to know and I can see exactly what’s going on. I specifically enjoy their approach to limited scoping and I thought the initial discovery call was a great way to kick off our relationship. With Cobalt, I know that I’m going to get the value out of it since I’m able to see essentially what is happening in real time.',
      author: 'Carl Mascarenhas',
      credentials: 'Joe Zoo, an Ed Tech startup that is helping more than 5 million students.',
    },
    {
      language:
        'Cobalt lawyers team demonstrated an effective and systematic way of communication, providing relevant & valuable information. Cobalt discovery calls are more like experiential workshops, an effective tool to have a better understanding of the context around the requirements at hand. the required  task. I would definitely recommend and use the discovery call again. Cobalt redefined the boredom of the legal process in the era of digital transformation, I see them as a great mentor and strategic partner for many promising future startups.',
      author: 'Joseph Ghanimeh Escapar',
      credentials:
        'Successful Strategic Alliances Specialist managing cross-functional projects to increase presence in North America, by franchising and applying a digital transformation.',
    },
    {
      language:
        'Because I was able to interact with the document on the DealPrep site [Cobalt’s template library], when I needed to escalate my work to the legal support team, they were able to effortlessly see my edits and notes, and to provide immediate feedback.  Together we finalized two documents (both on a partially-DIY basis), at a cost and turnaround time that suited my budget.  Without DealPrep and their escalation-to-legal-review option, I would have either taken a chance with a downloaded template, or potentially would have paid thousands of dollars to hire lawyers to create legal documents, in either case with very little understanding of the contents of the documents.  Instead, I was able to fully and affordably work on the documents using the DealPrep escalate to a lawyer option, and I have confidence that my documents are robust.',
      author: 'Marcelo Bursztein',
      credentials:
        'NovaceneAI, AI consulting to design and implement solutions that automate the process needed to go from data to actionable insight.',
    },
    {
      language:
        'I have been impressed by the approach to teaching, level of diligence and startup-friendly pricing I have been able to receive. When getting started, Cobalt immediately provided me with access to the Clausehound blog and learning library [Cobalt’s tech provider], which was launched and written by the lawyers at Cobalt. The materials provided a wealth of knowledge in the form of thousands of answers to questions on deal points that other startups, entrepreneurs and business professionals had struggled over, that I was able to use as a learning resource during our engagement. This made it possible for me to climb a steep learning curve briskly, gracefully, and affordably. Cobalt encouraged an unlimited number of questions from the moment we first connected and onwards, and the learning materials supported that question and answer process delightfully.',
      author: 'Vania Sakelaris',
      credentials:
        'Founder of a female-led business entrepreneur advisory group and a resident Business Coach at an on-campus incubator.',
    },
    {
      language:
        'I was impressed by the depth of learning materials made available to me by Cobalt, including access to the Clausehound software [Cobalt’s tech provider], which was used as a collaborative portal to support my discussions with the Cobalt lawyers. I was able to populate my questions and track previous questions (both mine and those shared by other entrepreneurs). Because their software is cloud-based, I was able to access my private collaborative portal at all hours of the night, useful for a growing and flexible company like ours.',
      author: 'Morgan Rosenberg',
      credentials:
        'CEO of an innovative mobile app helping users strengthen their resilience and mental flourishing, collaborating with organizations such as the Ontario Brain Institute and the University Health Network and changing the way mental health support is delivered.',
    },
    {
      language:
        'As a new company founder with a limited budget, I was very concerned about the cost of legal services spiraling out of control, and the Cobalt team took those fears away by encouraging an unlimited number of questions even before we got started, by including that commitment [to unlimited questions] up front in writing, and by sharing learning materials and answers promptly and during the working period.',
      author: 'Yashin Shah',
      credentials:
        'Former program manager of a scale-up program at a leading Canadian growth and sales accelerator, and currently the Managing Director of a startup consulting firm, helping high potential Toronto companies build processes and strategies to accelerate market growth in a variety of spaces, including real estate, media and entertainment, among others.',
    },
    {
      language:
        'Starting a company is stressful, but having good lawyers helps! The Cobalt team took the time to ensure that the documents suited both us and our investors, while sticking to their fixed fee quote. They guided us through the process with flexibility and professionalism.',
      author: 'Gerard Maynard',
      credentials:
        'COO and Co-founder of a personalized shopping aggregator and gift giving website. Featured on the homepage of Product Hunt and on a popular reality TV show.',
    },
    {
      language:
        "We have been a client of Cobalt's since 2012 and have always enjoyed the professional services offered to us by the firm. We have always received attention, advice and guidance on the issues that matter to us the most. We consider them a trusted partner.",
      author: 'Paul Crowe',
      credentials: 'CEO - Symbility Intersect',
    },
    {
      language:
        'At BKR Energy, we are very focused on technical terms and the literature of contractual terms/documents is vague to us and even sometimes hard to understand. Cobalt team has been very patient with us and retranslated the contractual terms with a simple language to us. With Cobalt team supports, we could better understand the complexity of contractual documents to make wiser decisions.',
      author: 'Nima Alibabaei',
      credentials:
        'BKR Energy, A climate change-focused company, working with enterprise to build AI-based solutions for HVAC systems.',
    },
    {
      language:
        'We recently needed to update our content licensing agreements for blog contributors. Building off the Cobalt intake form, which we completed in advance of our meeting, the "Discovery Call" with Cobalt attorneys was a great use of our time. In (less than) 30 minutes, we briefed Cobalt on our needs. They asked thoughtful critical questions, deepening our understanding of what we want to achieve, and then they were off and running working on the agreements!',
      author: 'John Gauch',
      credentials:
        'The PTDC, An internationally recognized leader in personal training and nutrition coaching, hosting the world’s premier certification for online training.',
    },
    {
      language:
        'The Cobalt team was fantastic to work with. They provided great work, on a timely basis, at a clear (and incredibly reasonable) price. Cobalt listened to my unique needs and provided me with documents and tools that enable me to work with confidence, knowing that my business and my intellectual property are protected.',
      author: 'Krista Pawley',
      credentials:
        'Imperative Impact, Over 20 years in the PR space, having worked with leading financial institutions and innovation organizations across Ontario.',
    },
    {
      language:
        'The $45 Discovery Call made legal services affordable, helped limit risk and move our business faster. Sometimes we used Cobalt templates as a starting point, modified it and obtained feedback during the discovery call. In other instances we were given legal documents by clients and partners, added our own notes and subsequently secured feedback from Cobalt via a discovery call.',
      author: 'Joe Anandarajah',
      credentials:
        'Semantic Brain, Building AI-based Financial Services technology and bridging the gap between AI and financial analysis.',
    },
    {
      language:
        "The discovery call process was an efficient and effective way of opening the possibilities of the legal expertise within Cobalt. Through that process we engineered novel solutions with passionate partners that consistently exceeded expectations. The process produced a team that's responsive and engaged to contribute on many comprehensive levels.",
      author: 'Peter Vuong',
      credentials:
        'Sentry Health, Redefining clinic management, currently serving over 35 clinics across Canada and facilitating over 9,500 monthly appointments.',
    },
    {
      language:
        'The Discovery Call option made legal services more accessible to me. I was in a unique situation where I was offered a business opportunity that requires a special contract. Cobalt Lawyers helped me understand the documents and suggested amendments based on my requests.',
      author: 'Alice Hsueh',
      credentials:
        'Straw Matters, Canadian owned eco-friendly business delivering biodegradable, compostable sugarcane straws.',
    },
    {
      language:
        "Working with Cobalt did two things. I didn't have to worry about the legal side of my project because I knew I was in good hands. They took the time to do everything properly but not in an institutional feeling way. They're also incredibly responsive and knowledgeable.",
      author: 'Lucas Walker',
      credentials:
        "Host of Lucas Walker's Rolled Up, exploring the stories of resilient founders across industries.",
    },
    {
      language:
        'The team at Cobalt was very helpful in helping me understand the complexities involved in the legal matter that I was facing. They provided me with all the relevant information and helped me with drafting the appropriate documents.',
      author: 'Payam Ahangar',
      credentials:
        'P2 Realty, A a real estate brokerage with over 30 years of experience developing communities and satisfying buyers, with a wealth of new home development background in the Greater Toronto region.',
    },
    {
      language:
        'The Discovery Call was an effective way to get a really good understanding of the process and the steps forward. Rajah and his team are always clear in their communication and thorough with their work. They have earned our trust over the years of working together.',
      author: 'Jerry Chang',
      credentials:
        'IPPINKA, providing carefully selected products that are functional, high quality, environmentally and socially conscious, with a minimalist aesthetic design that withstands time.',
    },
  ];

  const distinctionsCapabilites = [
        "Cobalt Lawyers launched <a href='https://about.clausehound.com/'>Clausehound</a> and <a href='https://www.dealprep.co/'>DealPrep</a> to improve business law accessibility and transparency, and Clausehound is now used by thousands of entrepreneurs in more than 60 incubators, accelerators, colleges, universities and municipalities, for entrepreneur and small business support, and for training on legal topics.",
        'City of Toronto Official Training Partner, training hundreds of startups on startup business law foundation over the course of a year.',

    ]

  const section = document.createElement('section');
  section.className = 'all-testimonials';

  const start = +(cur.hasAttribute('start') ? cur.getAttribute('start') : 0);
  const end = +(cur.hasAttribute('end') ? cur.getAttribute('end') : testimonialCapabilites.length);

  testimonialCapabilites.slice(start, end).forEach((testimonialCapabilites) => {
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `
    ${testimonialCapabilites.language}
    <footer>
      <cite>${testimonialCapabilites.author}<span> ${testimonialCapabilites.credentials}</span></cite>
    </footer>`;
    section.appendChild(blockquote);
  });

  if (!cur.hasAttribute('end')) {
    distinctionsCapabilites.forEach((distinctionsCapabilites) => {
      const blockquote = document.createElement('blockquote');
      blockquote.className = 'distinction';
      blockquote.innerHTML = distinctionsCapabilites;
      section.appendChild(blockquote);
    });
  }
  cur.parentNode.insertBefore(section, cur);
})();
