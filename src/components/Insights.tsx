import { INSIGHTS, BRAND } from "../lib/data";
import { Eyebrow, Lines, Reveal, ArrowUpRight } from "./ui";

export default function Insights() {
  const [featured, ...rest] = INSIGHTS;

  return (
    <section id="insights" className="relative scroll-mt-20 bg-snow text-ink">
      <div className="gridlines-light pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative px-5 py-24 sm:px-8 lg:px-14 lg:py-32 xl:px-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="06">Field notes</Eyebrow>
            <Lines
              className="font-display mt-6 text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[0.98] tracking-tight"
              lines={[
                <span key="a">Notes from</span>,
                <span key="b">
                  the grid edge<span className="text-cyan-500">.</span>
                </span>,
              ]}
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
            <a
              href={`mailto:${BRAND.email}?subject=Field%20notes%20briefing`}
              className="link-sweep font-mono text-xs uppercase tracking-[0.2em] text-ink"
            >
              Get the monthly briefing →
            </a>
          </div>
        </div>

        <div className="mt-14 space-y-4">
          {/* featured note */}
          <Reveal>
            <a
              href={`mailto:${BRAND.email}?subject=Field%20note%3A%20${encodeURIComponent(featured.title)}`}
              className="group grid overflow-hidden rounded-lg border border-ink/10 bg-snow transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] lg:grid-cols-2"
            >
              <div className="img-zoom relative h-60 overflow-hidden sm:h-72 lg:h-auto">
                <img
                  src={featured.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="glass-light absolute left-4 top-4 rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-600">
                  Latest
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                  {featured.date}
                  <span className="rounded-full border border-ink/12 px-2.5 py-0.5 text-graphite">
                    {featured.tag}
                  </span>
                </p>
                <h3 className="font-display mt-4 text-2xl font-extrabold leading-tight tracking-tight transition-colors duration-300 group-hover:text-cyan-600 sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-600">
                  Request the note
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </p>
              </div>
            </a>
          </Reveal>

          {/* archive rows */}
          {rest.map((note, i) => (
            <Reveal key={note.title} delay={i * 80}>
              <a
                href={`mailto:${BRAND.email}?subject=Field%20note%3A%20${encodeURIComponent(note.title)}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t border-ink/10 py-6 transition-colors duration-400 last:border-b hover:bg-paper sm:gap-8 sm:px-4"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                  {note.date}
                </span>
                <span>
                  <span className="font-display block text-lg font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-cyan-600 sm:text-xl">
                    {note.title}
                  </span>
                  <span className="mt-1 inline-block rounded-full border border-ink/12 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-graphite">
                    {note.tag}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 -translate-x-1 translate-y-1 text-cyan-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
