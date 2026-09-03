import { BRAND } from "../lib/data";
import { LogoMark, Marquee } from "./ui";

const EXPLORE = [
  { id: "capabilities", label: "Capabilities" },
  { id: "projects", label: "Projects" },
  { id: "delivery", label: "Delivery" },
  { id: "estimator", label: "Estimator" },
  { id: "impact", label: "Impact" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

const SERVICES_SHORT = [
  "Solar PV & O&M",
  "Utility-Scale Farms",
  "Battery Storage",
  "Civil & Groundworks",
  "Electrical & Telecom",
  "H&S Consultancy",
];

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-pine-950 text-paper">
      {/* outlined wordmark marquee */}
      <div className="border-b border-white/8 py-6 opacity-80">
        <Marquee
          items={["SIMCO RENEWABLES", "SOLAR · STORAGE · GRID"]}
          itemClassName="font-display outline-word text-[clamp(2.6rem,6vw,4.6rem)] font-extrabold uppercase leading-none"
        />
      </div>

      <div className="px-5 py-14 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <span className="leading-none">
                <span className="font-display block text-lg font-extrabold tracking-tight">SIMCO</span>
                <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.32em] text-fog">
                  Renewable Solutions
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">
              A London EPC &amp; O&amp;M contractor building the UK's renewable
              backbone — from first survey to final megawatt-hour.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-fog/70">
              {BRAND.coordinates}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-fog">Explore</p>
            <ul className="mt-5 space-y-2.5">
              {EXPLORE.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="link-sweep text-sm text-paper/85 hover:text-amber-400">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-fog">Disciplines</p>
            <ul className="mt-5 space-y-2.5">
              {SERVICES_SHORT.map((s) => (
                <li key={s}>
                  <button onClick={() => go("capabilities")} className="link-sweep text-sm text-paper/85 hover:text-amber-400">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-fog">Sales desk</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${BRAND.email}`} className="link-sweep break-all text-paper/85 hover:text-amber-400">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.phoneHref} className="link-sweep text-paper/85 hover:text-amber-400">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li className="text-fog">{BRAND.city}</li>
            </ul>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group mt-8 flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper transition-all duration-300 hover:border-amber-500 hover:text-amber-400"
            >
              Back to top
              <svg viewBox="0 0 14 14" className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none">
                <path d="M7 12V2M2.5 6.5 7 2l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-fog/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {BRAND.legal} · Registered in England &amp; Wales</p>
          <p className="flex items-center gap-2">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-leaf-400" />
            All systems operational — grid export nominal
          </p>
        </div>
      </div>
    </footer>
  );
}
