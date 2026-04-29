import { ReactNode } from 'react';
import { ExternalLink, Globe, FlaskConical, Users, BrainCircuit, Mic, Code } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  color: string;
  /** Optional icon next to the company name (company “logo”) */
  icon?: ReactNode;
  /** Tags / badges shown below the header */
  tags?: string[];
  /** Links shown at the bottom of the expanded card */
  links?: { label: string; url: string; icon?: ReactNode }[];
  /**
   * Each point can be:
   *  - a plain string  (backwards-compatible, renders as before)
   *  - a ReactNode     (full freedom: links, icons, bold, anything)
   */
  points: (string | ReactNode)[];
}

/* ------------------------------------------------------------------ */
/*  Helpers — use these inside points for common patterns              */
/* ------------------------------------------------------------------ */

/** Inline link that opens in a new tab */
export const Link = ({
  href,
  children,
  showIcon = true,
}: {
  href: string;
  children: ReactNode;
  /** When false, renders as a plain text-style link (no external-link glyph). */
  showIcon?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`font-medium text-[#EE9CA7] hover:text-[#EE9CA7]/90 hover:underline transition-colors ${showIcon ? 'inline-flex items-center gap-0.5' : 'inline'}`}
    onClick={(e) => e.stopPropagation()}
  >
    {children}
    {showIcon && <ExternalLink size={11} className="ml-0.5 flex-shrink-0" />}
  </a>
);

/** Bold / highlighted span */
export const B = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold text-slate-800">{children}</span>
);

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

export const experiences: Experience[] = [
  {
    title: 'Core Organizer & Platform Builder',
    company: 'uniKorn Duxue Hub',
    period: '2026.03 - Present',
    icon: (
      <img
        src="/logos/DuxueHub.svg"
        alt=""
      />
    ),
    tags: ['Miniapp', 'UI design', 'Frontend Development'],
    points: [
      <>Co-founded the initiative and participated in <B>major product decisions</B>, including positioning, core feature scope, key user flows, and release planning.</>,
      <>Led <B>UI/UX design</B>—from early wireframes and visual language to high-fidelity screens and design-system–aligned components.</>,
      <>Owned <B>front-end implementation</B> for the mini-program / web client, turning designs into production-ready pages and reusable UI modules.</>,
      <>Partnered with stakeholders to align <B>IA, interaction patterns, and engineering trade-offs</B> so the experience stayed feasible to ship iteratively.</>,
      <>The product is <B>still under active development</B> and <B>has not been publicly launched</B> yet.</>,
    ],
    color: 'from-[#F8C3C9] to-[#EE9CA7]',
  },
  {
    title: 'Core Organizer',
    company: 'Web Development Enthusiasts Society, HKUST-GZ',
    period: '2026.01 - Present',
    icon: (
      <img
        src="/logos/HKUST(GZ).svg"
        alt=""
      />
    ),
    tags: ['Leadership', 'Web Dev', 'Community'],
    points: [
      <>Served as a <B>founding core member</B>, helping run day-to-day operations, coordinate teams, and organize community events.</>,
      <>Organized regular learning sessions and peer exchange activities on <B>web development</B>, <B>product building</B>, and <B>technical collaboration</B>.</>,
      <>Initiated the inaugural <B>Almost Million Web Contest (AMWC)</B> as a flagship student web development event.</>,
    ],
    color: 'from-[#F1A9B2] to-[#F4B6BE]',
  },
  {
    title: 'Core Organizer & Leader of the Publicity Operation Design Team',
    company: 'uniKorn TechG Hub: HKUST-GZ Student Learning & Life Community',
    period: '2025.06 - Present',
    icon: (
      <img
        src="/logos/uniKorn.svg"
        alt=""
      />
    ),
    tags: ['Community', 'Campus Engagement', 'UI design', 'Publicity Operation'],
    points: [
      <>Helped shape <B>product decisions</B> and co-built a <B>student community platform</B> for learning and campus life at HKUST-GZ.</>,
      <>Supported <B>UI design</B> and <B>marketing & operations</B>, including interface iterations, launch campaigns, and day-to-day community engagement.</>,
      'Helped organize student-facing public-service activities, including course-selection info sessions and Q&A support for new students.',
      <>Grew the platform to <B>500+ registered users</B> (to date).</>,
      <>Visit our website <Link href="https://unikorn.axfff.com">https://unikorn.axfff.com</Link>.</>,
    ],
    color: 'from-[#F8C3C9] to-[#EE9CA7]',
  },
];
