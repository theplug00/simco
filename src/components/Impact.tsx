import { IMPACT, type ImpactRow } from "../lib/data";
import { useInView } from "../lib/hooks";
import { Eyebrow, Lines, Reveal } from "./ui";

function ImpactBar({ row, delay }: { row: ImpactRow; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const tone = row.tone === "amber" ? "bg-cyan-500" : "bg-green-500";
  const textTone = row.tone === "amber" ? "text-cyan-400" : "text-green-400";
  return (
    <div
      ref={ref}
      className={`reveal grid items-center gap-4 border-t border-white/10 py-7 last:border-b lg:grid-cols-12 lg:gap-8 ${
        inView ? "in" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className={`font-display text-3xl font-extrabold tabular-nums tracking-tight lg:col-span-4 lg:text-4xl ${textTone}`}>
        {row.value}
      </p>
      <p className="text-sm leading-relaxed text-mist lg:col-span-4 lg:text-base">
        {row.label}
      </p>
      <div className="lg:col-span-4">
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className={`h-full rounded-full ${tone} ${inView ? "bar-grow" : ""}`}
            style={{ width: `${row.pct}%`, animationDelay: `${delay + 150}ms` }}
          />
        </div>
        <p className="mt-2 text-right font-mono text-[9px] uppercase tracking-[0.2em] text-mist/80">
          index vs 2030 target
        </p>
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="relative scroll-mt-20 bg-charcoal-900 text-snow">
      <div className="gridlines-light pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative px-5 py-24 sm:px-8 lg:px-14 lg:py-32 xl:px-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="05" dark>Impact ledger</Eyebrow>
            <Lines
              className="font-display mt-6 text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[0.98] tracking-tight"
              lines={[
                <span key="a">Built to give more</span>,
                <span key="b">
                  than it takes<span className="text-cyan-500">.</span>
                </span>,
              ]}
            />
          </div>
          <p className="max-w-sm text-base leading-relaxed text-mist lg:col-span-4 lg:col-start-9">
            Renewables only deserve the name if the balance sheet includes the
            land, the air and the neighbours. We publish ours.
          </p>
        </div>

        <div className="mt-16">
          {IMPACT.map((row, i) => (
            <ImpactBar key={row.label} row={row} delay={i * 70} />
          ))}
        </div>

        <Reveal delay={120} className="mt-16">
          <blockquote className="border-l-4 border-cyan-500 pl-6 sm:pl-8">
            <p className="font-display max-w-3xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              "The cheapest megawatt is the one you never have to waste — so we
              build generation, storage and efficiency as one machine."
            </p>
            <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              — Simco delivery charter, clause one
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
