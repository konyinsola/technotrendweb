import { HOME_SECTION_IDS, ROUTES, buildSectionHref } from '@/lib/routes';

export const siteConfig = {
  name: 'TechnoTrend Platforms Nigeria Limited',
  shortName: 'TechnoTrend',
  description:
    'We build secure digital systems, telecom services, and business platforms that help ambitious African businesses connect and scale.',
  url: 'https://technotrendng.com',
  contact: {
    email: 'info@technotrendng.com',
    phone: '+234 01-6323541',
    address: '88, Norman Williams Street, Ikoyi, Lagos, Nigeria',
    city: 'Lagos, Nigeria',
  },
  socialPreview: '/logo.svg',
} as const;

export const navigationItems = [
  { label: 'About', href: buildSectionHref(HOME_SECTION_IDS.about) },
  { label: 'Services', href: buildSectionHref(HOME_SECTION_IDS.services) },
  { label: 'Products', href: buildSectionHref(HOME_SECTION_IDS.products) },
  { label: 'Partners', href: buildSectionHref(HOME_SECTION_IDS.partners) },
  { label: 'Contact', href: ROUTES.contact },
] as const;

export const homePageContent = {
  hero: {
    eyebrow: 'IT • Telecoms • Digital Products',
    titleLines: ['We build digital', 'systems that help', 'businesses'],
    highlightedWord: 'connect',
    closingLine: 'and scale.',
    description:
      'TechnoTrend Platforms Nigeria Limited provides telecom solutions, mobile and web applications, AI-enabled systems, and digital product development for businesses across Africa.',
    ctaLabel: 'View Products',
    ctaHref: buildSectionHref(HOME_SECTION_IDS.products),
  },
  about: {
    eyebrow: 'About',
    title: "Built for the businesses shaping Africa's digital economy.",
    description:
      'TechnoTrend Platforms Nigeria Limited is a full-service information technology and telecoms business services company. We help businesses create digital products, connect to mobile network services, automate operations, and serve customers through reliable technology.',
    cards: [
      {
        title: 'Telecom Experience',
        description: "Carrier-grade services across Nigeria's major networks",
      },
      {
        title: 'Digital Product Development',
        description: 'End-to-end product design, development, and launch',
      },
      {
        title: 'Business Technology Integration',
        description: 'Connecting enterprise systems with modern platforms',
      },
    ],
  },
  stack: {
    title: 'Technotrend Platform Stack',
    statusLabel: 'All Systems Active',
    items: [
      {
        title: 'Telecom Services',
        tags: ['IVR', 'USSD', 'SMS', 'Call Collect', 'StarCall'],
      },
      {
        title: 'Digital Products',
        tags: ['HomeInteriors', 'Autobrand', '24/7 Rides'],
      },
      {
        title: 'AI & Automation',
        tags: ['Cognitive services', 'Prediction', 'Workflow intelligence'],
      },
      {
        title: 'Integration Layer',
        tags: ['APIs', 'Enterprise systems', 'Mobile networks'],
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Not just IT services - practical technology infrastructure.',
    items: [
      {
        title: 'Carrier Grade Services',
        description:
          'IVR, USSD, SMS, games, and telecom services built for mobile network subscribers.',
        emphasized: true,
      },
      {
        title: 'Mobile & Web Applications',
        description:
          'Custom platforms for real estate, mobility, e-commerce, enterprise operations, and customer engagement.',
        emphasized: false,
      },
      {
        title: 'Cognitive Services',
        description:
          'Speech recognition, vision systems, knowledge services, and intelligent automation tools.',
        emphasized: false,
      },
      {
        title: 'Technology Interoperability',
        description:
          'API integrations and system connections that allow platforms, telecom systems, and enterprise tools to work together.',
        emphasized: false,
      },
      {
        title: 'Artificial Intelligence',
        description:
          'Predictive systems, workflow automation, data intelligence, and productivity-focused solutions.',
        emphasized: true,
      },
      {
        title: 'Health IT',
        description:
          'Health informatics, telemedicine, clinical integration, and digital prescription solutions.',
        emphasized: false,
      },
    ],
  },
  clients: {
    eyebrow: 'Clients',
    title: 'Who we build for',
    description:
      'From telecom operators to digital product founders - we serve businesses that take technology seriously.',
    items: [
      'Telecom Operators',
      'Real Estate Businesses',
      'Mobility Companies',
      'Healthcare Providers',
      'E-commerce Brands',
      'Enterprise Teams',
      'Digital Product Founders',
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Products we have built',
    items: [
      {
        image: '/home.png',
        status: 'Live',
        title: 'HomeInteriors',
        description:
          'A digital platform for home interiors, property styling, and lifestyle-focused improvement solutions.',
        href: 'https://homeinteriorsng.com/',
      },
      {
        image: '/real.png',
        status: 'Live',
        title: 'RealProperties',
        description:
          "A digital property platform connecting buyers, sellers, and agents across Nigeria's real estate market.",
        href: 'https://realpropertiesng.com/',
      },
      {
        image: '/auto.png',
        status: 'Live',
        title: 'Autobrand',
        description:
          'A digital platform for automotive branding, vehicle presentation, and auto-related business visibility.',
        href: 'https://autobrandng.com/',
      },
      {
        image: '/rides.png',
        status: 'Coming soon',
        title: '24/7 Rides',
        description:
          'A mobility platform being developed to support smarter, safer, and more accessible ride services.',
        href: undefined,
      },
    ],
  },
  telecomProducts: {
    eyebrow: 'Telecom Products',
    title: 'Telecom products built for real mobile users.',
    items: [
      {
        label: 'Callback Service',
        icon: '📲',
        title: 'StarCall',
        description:
          'A callback service that allows subscribers to notify another user to call them back when they have low or no airtime.',
        tags: ['Low airtime', 'Free to send', 'Real-time notification'],
        emphasized: true,
      },
      {
        label: 'Collect Call Service',
        icon: '📞',
        title: 'Call Collect',
        description:
          'A collect-call service that allows a subscriber to place a call even with low balance, while the receiving party accepts the charge.',
        tags: ['Zero balance', 'Party acceptance', 'Carrier-grade'],
        emphasized: false,
      },
    ],
  },
  partners: {
    eyebrow: 'Partners',
    title: 'Trusted across the telecom ecosystem.',
    items: [
      { src: '/airtel.png', alt: 'Airtel' },
      { src: '/star.png', alt: 'Starlogik' },
      { src: '/fon.png', alt: 'fonYou' },
      { src: '/inmobile.png', alt: 'Inmobiles' },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: 'From idea to working product.',
    steps: [
      {
        number: '01',
        title: 'Understand',
        description:
          'We define the business goal, users, requirements, and technical scope.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          'We map the product structure, user experience, and system architecture.',
      },
      {
        number: '03',
        title: 'Build',
        description:
          'We develop, integrate, test, and prepare the solution for real-world use.',
      },
      {
        number: '04',
        title: 'Support',
        description:
          'We assist with launch, optimization, maintenance, and continuous improvement.',
      },
    ],
  },
  cta: {
    eyebrow: 'Ready to build?',
    title: "Let's create the system your business needs next.",
    description:
      "Talk to us about your technology goals - we'll find the right approach together.",
    actionLabel: 'Speak with us',
    actionHref: ROUTES.contact,
  },
} as const;

export const contactPageContent = {
  eyebrow: 'Contact',
  title: "Let's talk about what you need to build.",
  description:
    "Whether you're exploring a new product, integrating telecom services, or need a technology partner - fill in the form and we will help you route the conversation quickly.",
  responseTime: 'We respond within 1 business day',
  interests: [
    'Telecom Services',
    'Digital Products',
    'AI & Automation',
    'Technology Integration',
    'Health IT',
  ],
} as const;
