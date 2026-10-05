/** Person, experience, education, contacts. Experience is verbatim from cv-generic-en.md. */
export const person = {
  name: 'Anna Terekhova',
  whoami: 'anna terekhova',
  /** GitHub bio, verbatim */
  bio: '∴ Engineer of crossings ∴',
  roles: ['tech lead of cross-functional teams (medtech)', 'fullstack'],
  line: 'Tech lead (medtech), fullstack engineer, painter.',
  /** cv-generic-en.md, Summary */
  tenure: '8 years in web development and 3.5 years in lead roles.',
  epigraph: 'Somewhere between the signal and the thing that watches it.',
};

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  /** CV bullets, verbatim, all of them */
  bullets: string[];
  /** CV “Stack:” line, verbatim; absent when the CV has none */
  stack?: string;
}

/** cv-generic-en.md → Experience, newest first */
export const experience: Job[] = [
  {
    role: 'Tech Lead',
    company: 'MIPT (Moscow Institute of Physics and Technology)',
    location: 'Moscow',
    period: 'Oct 2025 – Present',
    bullets: [
      'Leading technical development of medtech platforms for clinical research and biobanking (team of 3)',
      'Architecting and implementing a GraphQL API layer for the clinical data platform (working knowledge, actively implementing)',
      'Own full-stack delivery across React/Next.js frontend and Node.js/TypeScript backend, PostgreSQL, Docker deployment',
      "Introduced an AI-assisted development workflow (Claude Code, multi-agent review pipeline) into the team's engineering cycle, including a run that surfaced a secrets leak in git before it reached production",
    ],
    stack: 'TypeScript, Node.js, React, Next.js, PostgreSQL, Docker, GraphQL, Claude Code',
  },
  {
    role: 'Fullstack Engineer',
    company: 'Ston.fi',
    location: 'Amsterdam (remote)',
    period: 'Sep 2024 – Aug 2025',
    bullets: [
      'Built Telegram bots and microservices for a DEX on the TON blockchain, including an onboarding bot that teaches users TON basics',
      'Integrated on-chain monitoring for TON/DEX: real-time tracking of blockchain events and external API data',
      'Used CockroachDB for distributed data storage, plus Redis and message queues for async data pipelines',
      'Delivered realtime updates via WebSocket; covered backend logic with a Vitest test suite',
    ],
    stack: 'TypeScript, Node.js, CockroachDB, Redis, WebSocket, Vitest, Telegram Bot API, TON APIs, Docker',
  },
  {
    role: 'Lead Fullstack Engineer',
    company: 'Space307',
    location: 'Cyprus (remote)',
    period: 'Aug 2022 – May 2024',
    bullets: [
      'Led delivery of a transactional email service supporting content in 13 languages across 3 applications',
      'Migrated billing and KYC systems in 3 months, reducing support costs by 50%',
      'Migrated CRM from HubSpot to Bloomreach: designed data flows, led cross-team rollout',
      'Built backoffice, UI kit, and internal tooling; led code review and technical standards for a team of 2',
    ],
    stack: 'TypeScript, React, Node.js, TypeORM, PostgreSQL, Docker',
  },
  {
    role: 'Frontend Engineer',
    company: 'Company under NDA',
    location: 'Moscow',
    period: 'Jul 2020 – Jul 2022',
    bullets: [
      'Developed 50+ landing pages for banking products',
      'Contributed to a shared UI kit (React + Redux) used by a team of 12–30 engineers',
      'Acted as Scrum Master for a cross-functional team of 12–30 people',
      'Participated in the company-wide rebrand rollout in 2021',
    ],
    stack: 'React, Redux, TypeScript, SCSS',
  },
  {
    role: 'Web Developer',
    company: 'Sunlight',
    location: 'Moscow',
    period: 'Oct 2018 – May 2020',
    bullets: [
      'Migrated roughly half of the primary e-commerce site (sunlight.net) to a shared UI-kit component system',
      'Maintained the internal wiki and contributed to on-site SEO',
      'Produced design assets in Adobe Photoshop; worked with WordPress',
    ],
    stack: 'React, WordPress, Adobe Photoshop, HTML/CSS/JS',
  },
  {
    role: 'Web Developer',
    company: 'BBDO',
    location: 'Moscow',
    period: 'Jun 2017 – Jul 2018',
    bullets: [
      'Delivered animated marketing materials for P&G and Worldclass campaigns',
      'Coordinated a remote team on delivery timelines and asset handoffs',
    ],
  },
];

export interface Study {
  years: string;
  title: string;
}

/** MAI — cv-generic-en.md → Education; MGMSU and MSU — profile-map trajectory */
export const education: Study[] = [
  { years: '2020–2025', title: 'Moscow Aviation Institute — Software Engineering and Control Systems' },
  { years: '2011–2014', title: 'Moscow State University of Medicine and Dentistry (MGMSU) — General Medicine' },
  { years: '2009–2011', title: 'Moscow State University (MSU) — History' },
];

export const contacts = [
  { channel: 'email', label: 'terekhovahome@gmail.com', href: 'mailto:terekhovahome@gmail.com' },
  { channel: 'telegram', label: '@welcome2machine', href: 'https://t.me/welcome2machine' },
  { channel: 'github', label: 'github.com/anyaterek', href: 'https://github.com/anyaterek' },
  { channel: 'linkedin', label: 'linkedin.com/in/wabala', href: 'https://www.linkedin.com/in/wabala/' },
];
