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

export const sectionPad = "px-5 sm:px-8 lg:px-14 xl:px-20";

export type StyleWithVars = CSSProperties & Record<string, string>;
