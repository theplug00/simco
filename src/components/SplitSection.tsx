import { Reveal } from "./ui";

interface SplitSectionProps {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
  cta?: string;
  reverse?: boolean;
  dark?: boolean;
}

export default function SplitSection({
  image,
  eyebrow,
  title,
  body,
  stat,
  cta,
  reverse = false,
  dark = false,
}: SplitSectionProps) {
  const bg = dark ? "bg-ink text-snow" : "bg-snow text-ink";
  const textMuted = dark ? "text-snow/70" : "text-graphite";
  const textEyebrow = dark ? "text-cyan-400" : "text-cyan-600";
  const borderColor = dark ? "border-snow/10" : "border-ink/10";

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <div
        className={`grid min-h-[600px] lg:grid-cols-2 ${
          reverse ? "" : ""
        }`}
      >
        {/* Image side */}
        <div className={`relative overflow-hidden ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full min-h-[400px] w-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
          />
          {stat && (
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between rounded-lg border border-snow/20 bg-ink/70 p-5 backdrop-blur-md">
              <div>
                <p className="font-display text-3xl font-extrabold text-cyan-400 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] text-snow/70">
                  {stat.label}
                </p>
              </div>
              <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#00d4d5" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="20" cy="20" r="5" fill="#00d4d5" />
              </svg>
            </div>
          )}
        </div>

        {/* Text side */}
        <div
          className={`flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Reveal>
            <p className={`font-mono text-[11px] uppercase tracking-[0.32em] ${textEyebrow}`}>
              {eyebrow}
            </p>
            <h2
              className="font-display mt-5 text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.02] tracking-tight"
            >
              {title}
            </h2>
            <p className={`mt-6 max-w-lg text-base leading-relaxed ${textMuted}`}>
              {body}
            </p>
            {cta && (
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`group mt-10 flex items-center gap-3 border-b ${borderColor} pb-2 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:gap-5 hover:border-cyan-500 hover:text-cyan-500`}
              >
                {cta}
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none">
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
