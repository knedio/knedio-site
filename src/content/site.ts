import type { StaticImageData } from "next/image";

import chapturHome from "./media/chaptur-home.png";
import novrixHome from "./media/novrix-home.png";
import novrixCourts from "./media/novrix-courts.png";
import novrixWrap from "./media/novrix-wrap.png";
import novrixTournament from "./media/novrix-tournament.png";
import portrait from "./media/portrait.jpg";

/*
 * Everything the site says lives in this file. Edit the values below and the
 * page updates; components never hold copy of their own.
 */

export type Link = { label: string; href: string };

export type Media = {
  src: StaticImageData;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  category: string;
  url: string;
  summary: string;
  description: string;
  role: string;
  contributions: string[];
  stack: string[];
  /** Wide screenshot shown first. */
  cover: Media;
  /** Optional phone screens shown as a row beneath the cover. */
  screens?: Media[];
};

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
};

export type Capability = {
  title: string;
  description: string;
  tools: string[];
};

export const site = {
  /* Absolute URL for Open Graph, canonical and the sitemap: NEXT_PUBLIC_SITE_URL wins, then Vercel's production domain. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  title: "Karl Naio Edio, Full-Stack Software Developer",
  description:
    "Karl Naio Edio is a full-stack developer in Cagayan de Oro. He has been building web and mobile software since 2018, most recently Chaptur and Novrix Sports.",
  copyrightYear: "2026",
};

export const profile = {
  name: "Karl Naio Edio",
  fullName: "Karl Naio U. Edio",
  shortName: "Karl Edio",
  role: "Full-Stack Software Developer",
  location: "Cagayan de Oro, Philippines",
  timeZone: "Asia/Manila",
  timeZoneLabel: "UTC+8",
  /** Hero headline; the second line renders dimmed. */
  headline: ["Building reliable software", "for real-world problems."],
  intro:
    "I build websites and mobile apps, and usually the API behind them too. I’ve been at it since 2018, from Cagayan de Oro.",
};

export const contact = {
  email: "knedio.info@gmail.com",
  github: "https://github.com/knedio",
  linkedin: "https://www.linkedin.com/in/knedio/",
  cv: "https://drive.google.com/file/d/1MWnmDzv4Xa-DgYmZLpX9emWOBhrdypGw/view?usp=sharing",
};

/** Headings and short copy for the page sections and the 404 page. */
export const copy = {
  work: { heading: "Two products that are already in people’s hands." },
  experience: { heading: "Where I’ve worked since 2018." },
  expertise: { heading: "The work I can pick up." },
  contact: {
    heading: "If you want to talk, email is best.",
    body: "A product to build, a codebase that needs another pair of hands, or a role. I read everything that comes in.",
  },
  notFound: {
    heading: "This page doesn’t exist.",
    body: "The link may be old, or the address may have a typo. Everything I’ve written lives on the home page.",
  },
};

export const navigation: Link[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "Most of it has been other people’s products. Lately, my own.",
  portrait: {
    src: portrait,
    alt: "Portrait of Karl Naio Edio in a black shirt against a grey wall.",
  } satisfies Media,
  paragraphs: [
    "I started in 2018, at a small shop in Cagayan de Oro, writing websites and mobile apps and sitting in on the client calls. Then came Fligno, where I was often the only developer on a project. I wrote the web app, the mobile app, and the backend, and I also did the planning and the client calls. That was a hard stretch, and the one that taught me the most about shipping alone.",
    "Engagis was the long stay, from 2020 to 2026. I looked after one of the company’s main projects: the sprint planning, a good share of the code, and the slow job of keeping that code readable for everyone else. Before and around that I built gamification at Magneds, frontend for a digital-asset brokerage at Arkhon, and a voucher platform at Epasnets that charged through Stripe.",
    "The current work is Chaptur and Novrix Sports. On both, I did the website, the phone app, and the API they share.",
  ],
  facts: [
    { label: "Based in", value: "Cagayan de Oro, Philippines" },
    { label: "Experience", value: "8+ years, since 2018" },
    { label: "Focus", value: "Web, mobile & enterprise systems" },
    {
      label: "Education",
      value: "BS Information Technology, University of Science and Technology of Southern Philippines",
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "chaptur",
    name: "Chaptur",
    year: "2026",
    category: "Web & mobile platform",
    url: "https://app.chaptur.space",
    summary: "A portfolio and a network for people who build things: architects, engineers, contractors.",
    description:
      "You put your projects online, keep notes from the job site, and talk to other people in the trade. A company gets a chapter of its own. The website and the phone app both run off one NestJS API.",
    role: "Full-stack developer: web, API and mobile",
    contributions: [
      "REST API and PostgreSQL data model in NestJS and Prisma",
      "Next.js web app, public portfolios and Portfolio Studio customisation",
      "React Native app with chat and push notifications",
      "Authentication, subscription tiers, vouchers and PayMongo billing",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "React Native", "TypeScript"],
    cover: {
      src: chapturHome,
      alt: "Chaptur landing page: “Space for work that deserves silence.” with a preview of a project sheet.",
    },
  },
  {
    slug: "novrix-sports",
    name: "Novrix Sports",
    year: "2026",
    category: "Mobile app & website",
    url: "https://novrixsports.com",
    summary: "For the person running open play at a club. The queue, the score, and who’s up next.",
    description:
      "It lives on the organiser’s iPhone or iPad and keeps working with no signal, in English or Bisaya, for seven sports. Players follow along on a page in the browser, so they don’t need the app. The same phone runs the club tournament.",
    role: "Developer: mobile app, website and backend",
    contributions: [
      "iPhone and iPad app in React Native that works offline",
      "Next.js website with a live session board and TV view",
      "Supabase backend for live sessions",
      "Shared TypeScript packages for queue and tournament rules",
    ],
    stack: ["React Native", "Next.js", "TypeScript", "Supabase"],
    cover: {
      src: novrixHome,
      alt: "Novrix Sports website: “Run the queue. Keep the score. Everyone knows who’s next.” beside two phones showing the app.",
    },
    screens: [
      { src: novrixCourts, alt: "Novrix app courts view with a live doubles score of 18 to 15." },
      { src: novrixWrap, alt: "Novrix session recap showing the winner and a podium." },
      {
        src: novrixTournament,
        alt: "Novrix tournament draw for a knockout club doubles cup, quarter-finals to semi-finals.",
      },
    ],
  },
];

export const experience: Role[] = [
  {
    company: "Engagis, Inc.",
    title: "Mid-level Developer",
    start: "Sep 2020",
    end: "Aug 2026",
    summary: "Looked after a core project: the plan, most of the building, and working with the other teams on it.",
    highlights: [
      "Ran sprint planning, stand-ups, and retrospectives in Jira",
      "Refactored as we went, so the code stayed something people could change",
      "Kept the schedule lined up with what the business had actually asked for",
      "Changed the team’s workflow where it was slowing the work down",
    ],
  },
  {
    company: "Arkhon",
    title: "Front-end Developer",
    start: "Oct 2023",
    end: "Feb 2025",
    summary: "Frontend for ARKHON, a product for buying and selling digital assets, on the web and on mobile.",
    highlights: ["React and React Native, on an Agile team"],
  },
  {
    company: "Sourcepass, Inc.",
    title: "Front-end Developer",
    start: "Oct 2022",
    end: "Mar 2023",
    summary: "Screens for internal web apps, built from the designs I was handed.",
    highlights: [],
  },
  {
    company: "Magneds",
    title: "Front-end Developer",
    start: "Jan 2022",
    end: "Oct 2022",
    summary: "Gamification for enterprise clients, split across a micro-frontend setup.",
    highlights: ["Shared modules and UI packages, published to a private npm registry"],
  },
  {
    company: "Epasnets",
    title: "Full-Stack Developer",
    start: "Mar 2020",
    end: "Oct 2020",
    summary: "A voucher system for several stores, frontend and backend, started from nothing.",
    highlights: ["Store management, creating vouchers, and Stripe for the payments"],
  },
  {
    company: "Fligno Software Philippines",
    title: "Full-Stack Developer",
    start: "Mar 2019",
    end: "Jul 2020",
    summary:
      "Often the only developer on the project. I handled the web, the mobile app, the backend, the planning, and the client calls.",
    highlights: [
      "Ran several client projects at once, each one mostly on my own",
      "Scoped and planned the work with clients, then built it",
      "Shipped web, mobile, and backend work without a second developer to hand things to",
    ],
  },
  {
    company: "Innovative Web Provider",
    title: "Junior Developer",
    start: "Apr 2018",
    end: "Jan 2019",
    summary: "My first job. Websites, mobile apps, and the APIs connecting them.",
    highlights: [],
  },
];

export const capabilities: Capability[] = [
  {
    title: "Interface engineering",
    description: "Components, fetching data, and screens that still make sense once the product has more of them.",
    tools: ["React", "Next.js", "Angular", "Vue", "TypeScript", "Tailwind CSS", "TanStack Query", "Redux", "NgRx"],
  },
  {
    title: "Backend & APIs",
    description: "APIs, logins, realtime updates, and a database model I can change later without a rewrite.",
    tools: ["Node.js", "NestJS", "Laravel", "PostgreSQL", "Supabase", "MySQL", "WebSockets", "REST"],
  },
  {
    title: "Mobile",
    description: "iOS and Android from one React Native codebase, sharing types with the website where that’s useful.",
    tools: ["React Native", "TypeScript", "React Navigation", "Push notifications"],
  },
  {
    title: "Payments & integrations",
    description: "Checkout, subscriptions, and the webhooks that come back. Stripe, Xendit, and PayMongo.",
    tools: ["Stripe", "Xendit", "PayMongo", "Google APIs", "Firebase"],
  },
  {
    title: "Architecture & quality",
    description: "Splitting a frontend into packages, and tests that fail in CI before a bad build goes out.",
    tools: ["Micro-frontends", "Atomic design", "Private npm packages", "Playwright", "Cypress", "CI/CD"],
  },
  {
    title: "Delivery & leadership",
    description: "Planning the work, running the sprints, and talking to the client when the brief is still fuzzy.",
    tools: ["Scrum", "Kanban", "Jira", "Git", "Vercel", "Cloudflare", "Cursor", "Claude Code"],
  },
];
