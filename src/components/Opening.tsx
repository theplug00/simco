import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../lib/hooks";
import { TICKER_ITEMS, IMG } from "../lib/data";
import { Marquee, ArrowUpRight } from "./ui";

function useLondonTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const londonTime = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      const londonDate = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        weekday: "long",
        day: "numeric",
        month: "short",
      }).format(now);

      setTime(londonTime);
      setDate(londonDate);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return { time, date };
}

const HERO_SLIDES = [
  {
    img: IMG.farm,
    label: "Thames Gateway · 42 MWp",
    tag: "Utility-scale solar",
  },
  {
    img: IMG.solarClose,
    label: "C&I Rooftop Array",
    tag: "Commercial solar",
  },
  {
    img: IMG.bessTwilight,
    label: "Lea Valley BESS",
    tag: "Battery storage",
  },
  {
    img: IMG.wind,
    label: "Offshore Integration",
    tag: "Grid infrastructure",
  },
];

export default function Opening() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reduced = usePrefersReducedMotion();
  const { time, date } = useLondonTime();

  // Static weather data for London (realistic conditions)
  const weather = {
    temp: 14,
    condition: "Partly Cloudy",
    icon: "⛅",
  };

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, [reduced]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const current = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative overflow-hidden bg-ink text-snow">
      {/* Full-bleed image background */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={i}
            src={slide.img}
            alt={slide.tag}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === currentSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        ))}
        {/* Heavy overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-ink/30" />
      </div>

      {/* Top meta bar */}
      <div className="relative z-10 px-5 pt-32 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="flex items-center gap-2.5 rounded-full border border-snow/20 bg-snow/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-snow backdrop-blur-md">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-green-400" />
            Live · UK grid export
          </span>
          <div className="flex items-center gap-6">
            {/* Weather */}
            <div className="hidden items-center gap-3 rounded-full border border-snow/20 bg-snow/5 px-4 py-2 backdrop-blur-md sm:flex">
              <span className="text-lg">{weather.icon}</span>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-snow/80">
                <span className="block text-snow">{weather.temp}°C</span>
                <span className="text-[8px] text-snow/60">{weather.condition}</span>
              </div>
            </div>
            {/* Time */}
            <div className="hidden items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-md md:flex">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="block text-cyan-400">{time}</span>
                <span className="text-[8px] text-snow/60">{date} · London</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massive centered headline — Metlen-style */}
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-14 xl:px-20">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.4em] text-cyan-400">
          Simco Renewables Solutions
        </p>
        <h1 className="font-display text-[clamp(2.8rem,10vw,9rem)] font-extrabold leading-[0.88] tracking-tight">
          <span className="block">BUILDING</span>
          <span className="block">
            THE{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px #00d4d5",
              }}
            >
              EDGE
            </span>
          </span>
          <span className="block">
            OF <span className="text-cyan-400">TOMORROW</span>
          </span>
        </h1>
        <p className="mt-10 max-w-xl text-base leading-relaxed text-snow/80 sm:text-lg">
          A London-based EPC &amp; O&amp;M contractor engineering the UK's
          renewable backbone — solar, storage, and the grid that connects them.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => go("contact")}
            className="group flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_36px_rgba(0,212,213,0.5)]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => go("capabilities")}
            className="rounded-full border border-snow/30 bg-snow/5 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-snow backdrop-blur-md transition-all duration-300 hover:border-cyan-500 hover:bg-snow/10"
          >
            View capabilities
          </button>
        </div>
      </div>

      {/* Bottom anchored info bar — Metlen-style */}
      <div className="relative z-10 px-5 pb-8 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-snow/15 pt-6">
          <div className="flex items-center gap-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-snow/50">
                Current project
              </p>
              <p className="mt-1 font-display text-lg font-bold text-snow">
                {current.label}
              </p>
            </div>
            <div className="hidden sm:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-snow/50">
                Sector
              </p>
              <p className="mt-1 font-display text-lg font-bold text-cyan-400">
                {current.tag}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-0.5 transition-all duration-500 ${
                  i === currentSlide ? "w-12 bg-cyan-400" : "w-6 bg-snow/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
            <span className="ml-4 font-mono text-[10px] tabular-nums text-snow/60">
              {String(currentSlide + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Cyan ticker */}
      <div className="relative bg-cyan-500 py-3.5 text-ink">
        <Marquee
          items={TICKER_ITEMS}
          itemClassName="font-display text-sm font-bold uppercase tracking-[0.14em]"
        />
      </div>
    </section>
  );
}
