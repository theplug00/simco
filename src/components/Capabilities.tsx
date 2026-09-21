import { useState } from "react";
import { SERVICES } from "../lib/data";
import { Eyebrow, Lines, ArrowUpRight } from "./ui";

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section id="capabilities" className="relative scroll-mt-20 bg-paper text-ink">
      <div className="gridlines-light pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative px-5 py-24 sm:px-8 lg:px-14 lg:py-32 xl:px-20">
        {/* header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="01">Capabilities</Eyebrow>
            <Lines
              className="mt-6 text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[0.98] tracking-tight"
              lines={[
                <span key="a">Full-stack renewable</span>,
                <span key="b">
                  delivery<span className="text-cyan-500">,</span> one roof
                  <span className="text-cyan-500">.</span>
                </span>,
              ]}
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-graphite">
              Six core disciplines under one contract — so nothing falls between subcontractors.
            </p>
          </div>
        </div>

        {/* ledger */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* sticky crossfade visual */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-lg border border-ink/10 bg-mist">
                {SERVICES.map((s, i) => (
                  <img
                    key={s.id}
                    src={s.img}
                    alt=""
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                  <p className="max-w-[75%] text-lg font-bold leading-tight text-snow">
                    {current.title}
                  </p>
                  <p className="font-mono text-xs tabular-nums text-cyan-400">
                    {String(active + 1).padStart(2, "0")} / {SERVICES.length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* service rows */}
          <div className="lg:col-span-7">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 border-t border-ink/10 px-4 py-5 text-left transition-colors duration-400 last:border-b hover:bg-mist sm:px-5"
              >
                <span className="font-mono text-[11px] tabular-nums text-cyan-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-lg font-bold leading-snug sm:text-xl">
                    {s.title}
                  </span>
                  <span className="mt-1 block max-w-lg text-sm leading-relaxed text-graphite">
                    {s.blurb}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 -translate-x-1 translate-y-1 text-cyan-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
