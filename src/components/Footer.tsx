import { BRAND, IMG } from "../lib/data";

const EXPLORE = [
  { id: "capabilities", label: "Capabilities" },
  { id: "projects", label: "Projects" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-ink/8 bg-ink text-snow">
      <div className="px-5 py-14 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={IMG.logo} alt="SIMCO logo" className="h-12 w-12" />
              <span className="leading-none">
                <span className="block text-xl font-extrabold tracking-tight">SIMCO</span>
                <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.32em] text-smoke">
                  Renewable Solutions
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-smoke">
              A London EPC &amp; O&amp;M contractor building the UK's renewable
              backbone — from first survey to final megawatt-hour.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-smoke/70">
              {BRAND.coordinates}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-smoke">Explore</p>
            <ul className="mt-5 space-y-2.5">
              {EXPLORE.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="link-sweep text-sm text-snow/85 hover:text-cyan-400">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-smoke">Sales desk</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${BRAND.email}`} className="link-sweep break-all text-snow/85 hover:text-cyan-400">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.phoneHref} className="link-sweep text-snow/85 hover:text-cyan-400">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li className="text-smoke">{BRAND.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-snow/8 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-smoke/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {BRAND.legal} · Registered in England &amp; Wales</p>
          <p className="flex items-center gap-2">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-400" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
