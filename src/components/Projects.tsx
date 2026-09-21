import { PROJECTS } from "../lib/data";
import { Eyebrow, Lines, Reveal } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 bg-snow text-ink">
      <div className="relative px-5 py-24 sm:px-8 lg:px-14 lg:py-32 xl:px-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="02">
              Selected projects
            </Eyebrow>
            <Lines
              className="mt-6 text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[0.98] tracking-tight"
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
            Three recent programmes across Greater London — each one designed,
            built and energised by the same accountable team.
          </p>
        </div>

        {/* project cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.index} delay={i * 100}>
              <article className="group overflow-hidden rounded-lg border border-ink/10 bg-snow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                <div className="img-zoom relative h-64 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                  <span className="glass-light absolute left-4 top-4 rounded-md px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-600">
                    {p.index}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-green-600">
                    {p.sector}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ash">
                    {p.location}
                  </p>
                  <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-ink/10 pt-5">
                    {p.specs.map((s) => (
                      <div key={s.label}>
                        <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-ash">
                          {s.label}
                        </dt>
                        <dd className="mt-1 text-sm font-bold text-ink">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 border-l-2 border-cyan-500 pl-4 text-sm leading-relaxed text-graphite">
                    {p.outcome}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
