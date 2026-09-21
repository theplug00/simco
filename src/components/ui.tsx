import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../lib/hooks";

/* Scroll-reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Line-mask heading reveal */
export function Lines({
  lines,
  className = "",
  as = "h2",
  step = 95,
}: {
  lines: ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  step?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const Tag = as;
  return (
    <div ref={ref} className={inView ? "in" : ""}>
      <Tag className={className}>
        {lines.map((line, i) => (
          <span className="mask-line" key={i}>
            <span style={{ transitionDelay: `${i * step}ms` }}>{line}</span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

/* Monospace section eyebrow: "01 / CAPABILITIES" */
export function Eyebrow({
  index,
  children,
  dark = false,
}: {
  index: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.28em] ${
        dark ? "text-smoke" : "text-ash"
      }`}
    >
      <span className="text-cyan-500">{index}</span>
      <span className="mx-3 inline-block h-px w-8 bg-current align-middle opacity-50" />
      {children}
    </p>
  );
}

export function Diamond({ className = "h-2 w-2" }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 8" className={className} aria-hidden="true">
      <rect x="1.4" y="1.4" width="5.2" height="5.2" fill="currentColor" transform="rotate(45 4 4)" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="9" fill="#00d4d5" />
      <circle cx="20" cy="20" r="7" fill="#0a0a0a" />
      <g stroke="#0a0a0a" strokeWidth="2.4" strokeLinecap="round">
        <path d="M20 5.5v4M20 30.5v4M5.5 20h4M30.5 20h4M9.7 9.7l2.9 2.9M27.4 27.4l2.9 2.9M30.3 9.7l-2.9 2.9M12.6 27.4l-2.9 2.9" />
      </g>
    </svg>
  );
}

/* Infinite marquee band */
export function Marquee({
  items,
  className = "",
  itemClassName = "",
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`flex items-center whitespace-nowrap ${itemClassName}`}
          >
            <span className="px-6 md:px-8">{item}</span>
            <Diamond className="h-2 w-2 opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* Inline SVG portrait used behind the opening headline */
export function SunArc({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="rgba(0,212,213,0.25)">
        <circle cx="300" cy="300" r="120" strokeDasharray="3 9" />
        <circle cx="300" cy="300" r="190" strokeDasharray="2 12" opacity="0.7" />
        <circle cx="300" cy="300" r="262" strokeDasharray="2 16" opacity="0.45" />
      </g>
      <circle cx="300" cy="300" r="52" fill="rgba(0,212,213,0.7)" />
      <g stroke="#6bc46b" strokeWidth="2" strokeLinecap="round" opacity="0.8">
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const x1 = 300 + Math.cos(a) * 66;
          const y1 = 300 + Math.sin(a) * 66;
          const x2 = 300 + Math.cos(a) * 78;
          const y2 = 300 + Math.sin(a) * 78;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

export const sectionPad = "px-5 sm:px-8 lg:px-14 xl:px-20";

export type StyleWithVars = CSSProperties & Record<string, string>;
