import { PROJECTS } from "../lib/data";
import { Eyebrow, Lines, Reveal, Diamond } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 overflow-hidden bg-snow text-ink">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />
      <div className="relative px-5 py-24 sm:px-8 lg:px-14 lg:py-32 xl:px-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="02">
              Selected projects
            </Eyebrow>
            <Lines
              className="font-display mt-6 text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[0.98] tracking-tight"
              lines={[
                <span key="a">Proof, poured in</span>,
                <span key="b">
                  concrete <span className="text-cyan-500">&amp;</span> copper
                  <span className="text-cyan-500">.</span>
                </span>,
              ]}
            />
          </div>
          <p className="max-w-sm text-base leading-relaxed text-graphite lg:col-span-4 lg:col-start-9">
            Four recent programmes across Greater London — each one designed,
            built and energised by the same accountable team.
          </p>
        </div>

        {/* stacked pinned cards */}
        <div className="relative mt-16 flex flex-col gap-8 lg:mt-20">
          {PROJECTS.map((p, i) => (
            <article
              key={p.index}
              style={{ top: `${96 + i * 22}px`, zIndex: i + 1 }}
              className="sticky grid overflow-hidden rounded-lg border border-ink/10 bg-snow shadow-[0_-18px_60px_rgba(0,0,0,0.08)] md:grid-cols-2"
            >
              <div className="group relative h-64 overflow-hidden sm:h-80 md:h-auto md:min-h-[420px]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-snow/50" />
                <span className="glass-light absolute left-4 top-4 rounded-md px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-600">
                  {p.index}
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-green-600">
                  {p.sector}
                </p>
                <h3 className="font-display mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ash">
                  {p.location}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/10 pt-7">
                  {p.specs.map((s) => (
                    <div key={s.label}>
                      <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-ash">
                        {s.label}
                      </dt>
                      <dd className="font-display mt-1 text-lg font-bold text-ink sm:text-xl">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-7 flex items-start gap-3 border-l-2 border-cyan-500 pl-4 text-sm leading-relaxed text-graphite">
                  <Diamond className="mt-1.5 h-2 w-2 shrink-0 text-cyan-500" />
                  {p.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Reveal delay={120} className="mt-16 flex justify-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ash">
            Full project ledger available on request —{" "}
            <a
              href="mailto:sales@simcorenewablesolutions.org.uk?subject=Project%20ledger%20request"
              className="link-sweep text-cyan-600"
            >
              ask for it
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
