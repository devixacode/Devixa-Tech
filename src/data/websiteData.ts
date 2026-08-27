import { ServiceItem, ProjectItem, CaseStudy, ProcessStage, TechCategory, IndustryItem, TestimonialItem, FaqItem } from '../types';

export const COMPANY_STATS = [
  { id: 'projects', label: 'Projects Completed', value: 120, suffix: '+', note: 'Web & Enterprise Systems' },
  { id: 'clients', label: 'Happy Clients', value: 45, suffix: '+', note: 'Across 12 Countries' },
  { id: 'solutions', label: 'Digital Solutions', value: 85, suffix: '+', note: 'Web, AI & Automations' },
  { id: 'experience', label: 'Years of Experience', value: 5, suffix: '+', note: 'Engineering Excellence' }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    category: 'Web Development',
    title: 'Web Development',
    shortDescription: 'High-performance, secure, and scalable web solutions engineered for maximum conversion, speed, and business reliability.',
    iconName: 'Globe',
    items: [
      'Business Websites',
      'Landing Pages',
      'Custom Web Applications',
      'E-commerce Websites',
      'WordPress Development'
    ],
    deliverables: [
      'Custom responsive frontend architecture (Next.js / React)',
      'High-speed server-side rendering & dynamic routing',
      'SEO optimization & Core Web Vitals compliance',
      'Secure payment gateway & CMS integration',
      'Continuous integration & staging deployments'
    ],
    idealFor: 'Businesses aiming to scale revenue, launch new digital services, or upgrade legacy websites into modern web platforms.'
  },
  {
    id: 'ui-ux',
    category: 'UI/UX & Graphic Design',
    title: 'UI/UX & Graphic Design',
    shortDescription: 'User-centered product interfaces, high-impact design systems, and cohesive brand identities that captivate and convert.',
    iconName: 'Palette',
    items: [
      'UI/UX Design',
      'Website Design',
      'Logo Design',
      'Brand Identity',
      'Social Media Design'
    ],
    deliverables: [
      'Interactive Figma prototypes & design tokens',
      'User journey mapping & high-fidelity wireframing',
      'Complete vector brand guidelines & typography systems',
      'Conversion-rate optimized component libraries',
      'Social media visual kits & promotional collateral'
    ],
    idealFor: 'Brands that want to differentiate themselves with modern, premium visuals and intuitive digital user experiences.'
  },
  {
    id: 'custom-software',
    category: 'Custom Software Solutions',
    title: 'Custom Software Solutions',
    shortDescription: 'Tailored enterprise software, business management portals, dashboards, and automated system integrations.',
    iconName: 'Cpu',
    items: [
      'Custom Software Development',
      'Business Management Systems',
      'Dashboards',
      'CRM Solutions',
      'ERP Solutions',
      'API Integrations'
    ],
    deliverables: [
      'Custom role-based dashboard & analytics portals',
      'Secure RESTful & GraphQL backend APIs',
      'Automated customer relationship & pipeline management',
      'Inventory, billing, and resource management modules',
      'Third-party cloud & legacy database connectors'
    ],
    idealFor: 'Growing enterprises seeking to eliminate operational bottlenecks and automate proprietary business workflows.'
  },
  {
    id: 'ai-automation',
    category: 'AI & Automation',
    title: 'AI & Automation',
    shortDescription: 'Intelligent AI chatbots, automated business pipelines, OpenAI integrations, and custom workflow automations.',
    iconName: 'Bot',
    items: [
      'AI Chatbots',
      'AI Integrations',
      'Business Automation',
      'AI-powered Solutions',
      'Workflow Automation'
    ],
    deliverables: [
      'Custom trained 24/7 intelligent customer support chatbots',
      'Automated document processing & data extraction',
      'OpenAI / LLM API integration into internal software',
      'Zapier, Make, and webhook enterprise pipeline triggers',
      'Predictive analytics & intelligent workflow routing'
    ],
    idealFor: 'Organizations looking to save countless manual hours, cut operational costs, and boost customer response speeds.'
  },
  {
    id: 'digital-marketing',
    category: 'Digital Marketing',
    title: 'Digital Marketing',
    shortDescription: 'Data-driven SEO campaigns, targeted paid ads, content marketing, and strategic digital growth funnels.',
    iconName: 'TrendingUp',
    items: [
      'Search Engine Optimization',
      'Social Media Marketing',
      'Paid Advertising',
      'Content Marketing',
      'Digital Growth Strategies'
    ],
    deliverables: [
      'Technical on-page & off-page SEO audits & rankings',
      'High-ROI Google Search & Meta ad campaign setup',
      'Conversion rate optimization (CRO) landing tests',
      'Strategic content calendars & targeted copy',
      'Monthly ROI, traffic, and lead generation analytics'
    ],
    idealFor: 'Companies ready to drive qualified inbound traffic, generate high-intent sales leads, and dominate their niche online.'
  }
];

export const WHY_DEVIXA_POINTS = [
  {
    number: '01',
    title: 'Business First',
    description: "We don't just build technology; we solve real business problems and align every feature with your commercial goals."
  },
  {
    number: '02',
    title: 'Modern Technology',
    description: 'We use modern technologies and scalable solutions to build reliable, maintainable, and high-performance digital products.'
  },
  {
    number: '03',
    title: 'Custom Solutions',
    description: "Every solution is tailored to the client's specific goals, workflows, and brand identity—never cookie-cutter templates."
  },
  {
    number: '04',
    title: 'Transparent Process',
    description: 'Clear communication, defined milestones, regular sprint updates, and collaborative progress tracking from day one.'
  },
  {
    number: '05',
    title: 'Quality & Performance',
    description: 'Fast, responsive, secure, and user-friendly digital experiences rigorously tested across devices and high-load scenarios.'
  },
  {
    number: '06',
    title: 'Long-Term Support',
    description: 'Continued technical support, cloud maintenance, security patches, and iterative improvements long after launch.'
  }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'finscale-portal',
    name: 'Portfolio Website',
    client: 'FinScale Global Ltd.',
    industry: 'Software Development',
    servicesProvided: ['Custom Software Development', 'UI/UX Design', 'API Integrations'],
    technologies: ['React', 'Node.js', 'Javascript', 'Tailwind CSS', 'Figma'],
    shortDescription: 'A Portfolio website that make your Skill identity Powerfull.',
    keyResult: 'Many Clients hired by visited portfolio',
    image: 'portfolio.png',
    caseStudyId: 'finscale-case-study',
    featured: true
  },
  {
    id: 'aurora-commerce',
    name: 'Aurora Direct E-Commerce',
    client: 'Aurora Lifestyle Brands',
    industry: 'E-commerce & Retail',
    servicesProvided: ['Web Development', 'UI/UX Design', 'Digital Marketing'],
    technologies: ['Next.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS', 'Figma'],
    shortDescription: 'High-speed headless e-commerce store with real-time stock sync, localized checkouts, and sub-second page loads.',
    keyResult: 'Achieved 42% uplift in conversion rate and decreased bounce rate by 34% within the first quarter.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    caseStudyId: 'aurora-case-study',
    featured: true
  },
  {
    id: 'medsync-ai',
    name: 'MedSync AI Automation Engine',
    client: 'MedSync Health Systems',
    industry: 'Healthcare',
    servicesProvided: ['AI & Automation', 'Custom Software Solutions'],
    technologies: ['Python', 'OpenAI APIs', 'Node.js', 'MongoDB', 'Docker'],
    shortDescription: 'Automated patient triage and doctor schedule assistant with secure HIPAA-aligned data processing and natural language inquiry resolution.',
    keyResult: 'Automated 75% of routine appointment bookings and saved 120+ clinical staff hours every month.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    caseStudyId: 'medsync-case-study',
    featured: true
  },
  {
    id: 'vanguard-corp',
    name: 'Vanguard Group Corporate Web Portal',
    client: 'Vanguard Capital Partners',
    industry: 'Business & Corporate',
    servicesProvided: ['Web Development', 'Brand Identity', 'SEO Strategy'],
    technologies: ['React', 'Next.js', 'Figma', 'Vercel', 'Tailwind CSS'],
    shortDescription: 'Flagship corporate digital presence with interactive investor relations reports, bilingual localization, and dynamic asset showcases.',
    keyResult: 'Increased organic search traffic by 180% and captured 3x more institutional investor inquiries.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    caseStudyId: 'vanguard-case-study',
    featured: false
  },
  {
    id: 'propview-crm',
    name: 'PropView Real Estate CRM & Broker Hub',
    client: 'PropView Properties',
    industry: 'Real Estate',
    servicesProvided: ['Custom Software Solutions', 'UI/UX Design', 'API Integrations'],
    technologies: ['Laravel', 'MySQL', 'React', 'Google Maps API', 'AWS'],
    shortDescription: 'Custom property management and multi-agent deal pipeline CRM with automated contract generation and live MLS sync.',
    keyResult: 'Boosted broker closing velocity by 2.4x with zero duplicate listings across 5,000+ units.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    caseStudyId: 'propview-case-study',
    featured: false
  },
  {
    id: 'eduflow-lms',
    name: 'EduFlow Digital Learning Platform',
    client: 'EduFlow Academy',
    industry: 'Education',
    servicesProvided: ['Web Development', 'UI/UX Design', 'Custom Software Solutions'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS S3', 'Tailwind CSS'],
    shortDescription: 'Interactive learning management system with live quizzes, progress tracking, and secure video streaming for 20,000+ students.',
    keyResult: 'Maintained 99.98% uptime during peak examination periods with an average student satisfaction score of 4.9/5.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    caseStudyId: 'eduflow-case-study',
    featured: false
  }
];

export const CASE_STUDIES_DATA: Record<string, CaseStudy> = {
  'finscale-case-study': {
    id: 'finscale-case-study',
    title: 'Modernizing Treasury Reconciliation for Global Fintech',
    client: 'FinScale Global Ltd.',
    industry: 'Finance & Fintech',
    timeline: '12 Weeks (Discovery to Production)',
    challenge: 'FinScale processed thousands of cross-border transactions daily using fragmented spreadsheet tools and disjointed legacy accounting APIs. Manual reconciliations caused processing delays of up to 48 hours and increased the risk of accounting discrepancies during month-end closes.',
    ourApproach: 'Devixa Tech conducted deep operational discovery sessions with FinScale treasury officers, mapped all transaction ingestion pipelines, and architected an event-driven reconciliation engine coupled with an executive-grade React dashboard.',
    solution: 'We engineered an automated data ingestion pipeline that normalizes transactions across multiple banking APIs in real time, applies smart exception flagging rules, and presents audit trails through a high-performance, dark-mode analytics console.',
    technology: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'Docker', 'AWS'],
    implementation: [
      'Engineered real-time webhook listeners and batch ETL processors for multi-currency transactions.',
      'Constructed a rule-based automated matcher that reconciles 95%+ of entries instantly.',
      'Designed an intuitive UI with interactive data tables, granular permission filters, and CSV/PDF export capabilities.',
      'Implemented end-to-end encryption and audit logging adhering to strict financial compliance standards.'
    ],
    result: {
      highlight: 'Reconciliation cycle compressed from 48 hours to under 15 minutes with 99.99% accuracy.',
      metrics: [
        { label: 'Time Reduction', value: '68%' },
        { label: 'Data Accuracy', value: '99.99%' },
        { label: 'Active Currencies', value: '8' },
        { label: 'Daily Volume', value: '$4.2M+' }
      ],
      summary: 'FinScale gained complete operational visibility, eliminated month-end overtime costs, and scaled their client transaction volume without requiring additional back-office staff.'
    }
  },
  'aurora-case-study': {
    id: 'aurora-case-study',
    title: 'Scaling Direct-to-Consumer Digital Commerce with Sub-Second Performance',
    client: 'Aurora Lifestyle Brands',
    industry: 'E-commerce & Retail',
    timeline: '8 Weeks',
    challenge: 'Aurora was suffering from high cart abandonment rates and slow page speeds on their legacy e-commerce platform during peak seasonal promotions, particularly on mobile devices where 70% of traffic originated.',
    ourApproach: 'We restructured their entire digital storefront into a blazing-fast headless architecture using Next.js with optimized edge caching, clean mobile UI design, and single-click checkout flows.',
    solution: 'A bespoke digital storefront connected to scalable cloud databases and secure payment gateways, featuring instant search, dynamic bundle recommendations, and localized currency support.',
    technology: ['Next.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS', 'Figma', 'Vercel Edge'],
    implementation: [
      'Redesigned the entire product catalog, filtering system, and cart drawer for frictionless mobile UX.',
      'Implemented Next.js incremental static regeneration for instantaneous page loads.',
      'Integrated Stripe Elements with Apple Pay and Google Pay for instant checkout.',
      'Built automated abandoned cart email triggers and conversion tracking pixels.'
    ],
    result: {
      highlight: '42% conversion rate increase and 1.8s reduction in average mobile checkout time.',
      metrics: [
        { label: 'Conversion Lift', value: '+42%' },
        { label: 'Bounce Rate', value: '-34%' },
        { label: 'Page Load Time', value: '0.6s' },
        { label: 'Mobile Sales', value: '+55%' }
      ],
      summary: 'The new digital commerce experience generated record-breaking sales in the first quarter post-launch with zero server downtime during flash sales.'
    }
  },
  'medsync-case-study': {
    id: 'medsync-case-study',
    title: 'Intelligent AI-Powered Patient Triage & Appointment Automation',
    client: 'MedSync Health Systems',
    industry: 'Healthcare',
    timeline: '10 Weeks',
    challenge: 'Medical receptionists were overwhelmed by 400+ daily inbound phone calls for appointment scheduling, rescheduling, and basic clinic questions, leading to long hold times and high staff turnover.',
    ourApproach: 'Devixa Tech designed a HIPAA-compliant conversational AI agent integrated with MedSync\'s existing clinic calendar and EHR software to resolve patient inquiries 24/7.',
    solution: 'An intelligent AI booking chatbot deployed across web and WhatsApp channels capable of understanding natural medical symptom descriptions, matching suitable specialists, and scheduling appointments automatically.',
    technology: ['Python', 'OpenAI APIs', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
    implementation: [
      'Developed custom prompt pipelines with strict medical guardrails and emergency escalation routing.',
      'Built bidirectional calendar synchronization preventing double bookings.',
      'Provided an administrative dashboard for clinical staff to review AI transcripts and take over live chats.',
      'Conducted rigorous security and penetration testing to protect protected health information (PHI).'
    ],
    result: {
      highlight: 'Automated 75% of routine bookings with an average response time of under 3 seconds.',
      metrics: [
        { label: 'Routine Bookings Automated', value: '75%' },
        { label: 'Monthly Hours Saved', value: '120+' },
        { label: 'Patient Satisfaction', value: '98%' },
        { label: 'Response Time', value: '<3s' }
      ],
      summary: 'MedSync reduced patient phone hold times to zero while enabling clinical staff to dedicate more time to in-person patient care.'
    }
  }
};

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Discovery',
    description: "Understand the client's business, goals, target audience, competitive landscape, and specific technical requirements.",
    deliverables: ['Business Requirements Document', 'Scope & Tech Stack Architecture', 'Project Milestone Timeline']
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Develop the overarching digital strategy, product feature prioritization, system architecture, and strategic roadmap.',
    deliverables: ['System Architecture Diagram', 'Feature Prioritization Matrix', 'Sitemap & User Flows']
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create the UI/UX, interactive prototypes, design systems, and overall visual user experience tailored to your brand.',
    deliverables: ['Wireframes & High-Fidelity UI', 'Interactive Figma Prototype', 'Design System & Component Kit']
  },
  {
    step: '04',
    title: 'Development',
    description: 'Build the custom digital solution, develop secure frontend and backend architectures, and integrate all required external systems.',
    deliverables: ['Clean, Production-Ready Codebase', 'API & Database Integration', 'Staging Environment Demos']
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Thoroughly test functionality, cross-browser responsiveness, performance, security protocols, and quality standards.',
    deliverables: ['QA & Cross-Device Test Reports', 'Performance & SEO Audits', 'Security & Load Validation']
  },
  {
    step: '06',
    title: 'Launch & Support',
    description: 'Deploy the project to scalable production infrastructure and provide continuous support, monitoring, and iterative maintenance.',
    deliverables: ['Production Deployment', 'Admin Onboarding & Documentation', 'Ongoing Technical Support & SLA']
  }
];

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', description: 'Interactive, component-based modern UI development' },
      { name: 'Next.js', description: 'Server-rendered, SEO-optimized web applications' },
      { name: 'HTML5', description: 'Semantic, accessible, and structured markup' },
      { name: 'CSS3 / Tailwind', description: 'Ultra-fast, responsive, utility-driven styling' },
      { name: 'JavaScript / TypeScript', description: 'Type-safe, reliable enterprise client code' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', description: 'Asynchronous, high-throughput backend APIs' },
      { name: 'PHP', description: 'Reliable server-side script execution & CMS backends' },
      { name: 'Python', description: 'Data processing, scripting, and backend microservices' },
      { name: 'Laravel', description: 'Robust, elegant MVC architecture for web platforms' }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL', description: 'Structured relational data storage and indexing' },
      { name: 'PostgreSQL', description: 'Advanced open-source relational database' },
      { name: 'MongoDB', description: 'Flexible NoSQL document database for dynamic data' }
    ]
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', description: 'Collaborative UI/UX, wireframing, and interactive prototypes' },
      { name: 'Adobe Photoshop', description: 'High-resolution digital graphics and image manipulation' },
      { name: 'Adobe Illustrator', description: 'Precision vector logos, icons, and brand graphics' }
    ]
  },
  {
    AI: true,
    category: 'AI & Automation',
    items: [
      { name: 'AI APIs', description: 'Custom integration of modern intelligent endpoints' },
      { name: 'OpenAI Integrations', description: 'LLM-powered reasoning, chatbots, and NLP workflows' },
      { name: 'Automation Tools', description: 'Zapier, Make, custom webhooks, and ETL pipelines' }
    ]
  } as any,
  {
    category: 'Cloud / Deployment',
    items: [
      { name: 'AWS', description: 'Enterprise cloud hosting, S3 storage, and serverless compute' },
      { name: 'Vercel', description: 'Global edge deployment with instant worldwide CDN' },
      { name: 'Firebase', description: 'Real-time database, authentication, and cloud functions' }
    ]
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    name: 'Business & Corporate',
    description: 'Enterprise websites, stakeholder portals, and digital transformation platforms built for market authority.',
    solutionFocus: ['Corporate Web Portals', 'Investor Relations', 'Brand Systems'],
    icon: 'Building2'
  },
  {
    name: 'E-commerce',
    description: 'High-converting online storefronts, inventory management systems, and frictionless payment gateways.',
    solutionFocus: ['Custom Stores', 'Checkout Optimization', 'Multi-Currency Payments'],
    icon: 'ShoppingBag'
  },
  {
    name: 'Healthcare',
    description: 'Secure patient booking portals, clinic management tools, and automated communication solutions.',
    solutionFocus: ['Patient Portals', 'Appointment Automations', 'HIPAA-Aware UI'],
    icon: 'HeartPulse'
  },
  {
    name: 'Education',
    description: 'Learning management systems, course portals, student dashboards, and interactive digital classrooms.',
    solutionFocus: ['E-Learning Platforms', 'Student Portals', 'Assessment Engines'],
    icon: 'GraduationCap'
  },
  {
    name: 'Real Estate',
    description: 'Property listing platforms, broker management CRMs, and interactive map search experiences.',
    solutionFocus: ['MLS Integrations', 'Lead Capture Funnels', 'Broker Dashboards'],
    icon: 'Home'
  },
  {
    name: 'Finance',
    description: 'Fintech dashboards, investment portals, transaction monitors, and secure customer account hubs.',
    solutionFocus: ['Financial Dashboards', 'API Integrations', 'High-Security Architectures'],
    icon: 'Landmark'
  },
  {
    name: 'Food & Restaurant',
    description: 'Online ordering platforms, digital menu portals, table reservation systems, and loyalty solutions.',
    solutionFocus: ['Custom Online Ordering', 'Menu CMS', 'Local SEO & Growth'],
    icon: 'Utensils'
  },
  {
    name: 'Startups',
    description: 'Rapid MVP development, high-converting product landing pages, and scalable cloud foundations.',
    solutionFocus: ['MVP Engineering', 'Pitch-Ready Prototypes', 'Scalable Cloud Architecture'],
    icon: 'Rocket'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Marcus Sterling',
    position: 'Chief Technology Officer',
    company: 'FinScale Global',
    country: 'United Kingdom',
    testimonial: 'Devixa Tech delivered our enterprise dashboard ahead of schedule with remarkable code quality and exceptional attention to UI detail. Their team felt like a direct extension of our engineering department.',
    projectType: 'Custom Software & Dashboard',
    rating: 5
  },
  {
    id: 't2',
    clientName: 'Elena Rostova',
    position: 'Head of Digital Commerce',
    company: 'Aurora Lifestyle Brands',
    country: 'United States',
    testimonial: 'Our website loading speed decreased by more than half, and our conversion rate jumped 42% within weeks of launch. Working with Devixa Tech was the best investment we made this year.',
    projectType: 'E-commerce & Web Development',
    rating: 5
  },
  {
    id: 't3',
    clientName: 'Dr. Tariq Al-Mansoor',
    position: 'Operations Director',
    company: 'MedSync Health Systems',
    country: 'UAE',
    testimonial: 'The AI automation system designed by Devixa Tech transformed our clinic reception. It handles hundreds of patient inquiries every day accurately and effortlessly.',
    projectType: 'AI & Automation Solution',
    rating: 5
  },
  {
    id: 't4',
    clientName: 'Sarah Jenkins',
    position: 'Managing Partner',
    company: 'Vanguard Capital',
    country: 'Singapore',
    testimonial: 'Professional, highly responsive, and true masters of modern web architecture. Our new corporate portal has significantly elevated our brand credibility with international investors.',
    projectType: 'Corporate Web Portal',
    rating: 5
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How much does a website cost?',
    answer: 'The cost of a website depends on your specific requirements, scope, features, and custom design needs. A high-converting business landing page or corporate website typically starts at a fixed baseline, while complex web applications, custom software, and multi-system integrations are scoped based on specific functional milestones. We provide transparent, itemized quotes with zero hidden fees after our discovery call.'
  },
  {
    id: 'faq-2',
    question: 'How long does a project take?',
    answer: 'Standard business websites and landing pages generally take 2 to 4 weeks from discovery to launch. Larger corporate websites, e-commerce platforms, and custom software systems typically take between 6 to 12 weeks depending on feature complexity. We define clear milestones and weekly sprint updates so you always know exact delivery dates.'
  },
  {
    id: 'faq-3',
    question: 'Do you provide website maintenance?',
    answer: 'Yes! We provide ongoing monthly maintenance and support packages that include cloud hosting management, automated daily backups, security monitoring, software updates, speed optimization, and dedicated hours for ongoing feature updates and content revisions.'
  },
  {
    id: 'faq-4',
    question: 'Can you redesign an existing website?',
    answer: 'Absolutely. We specialize in modernizing legacy websites with contemporary UI/UX, faster load times, modern responsive layouts, and improved conversion funnels while preserving your existing SEO rankings and domain authority.'
  },
  {
    id: 'faq-5',
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients across North America, Europe, the Middle East, Asia, and Australia. We operate with flexible communication schedules, asynchronous updates, video calls, and global payment methods to ensure smooth collaboration regardless of time zone.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide custom software solutions?',
    answer: 'Yes. Beyond websites, we build custom business management software, client dashboards, CRM/ERP systems, internal admin portals, and custom API integration engines tailored to eliminate manual workflows in your business.'
  },
  {
    id: 'faq-7',
    question: 'Do you provide AI and automation solutions?',
    answer: 'Yes! We engineer intelligent AI customer support chatbots, OpenAI / LLM-powered integrations into existing software, and business workflow automations that connect tools like CRMs, databases, and communication channels to save operational hours.'
  },
  {
    id: 'faq-8',
    question: 'Can I request a custom quotation?',
    answer: 'Yes! You can fill out our Project Inquiry form with your project details, budget range, and timeline, or reach out directly via WhatsApp / Email. Our team will review your requirements and provide a detailed proposal within 24 hours.'
  }
];

export const CONTACT_INFO = {
  email: 'devixatech.info@gmail.com',
  secondaryEmail: 'devixatech.info@gmail.com',
  phone: '+92 3021753363',
  whatsapp: '+923021753363',
  location: 'Global Digital Agency • Serving Clients Worldwide',
  hours: 'Monday – Friday: 9:00 AM – 6:00 PM (EST / UTC-5)',
  web3formsAccessKey: '038de17f-2a2f-48f7-9a41-56dff4cc1891',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/muhammad-salman-435b633a8/',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com/devixatechsolution',
    github: 'https://github.com/devixacode'
  }
};
