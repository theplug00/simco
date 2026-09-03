import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../lib/hooks";
import { TICKER_ITEMS, BRAND, IMG } from "../lib/data";
import { Lines, Marquee, ArrowUpRight, SunArc } from "./ui";

function useLiveTelemetry() {
  const reduced = usePrefersReducedMotion();
  const [gridMw, setGridMw] = useState(4.82);
  const [irradiance, setIrradiance] = useState(812);
  const [co2Today, setCo2Today] = useState(3.14);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setGridMw((g) => Math.min(5.4, Math.max(4.4, g + (Math.random() - 0.5) * 0.22)));
      setIrradiance((r) =>
        Math.round(Math.min(868, Math.max(742, r + (Math.random() - 0.5) * 26))),
      );
      setCo2Today((c) => c + 0.021);
    }, 2400);
    return () => clearInterval(id);
  }, [reduced]);

  return { gridMw, irradiance, co2Today };
}

export default function Opening() {
  const { gridMw, irradiance, co2Today } = useLiveTelemetry();

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden bg-pine-950 text-paper">
      {/* layered ambient background */}
      <div className="gridlines-light absolute inset-0" />
      <div className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-amber-500/14 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[540px] w-[540px] rounded-full bg-leaf-500/8 blur-[130px]" />
      <SunArc className="sun-spin pointer-events-none absolute -right-40 top-24 hidden h-[520px] w-[520px] opacity-60 lg:block" />

      <div className="relative px-5 pb-14 pt-32 sm:px-8 lg:px-14 lg:pt-40 xl:px-20">
        {/* meta strip */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 lg:mb-14">
          <span className="glass-dark flex items-center gap-2.5 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-leaf-300">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-leaf-400" />
            Live · UK grid export
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-fog sm:block">
            {BRAND.coordinates} — {BRAND.city}
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* headline */}
          <div className="lg:col-span-7">
            <Lines
              as="h1"
              className="font-display text-[clamp(3.3rem,9.2vw,8.2rem)] font-extrabold leading-[0.92] tracking-tight"
              lines={[
                <span key="a">Sunlight,</span>,
                <span
                  key="b"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px #F0B356",
                  }}
                >
                  engineered
                </span>,
                <span key="c">
                  into assets<span className="text-amber-500">.</span>
                </span>,
              ]}
            />
            <p className="mt-8 max-w-md text-base leading-relaxed text-fog sm:text-lg">
              Simco is a London-based EPC &amp; O&amp;M contractor building the
              UK's renewable backbone — solar farms, rooftop arrays, battery
              storage and the civil, electrical and telecom works that connect
              them to the grid.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={() => go("contact")}
                className="group flex items-center gap-3 rounded-full bg-amber-500 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-pine-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_36px_rgba(226,154,43,0.5)]"
              >
                Scope your project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => go("capabilities")}
                className="link-sweep pb-1 font-mono text-xs uppercase tracking-[0.2em] text-paper"
              >
                Explore capabilities
              </button>
            </div>

            {/* live telemetry strip */}
            <div className="mt-14 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                { label: "Grid output", value: `${gridMw.toFixed(2)} MW`, tone: "text-amber-400" },
                { label: "Irradiance", value: `${irradiance} W/m²`, tone: "text-paper" },
                { label: "CO₂ avoided today", value: `${co2Today.toFixed(2)} t`, tone: "text-leaf-400" },
              ].map((s) => (
                <div key={s.label} className="bg-pine-900/80 px-5 py-4">
                  <p className={`font-display text-xl font-bold tabular-nums sm:text-2xl ${s.tone}`}>
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-fog">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* image panel */}
          <div className="relative lg:col-span-5">
            <div className="group relative overflow-hidden rounded-lg border border-white/12">
              <img
                src={IMG.farm}
                alt="Aerial view of a utility-scale solar farm at golden hour"
                className="kenburns h-[380px] w-full object-cover sm:h-[460px] lg:h-[540px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-pine-950/20" />
              <div className="glass-dark floaty absolute right-4 top-4 rounded-md px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper">
                Availability <span className="text-leaf-400">98.4%</span>
              </div>
              <div className="glass-dark absolute bottom-4 left-4 flex items-center gap-2.5 rounded-md px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-amber-400" fill="none">
                  <circle cx="8" cy="8" r="3.2" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6 13 13M13 3l-1.4 1.4M4.4 11.6 3 13" />
                  </g>
                </svg>
                Thames Gateway · 42 MWp
              </div>
            </div>
            <p className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
              <span>Fig. 01 — Energised asset</span>
              <span className="text-amber-500/80">Bexley, London</span>
            </p>
          </div>
        </div>

        {/* scroll cue */}
        <div className="mt-16 hidden items-center gap-4 lg:flex">
          <span className="relative block h-14 w-px overflow-hidden bg-white/15">
            <span className="absolute left-0 top-0 h-6 w-px animate-[scrollcue_2.2s_ease-in-out_infinite] bg-amber-500" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            Scroll — the grid awaits
          </span>
        </div>
      </div>

      {/* amber ticker */}
      <div className="relative border-y border-pine-950/20 bg-amber-500 py-3.5 text-pine-950">
        <Marquee
          items={TICKER_ITEMS}
          itemClassName="font-display text-sm font-bold uppercase tracking-[0.14em]"
        />
      </div>

      <style>{`@keyframes scrollcue { 0% { transform: translateY(-100%);} 60%,100% { transform: translateY(220%);} }`}</style>
    </section>
  );
}
