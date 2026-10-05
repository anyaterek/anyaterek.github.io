/**
 * Work catalog in the GitHub pinned repositories format.
 * Sources: public repos at github.com/anyaterek (descriptions verbatim),
 * cv-generic-en.md (commercial cases, verbatim), design/profile-map (profile map).
 * A field without data stays empty.
 */
import type { ImageMetadata } from 'astro';

import composeClean from '../assets/media/clean/compose.jpg';
import poteralasClean from '../assets/media/clean/poteralas.jpg';
import groundClean from '../assets/media/clean/ground.jpg';
import groundRef from '../assets/media/ground-neuroref.png';
import satFullClean from '../assets/media/clean/sat-full.jpg';
import sat from '../assets/media/sat.jpg';
import kotenkaStartClean from '../assets/media/clean/kotenka-start.jpg';
import kotenkaMiddleClean from '../assets/media/clean/kotenka-middle.jpg';
import kotenkaFinal from '../assets/media/kotenka.jpg';
import handshakeRef from '../assets/media/handshake-ref.png';
import handshakeStart from '../assets/media/handshake-start.jpg';
import handshakeFinal from '../assets/media/handshake.jpg';
import monoProcess from '../assets/media/photo1.jpg';
import monoSketch from '../assets/media/eskiz-mono.jpg';
import monoFinal from '../assets/media/mono-fin.png';
import jabks from '../assets/media/jabks.jpg';
import lavka from '../assets/media/lavka.jpg';
import arrow from '../assets/media/arrow.jpg';

export type Kind = 'code' | 'art' | 'domain' | 'meta';

export const KIND_LABEL: Record<Kind, string> = {
  code: 'code',
  art: 'art',
  domain: 'domains',
  meta: 'meta',
};

/** primaryLanguage on GitHub. Dot colour is the --lang-* token in design/tokens.css */
export type Lang = 'JavaScript' | 'TypeScript' | 'Solidity' | 'C++' | 'HTML' | 'Python';

export const LANG_TOKEN: Record<Lang, string> = {
  JavaScript: 'js',
  TypeScript: 'ts',
  Solidity: 'sol',
  'C++': 'cpp',
  HTML: 'html',
  Python: 'py',
};

/** public — open repo; commercial — commercial project without public code; art — canvas or object */
export type Visibility = 'public' | 'commercial' | 'art';

export interface Media {
  src: ImageMetadata;
  alt: string;
  /** process stage: reference, sketch, canvas, site */
  stage: string;
}

export interface Ref {
  type: 'repo' | 'video';
  label: string;
  href: string;
}

/** Canvas → system association. Not rendered. */
export interface Link {
  to: string;
  why: string;
}

export interface Work {
  slug: string;
  title: string;
  kinds: Kind[];
  visibility: Visibility;
  /** kept in data, never rendered: catalog, prev/next, getStaticPaths */
  hidden?: boolean;
  /** YYYY-MM: start of the work or repo creation date; catalog is sorted by it, newest first */
  date?: string;
  /** card line 2 — what she did. Public repo: GitHub description verbatim; commercial: condensed CV bullets; canvas: subject and process */
  desc?: string;
  /** canvas caption */
  protocol?: string;
  lang?: Lang;
  stars?: number;
  type?: string;
  stack?: string[];
  role?: string;
  period?: string;
  status?: string;
  series?: string;
  /** public repos only; commercial numbers live inside the CV bullets */
  metrics?: string[];
  /** flow steps, rendered as a log */
  how?: string[];
  /** commercial cases: CV bullets for the role, verbatim */
  facts?: string[];
  refs?: Ref[];
  media?: Media[];
  /** catalog thumbnail (index in media) */
  cover?: number;
  video?: { src: string; label: string };
  links?: Link[];
}

const GH = 'https://github.com/anyaterek';
const repo = (name: string): Ref => ({ type: 'repo', label: `github.com/anyaterek/${name}`, href: `${GH}/${name}` });

export const works: Work[] = [
  /* -------------------------------- code -------------------------------- */
  {
    slug: 'forge',
    date: '2026-09',
    title: 'forge',
    kinds: ['meta', 'code'],
    visibility: 'public',
    desc: 'Autonomous agent loop that drives a task queue to merge: baseline-relative gates, independent review, bounded autonomy, self-cleanup.',
    lang: 'JavaScript',
    stars: 0,
    type: 'autonomous agent loop',
    role: 'author',
    status: 'public · 09.2026',
    metrics: ['lint 83 → 0', 'failing tests 12 → 0'],
    how: [
      'task queue',
      'branch',
      'quality gates: delta against baseline, not “all green”',
      'two independent reviewers',
      'merge and branch self-cleanup',
    ],
    facts: [
      'run on a production TS monorepo',
      'a run that surfaced a secrets leak in git before it reached production',
      'every real failure closed with a mechanism, not an instruction',
    ],
    refs: [repo('forge')],
  },
  {
    slug: 'biobank',
    date: '2025-10',
    title: 'Biobank · MIPT',
    kinds: ['domain', 'code'],
    visibility: 'commercial',
    desc: 'Leads a team of 3 on medtech platforms for clinical research and biobanking; architects the GraphQL API layer, owns full-stack delivery.',
    stack: ['TypeScript', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'GraphQL', 'Claude Code'],
    role: 'Tech Lead',
    period: 'Oct 2025 – Present',
    status: 'private · MIPT',
    facts: [
      'Leading technical development of medtech platforms for clinical research and biobanking (team of 3)',
      'Architecting and implementing a GraphQL API layer for the clinical data platform (working knowledge, actively implementing)',
      'Own full-stack delivery across React/Next.js frontend and Node.js/TypeScript backend, PostgreSQL, Docker deployment',
      "Introduced an AI-assisted development workflow (Claude Code, multi-agent review pipeline) into the team's engineering cycle, including a run that surfaced a secrets leak in git before it reached production",
    ],
  },
  {
    slug: 'iot',
    date: '2025-06',
    title: 'iot',
    kinds: ['domain', 'code'],
    visibility: 'public',
    desc: 'Medical IoT, current: sensor events with zk-SNARK proofs on Ethereum Sepolia.',
    lang: 'Solidity',
    stars: 0,
    stack: ['Solidity', 'zk-SNARK', 'Ethereum Sepolia'],
    status: 'public',
    refs: [repo('iot')],
  },
  {
    slug: 'iot-heartrate',
    date: '2025-04',
    title: 'iot-heartrate',
    kinds: ['domain', 'code'],
    visibility: 'public',
    desc: 'Medical IoT, v0: ESP32 + MAX30100 pulse oximeter over BLE.',
    lang: 'C++',
    stars: 0,
    stack: ['C++', 'ESP32', 'MAX30100', 'BLE'],
    status: 'public',
    refs: [repo('iot-heartrate')],
  },
  {
    slug: 'petri-ui',
    date: '2026-03',
    title: 'petri-ui',
    kinds: ['code'],
    visibility: 'public',
    hidden: true,
    desc: 'React component library. Radix + Tailwind v4 + CVA, 30+ components, fully typed.',
    lang: 'TypeScript',
    stars: 0,
    stack: ['React', 'Radix', 'Tailwind v4', 'CVA'],
    status: 'public',
    metrics: ['30+ components'],
    facts: ['continues earlier UI kit work (Space307 and a company under NDA)'],
    refs: [repo('petri-ui')],
  },
  {
    slug: 'webar',
    date: '2024-07',
    title: 'webARwithNN',
    kinds: ['code'],
    visibility: 'public',
    hidden: true,
    desc: 'WebAR with neural networks in the browser. Three.js + React Fiber.',
    lang: 'JavaScript',
    stars: 0,
    stack: ['Three.js', 'React Three Fiber'],
    status: 'public',
    refs: [repo('webARwithNN')],
  },
  {
    slug: 'space307-mail',
    date: '2022-08',
    title: 'Transactional email · Space307',
    kinds: ['code'],
    visibility: 'commercial',
    desc: 'Led a transactional email service: 13 languages, 3 apps; migrated billing/KYC in 3 months, −50% support costs.',
    stack: ['TypeScript', 'React', 'Node.js', 'TypeORM', 'PostgreSQL', 'Docker'],
    role: 'Lead Fullstack Engineer',
    period: 'Aug 2022 – May 2024',
    status: 'private · commercial',
    facts: [
      'Led delivery of a transactional email service supporting content in 13 languages across 3 applications',
      'Migrated billing and KYC systems in 3 months, reducing support costs by 50%',
      'Migrated CRM from HubSpot to Bloomreach: designed data flows, led cross-team rollout',
      'Built backoffice, UI kit, and internal tooling; led code review and technical standards for a team of 2',
    ],
  },
  {
    slug: 'stonfi-bots',
    date: '2024-09',
    title: 'Bots & monitoring · Ston.fi',
    kinds: ['domain', 'code'],
    visibility: 'commercial',
    desc: 'Built Telegram bots and microservices for a DEX on TON; integrated real-time on-chain monitoring, covered the backend with Vitest.',
    stack: ['TypeScript', 'Node.js', 'CockroachDB', 'Redis', 'WebSocket', 'Vitest', 'Telegram Bot API', 'TON APIs', 'Docker'],
    role: 'Fullstack Engineer',
    period: 'Sep 2024 – Aug 2025',
    status: 'private · commercial',
    facts: [
      'Built Telegram bots and microservices for a DEX on the TON blockchain, including an onboarding bot that teaches users TON basics',
      'Integrated on-chain monitoring for TON/DEX: real-time tracking of blockchain events and external API data',
      'Used CockroachDB for distributed data storage, plus Redis and message queues for async data pipelines',
      'Delivered realtime updates via WebSocket; covered backend logic with a Vitest test suite',
    ],
  },
  {
    slug: 'nda-bank',
    date: '2020-07',
    title: 'Company under NDA',
    kinds: ['code'],
    visibility: 'commercial',
    desc: 'Developed 50+ landing pages for banking products; contributed to a shared UI kit (React + Redux) used by 12–30 engineers.',
    stack: ['React', 'Redux', 'TypeScript', 'SCSS'],
    role: 'frontend engineer',
    period: 'Jul 2020 – Jul 2022',
    status: 'private · commercial',
    facts: [
      'Developed 50+ landing pages for banking products',
      'Contributed to a shared UI kit (React + Redux) used by a team of 12–30 engineers',
      'Acted as Scrum Master for a cross-functional team of 12–30 people',
      'Participated in the company-wide rebrand rollout in 2021',
    ],
  },
  {
    slug: 'nice-config',
    date: '2026-04',
    title: 'nice-config',
    kinds: ['meta', 'code'],
    visibility: 'public',
    desc: 'Public config of TEREK/OS, her personal operating system of agents (claude-in-terminal).',
    lang: 'HTML',
    stars: 0,
    status: 'public',
    refs: [repo('nice-config')],
  },
  {
    slug: 'first-ar-experiment',
    date: '2024-07',
    hidden: true,
    title: 'firstARExperiment',
    kinds: ['code'],
    visibility: 'public',
    lang: 'HTML',
    stars: 0,
    status: 'public',
    refs: [repo('firstARExperiment')],
  },
  {
    slug: 'cellular-automate',
    date: '2022-04',
    hidden: true,
    title: 'celullar-automate-for-university',
    kinds: ['code'],
    visibility: 'public',
    lang: 'Python',
    stars: 0,
    status: 'public',
    refs: [repo('celullar-automate-for-university')],
  },
  {
    slug: 'cpp',
    date: '2021-03',
    hidden: true,
    title: 'cpp',
    kinds: ['code'],
    visibility: 'public',
    desc: 'all cpp',
    lang: 'C++',
    stars: 0,
    status: 'public',
    refs: [repo('cpp')],
  },

  /* ------------------------------- canvases ------------------------------- */
  {
    slug: 'handshake',
    title: 'HANDSHAKE',
    kinds: ['art'],
    visibility: 'art',
    protocol: 'The connection is established.',
    desc: 'A nod to the API handshake: two cyborgs establishing a connection.',
    type: 'canvas',
    series: 'STORY #1_ BE A DEV',
    status: 'finished',
    media: [
      { src: handshakeRef, stage: 'reference', alt: 'HANDSHAKE: composition reference' },
      { src: handshakeStart, stage: 'underpainting', alt: 'HANDSHAKE: underpainting, figure outlines on canvas' },
      { src: handshakeFinal, stage: 'canvas', alt: 'HANDSHAKE: two cyborgs shaking hands on a pink and blue ground, canvas in the studio' },
    ],
    cover: 2,
    links: [{ to: 'iot', why: 'handshake: device ↔ network' }],
  },
  {
    slug: 'compose',
    title: 'COMPOSE',
    kinds: ['art'],
    visibility: 'art',
    protocol: 'Services over datalake.',
    desc: 'Industrial city in blue, with drips.',
    type: 'canvas',
    series: 'STORY #1_ BE A DEV',
    status: 'finished',
    media: [
      { src: composeClean, stage: 'canvas', alt: 'COMPOSE: blue industrial city of towers above a pale surface' },
      { src: poteralasClean, stage: 'on the wall', alt: 'COMPOSE: detail of the canvas, towers in warm light' },
    ],
    cover: 0,
    links: [{ to: 'petri-ui', why: 'compose: assembled from components' }],
  },
  {
    slug: 'monolith',
    title: 'MONOLITH',
    kinds: ['art'],
    visibility: 'art',
    protocol: 'NULL::',
    desc: 'Ring portal above a waterfall. Digital sketch → canvas, with a process video.',
    type: 'canvas',
    series: 'STORY #1_ BE A DEV',
    status: 'finished',
    refs: [{ type: 'video', label: 'process video', href: '/media/mono-vid.mp4' }],
    media: [
      { src: monoSketch, stage: 'digital sketch', alt: 'MONOLITH: digital sketch of the composition' },
      { src: monoProcess, stage: 'in progress', alt: 'MONOLITH: canvas in progress' },
      { src: monoFinal, stage: 'final', alt: 'MONOLITH: ring portal above a waterfall' },
    ],
    cover: 2,
    links: [{ to: 'space307-mail', why: 'what gets carved out of a monolith' }],
  },
  {
    slug: 'ground-zero',
    title: 'GROUND ZERO',
    kinds: ['art'],
    visibility: 'art',
    protocol: 'Life cycle.',
    type: 'canvas',
    series: 'STORY #1_ BE A DEV',
    status: 'finished',
    media: [
      { src: groundRef, stage: 'neural reference', alt: 'GROUND ZERO: neural-network reference for the composition' },
      { src: groundClean, stage: 'canvas', alt: 'GROUND ZERO: walking mech at sunset' },
    ],
    cover: 1,
    links: [{ to: 'forge', why: 'ground zero = baseline' }],
  },
  {
    slug: 'human-err',
    title: 'HUMAN_ERR',
    kinds: ['art'],
    visibility: 'art',
    protocol: 'The work that opens the portrait series.',
    desc: 'Portrait: figure in red, monocle lens, blue ground. First work of the portrait series.',
    type: 'canvas',
    series: 'STORY #3_HUMAN_ERR',
    media: [
      { src: satFullClean, stage: 'canvas', alt: 'HUMAN_ERR: red figure with a monocle lens on a blue ground' },
      { src: sat, stage: 'close-up', alt: 'HUMAN_ERR: close-up of the portrait' },
    ],
    cover: 0,
    links: [{ to: 'forge', why: 'human error → gates and review' }],
  },
  {
    slug: 'signal-lost',
    title: 'SIGNAL LOST · CREW',
    kinds: ['art'],
    visibility: 'art',
    protocol: 'My sis and I are going crazy together.',
    desc: 'Two blue figures on a pink ground.',
    type: 'canvas',
    series: 'STORY #4_FEATURE',
    status: 'finished',
    media: [{ src: jabks, stage: 'canvas', alt: 'SIGNAL LOST: two blue creatures with yellow eyes and open mouths on a pink ground' }],
    cover: 0,
    links: [{ to: 'stonfi-bots', why: 'monitoring catches a lost signal' }],
  },
  {
    slug: 'kotenka',
    title: "KOTEN'KA",
    kinds: ['art'],
    visibility: 'art',
    hidden: true,
    protocol: 'STORY #5_MEDIA',
    desc: 'White cat in a pink scarf. Procreate sketch (timelapse) → canvas, 3 stages.',
    type: 'canvas + Procreate timelapse',
    media: [
      { src: kotenkaStartClean, stage: 'start', alt: "KOTEN'KA: start, first layers" },
      { src: kotenkaMiddleClean, stage: 'middle', alt: "KOTEN'KA: work in the middle" },
      { src: kotenkaFinal, stage: 'final', alt: "KOTEN'KA: cat in a pink scarf and hands" },
    ],
    cover: 2,
    video: { src: '/media/kotenka-timelaps.mp4', label: 'sketch timelapse, Procreate' },
    links: [{ to: 'webar', why: 'media: process on screen' }],
  },
  {
    slug: 'skazka',
    date: '2024-06',
    title: 'SKAZKA · outdoor',
    kinds: ['art'],
    visibility: 'art',
    hidden: true,
    protocol: 'Working in a team of decorators.',
    desc: 'Painted signposts and a bench, Skazka festival, 2024. Worked in a team of decorators.',
    type: 'outdoor object',
    role: 'team of decorators',
    period: '2024',
    media: [
      { src: arrow, stage: 'signposts', alt: 'SKAZKA: painted fish-shaped signposts reading Organic' },
      { src: lavka, stage: 'bench', alt: 'SKAZKA: painted bench at the festival' },
    ],
    cover: 1,
    links: [{ to: 'biobank', why: 'a team is a system too' }],
  },
];

/** The only place hidden works are filtered out: catalog, prev/next, getStaticPaths */
const AFTER_IOT = ['forge', 'nice-config'];

// dated works newest first; undated (canvases without a known year) keep their order after them
export const visibleWorks = works
  .filter((w) => !w.hidden)
  .map((w, i) => ({ w, i }))
  .sort((a, b) => {
    if (a.w.date && b.w.date) return b.w.date.localeCompare(a.w.date)
    if (a.w.date) return -1
    if (b.w.date) return 1
    return a.i - b.i
  })
  .map(({ w }) => w)
  // agent tooling sits right under iot rather than at the top (Anna's call)
  .reduce<Work[]>((acc, w, _i, all) => {
    if (AFTER_IOT.includes(w.slug)) return acc
    acc.push(w)
    if (w.slug === 'iot') acc.push(...AFTER_IOT.map((s) => all.find((x) => x.slug === s)).filter((x): x is Work => Boolean(x)))
    return acc
  }, []);

export const isArt = (w: Work) => w.kinds[0] === 'art';

export const VISIBILITY_LABEL: Record<Visibility, string> = {
  public: 'public',
  commercial: 'private · commercial',
  art: 'canvas',
};
