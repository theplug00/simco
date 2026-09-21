import { useEffect, useState } from "react";
import { useActiveSection, useScrollY } from "../lib/hooks";
import { BRAND, IMG } from "../lib/data";

const LINKS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = ["home", ...LINKS.map((l) => l.id)];

export default function Nav() {
  const y = useScrollY();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const scrolled = y > 28;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "glass-light border-b border-ink/5 py-2.5"
            : "border-b border-transparent bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 lg:px-14">
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-3 text-left"
            aria-label="Back to top"
          >
            <img src={IMG.logo} alt="SIMCO logo" className="h-10 w-10 rounded-lg" />
            <span className="leading-none">
              <span className="block text-[17px] font-extrabold tracking-tight text-ink">
                SIMCO
              </span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.32em] text-ash">
                Renewables
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  active === l.id ? "text-cyan-600" : "text-graphite hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-cyan-500 transition-all duration-300 ${
                    active === l.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go("contact")}
              className="group hidden items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-snow transition-all duration-300 hover:bg-cyan-600 hover:shadow-[0_0_28px_rgba(0,212,213,0.4)] sm:flex"
            >
              Start a project
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none">
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] rounded-full border border-ink/10 lg:hidden"
            >
              <span
                className={`h-px w-5 bg-ink transition-all duration-300 ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-ink transition-all duration-300 ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[55] flex flex-col justify-between bg-snow/95 px-6 pb-8 pt-28 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {LINKS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
              className={`group flex items-baseline gap-4 border-b border-ink/8 py-3.5 text-left transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-500">
                0{i + 1}
              </span>
              <span className="text-3xl font-bold text-ink transition-colors group-hover:text-cyan-600">
                {l.label}
              </span>
            </button>
          ))}
        </nav>
        <div className="space-y-2 font-mono text-xs text-graphite">
          <a href={`mailto:${BRAND.email}`} className="link-sweep block w-fit text-ink">
            {BRAND.email}
          </a>
          <a href={BRAND.phoneHref} className="link-sweep block w-fit text-ink">
            {BRAND.phoneDisplay}
          </a>
          <p className="pt-2 uppercase tracking-[0.25em] text-ash/70">{BRAND.city}</p>
        </div>
      </div>
    </>
  );
}
