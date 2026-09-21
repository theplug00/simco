import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../lib/hooks";
import { TICKER_ITEMS, BRAND, IMG } from "../lib/data";
import { Lines, Marquee, ArrowUpRight } from "./ui";

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
      {/* subtle background */}
      <div className="gridlines-light absolute inset-0" />
      <div className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-cyan-500/6 blur-[130px]" />

      <div className="relative px-5 pb-14 pt-32 sm:px-8 lg:px-14 lg:pt-40 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* headline */}
          <div className="lg:col-span-7">
            <Lines
              as="h1"
              className="text-[clamp(3.3rem,9.2vw,8.2rem)] font-extrabold leading-[0.92] tracking-tight"
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
                className="group flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-snow transition-all duration-300 hover:bg-cyan-600 hover:shadow-[0_0_36px_rgba(0,212,213,0.4)]"
              >
                Scope your project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => go("capabilities")}
                className="link-sweep pb-1 text-xs uppercase tracking-[0.2em] text-ink"
              >
                Explore capabilities
              </button>
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
              <div className="glass-light absolute bottom-4 left-4 rounded-md px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-snow">
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
          </div>
        </div>
      </div>

      {/* cyan ticker */}
      <div className="relative border-y border-snow/20 bg-cyan-500 py-3.5 text-snow">
        <Marquee
          items={TICKER_ITEMS}
          itemClassName="text-sm font-bold uppercase tracking-[0.14em]"
        />
      </div>
    </section>
  );
}
