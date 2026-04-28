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
      <></>,
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
      <>Founded the society and served as its first president.</>,
      <>Organized regular learning sessions and peer exchange activities on <B>web development</B>, <B>product building</B>, and <B>technical collaboration</B>.</>,
      <>Initiated the inaugural <B>Almost Million Web Contest (AMWC)</B> as a flagship student web development event.</>,
    ],
    color: 'from-[#F1A9B2] to-[#F4B6BE]',
  },
  {
    title: 'Core Organizer & Platform Builder',
    company: 'uniKorn TechG Hub: HKUST-GZ Student Learning & Life Community',
    period: '2025.04 - Present',
    icon: (
      <img
        src="/logos/uniKorn.svg"
        alt=""
      />
    ),
    tags: ['Full Stack', 'Community', 'Campus Engagement'],
    points: [
      <>Co-built and operated a <B>student community platform</B> serving learning and campus life at HKUST-GZ.</>,
      'Supported the development and operation of key features including forums, course reviews, schedule planning, and team formation.',
      'Helped organize student-facing public-service activities, including course-selection info sessions and Q&A support for new students.',
      <>Grew the platform to <B>500+ registered users</B> (to date).</>,
      <>Visit our website <Link href="https://unikorn.axfff.com">https://unikorn.axfff.com</Link>.</>,
    ],
    color: 'from-[#F8C3C9] to-[#EE9CA7]',
  },
];
