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

const HERO_SLIDES = [
  {
    img: IMG.farm,
    label: "Thames Gateway · 42 MWp",
    caption: "Utility-scale solar park",
  },
  {
    img: IMG.solarClose,
    label: "C&I Rooftop Array",
    caption: "3.8 MWp across 9 blocks",
  },
  {
    img: IMG.bessTwilight,
    label: "Lea Valley BESS",
    caption: "20 MW / 40 MWh storage facility",
  },
  {
    img: IMG.wind,
    label: "Offshore Wind Integration",
    caption: "Grid connection infrastructure",
  },
];

export default function Opening() {
  const { gridMw, irradiance, co2Today } = useLiveTelemetry();
  const [currentSlide, setCurrentSlide] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reduced]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden bg-snow text-ink">
      {/* layered ambient background */}
      <div className="gridlines-light absolute inset-0" />
      <div className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-cyan-500/8 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[540px] w-[540px] rounded-full bg-green-500/6 blur-[130px]" />
      <SunArc className="sun-spin pointer-events-none absolute -right-40 top-24 hidden h-[520px] w-[520px] opacity-40 lg:block" />

      <div className="relative px-5 pb-14 pt-32 sm:px-8 lg:px-14 lg:pt-40 xl:px-20">
        {/* meta strip */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 lg:mb-14">
          <span className="glass-light flex items-center gap-2.5 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-green-600">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-500" />
            Live · UK grid export
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-ash sm:block">
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
                    WebkitTextStroke: "1.5px #00d4d5",
                  }}
                >
                  engineered
                </span>,
                <span key="c">
                  into assets<span className="text-cyan-500">.</span>
                </span>,
              ]}
            />
            <p className="mt-8 max-w-md text-base leading-relaxed text-graphite sm:text-lg">
              Simco is a London-based EPC &amp; O&amp;M contractor building the
              UK's renewable backbone — solar farms, rooftop arrays, battery
              storage and the civil, electrical and telecom works that connect
              them to the grid.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={() => go("contact")}
                className="group flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-snow transition-all duration-300 hover:bg-cyan-600 hover:shadow-[0_0_36px_rgba(0,212,213,0.4)]"
              >
                Scope your project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => go("capabilities")}
                className="link-sweep pb-1 font-mono text-xs uppercase tracking-[0.2em] text-ink"
              >
                Explore capabilities
              </button>
            </div>

            {/* live telemetry strip */}
            <div className="mt-14 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink/8 bg-ink/8 sm:grid-cols-3">
              {[
                { label: "Grid output", value: `${gridMw.toFixed(2)} MW`, tone: "text-cyan-600" },
                { label: "Irradiance", value: `${irradiance} W/m²`, tone: "text-ink" },
                { label: "CO₂ avoided today", value: `${co2Today.toFixed(2)} t`, tone: "text-green-600" },
              ].map((s) => (
                <div key={s.label} className="bg-snow px-5 py-4">
                  <p className={`font-display text-xl font-bold tabular-nums sm:text-2xl ${s.tone}`}>
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-ash">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* hero carousel */}
          <div className="relative lg:col-span-5">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-ink/10">
              {HERO_SLIDES.map((slide, i) => (
                <img
                  key={i}
                  src={slide.img}
                  alt={slide.caption}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    i === currentSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />
              <div className="glass-light floaty absolute right-4 top-4 rounded-md px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-snow">
                Availability <span className="text-green-400">98.4%</span>
              </div>
              <div className="glass-light absolute bottom-4 left-4 flex items-center gap-2.5 rounded-md px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-snow">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-cyan-400" fill="none">
                  <circle cx="8" cy="8" r="3.2" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6 13 13M13 3l-1.4 1.4M4.4 11.6 3 13" />
                  </g>
                </svg>
                {HERO_SLIDES[currentSlide].label}
              </div>
              {/* slide indicators */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentSlide ? "w-8 bg-cyan-500" : "w-1.5 bg-snow/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
              <span>Fig. 01 — Energised asset</span>
              <span className="text-cyan-600/80">{HERO_SLIDES[currentSlide].caption}</span>
            </p>
          </div>
        </div>

        {/* scroll cue */}
        <div className="mt-16 hidden items-center gap-4 lg:flex">
          <span className="relative block h-14 w-px overflow-hidden bg-ink/15">
            <span className="absolute left-0 top-0 h-6 w-px animate-[scrollcue_2.2s_ease-in-out_infinite] bg-cyan-500" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
            Scroll — the grid awaits
          </span>
        </div>
      </div>

      {/* cyan ticker */}
      <div className="relative border-y border-snow/20 bg-cyan-500 py-3.5 text-snow">
        <Marquee
          items={TICKER_ITEMS}
          itemClassName="font-display text-sm font-bold uppercase tracking-[0.14em]"
        />
      </div>

      <style>{`@keyframes scrollcue { 0% { transform: translateY(-100%);} 60%,100% { transform: translateY(220%);} }`}</style>
    </section>
  );
}
