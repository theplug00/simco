import { STATS, STEPS, type Stat } from "../lib/data";
import { useCountUp, useInView } from "../lib/hooks";
import { Eyebrow, Lines, Reveal } from "./ui";

function StatValue({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, start, 1700, stat.decimals ?? 0);
  return (
    <p className="font-display text-4xl font-extrabold tabular-nums tracking-tight text-paper lg:text-5xl">
      {value}
      <span className="text-amber-400">{stat.suffix}</span>
    </p>
  );
}

export default function Delivery() {
  const { ref: bandRef, inView: bandIn } = useInView<HTMLDivElement>({ threshold: 0.3 });

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="delivery" className="relative scroll-mt-20 bg-paper text-ink">
      <div className="gridlines-dark pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative px-5 py-24 sm:px-8 lg:px-14 lg:py-32 xl:px-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow index="03">Delivery method</Eyebrow>
              <Lines
                className="font-display mt-6 text-[clamp(2.4rem,5.4vw,4.4rem)] font-extrabold leading-[0.98] tracking-tight"
                lines={[
                  <span key="a">From gate-one</span>,
                  <span key="b">
                    to grid<span className="text-amber-500">,</span>
                  </span>,
                  <span key="c">on rails.</span>,
                ]}
              />
              <p className="mt-6 max-w-md text-base leading-relaxed text-sage">
                A five-stage delivery spine runs through every Simco programme —
                the same gates, the same reporting, whether it's a domestic
                array or a forty-megawatt park.
              </p>
              <button
                onClick={() => go("contact")}
                className="link-sweep mt-8 pb-1 font-mono text-xs uppercase tracking-[0.2em] text-ink"
              >
                Talk to a delivery lead →
              </button>

              <Reveal delay={150} className="mt-12">
                <div className="glass-light rounded-lg p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-moss">
                    Every project ships with
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {[
                      "Weekly cost & programme dashboard",
                      "CDM-compliant site documentation",
                      "Live SCADA access from day one",
                      "24-month defect liability period",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-ink">
                        <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 shrink-0 text-amber-600" fill="none">
                          <path d="m2.5 7.5 3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* steps */}
          <div className="lg:col-span-6 lg:col-start-7">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div className="group grid grid-cols-[auto_1fr] gap-6 border-t border-ink/12 py-8 transition-colors duration-500 last:border-b hover:bg-card sm:gap-10 sm:px-4">
                  <span className="font-display text-4xl font-extrabold leading-none text-amber-500/85 transition-colors duration-500 group-hover:text-amber-600 sm:text-5xl">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-sage">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* stats band */}
        <div
          ref={bandRef}
          className="relative mt-24 overflow-hidden rounded-lg bg-pine-950 p-8 text-paper sm:p-10 lg:p-14"
        >
          <div className="gridlines-light pointer-events-none absolute inset-0 opacity-70" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/15 blur-[90px]" />
          <div className="relative grid grid-cols-2 gap-10 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <StatValue stat={stat} start={bandIn} />
                <p className="mt-2.5 max-w-[180px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-fog">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="relative mt-10 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-fog">
            Figures audited annually · trailing 36 months of UK programmes
          </p>
        </div>
      </div>
    </section>
  );
}
