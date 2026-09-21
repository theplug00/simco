import { IMG } from "../lib/data";
import { Reveal } from "./ui";

const PILLARS = [
  {
    title: "SOLAR",
    subtitle: "Generation",
    blurb: "Rooftop arrays to utility-scale farms — designed, installed and maintained.",
    img: IMG.farm,
    stat: "312 MWp",
    statLabel: "installed capacity",
  },
  {
    title: "STORAGE",
    subtitle: "BESS",
    blurb: "Grid-scale and behind-the-meter battery systems, stacked for revenue.",
    img: IMG.bessTwilight,
    stat: "20 MW",
    statLabel: "latest facility",
  },
  {
    title: "GRID",
    subtitle: "Infrastructure",
    blurb: "LV/HV electrical, SCADA, telecoms and the civil works that connect them.",
    img: IMG.substation,
    stat: "98.4%",
    statLabel: "fleet availability",
  },
  {
    title: "CONSULT",
    subtitle: "Advisory",
    blurb: "Feasibility, yield modelling, planning and route-to-market advice.",
    img: IMG.team,
    stat: "148",
    statLabel: "projects delivered",
  },
];

export default function Pillars() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pillars" className="relative bg-snow text-ink">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <button
              onClick={() => go("capabilities")}
              className="group relative flex h-[380px] w-full flex-col justify-between overflow-hidden border-r border-b border-ink/10 p-8 text-left transition-all duration-500 hover:bg-ink sm:h-[440px] lg:border-b-0 lg:last:border-r-0"
            >
              {/* background image */}
              <img
                src={p.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/0 group-hover:to-ink/80 transition-all duration-500" />

              {/* top content */}
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash group-hover:text-cyan-400 transition-colors duration-300">
                  {p.subtitle}
                </p>
                <h3 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-ink group-hover:text-snow transition-colors duration-300 lg:text-5xl">
                  {p.title}
                </h3>
              </div>

              {/* bottom content */}
              <div className="relative">
                <p className="max-w-[220px] text-sm leading-relaxed text-graphite opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-snow/80">
                  {p.blurb}
                </p>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-2xl font-extrabold text-cyan-600 group-hover:text-cyan-400 transition-colors duration-300">
                      {p.stat}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ash group-hover:text-snow/60 transition-colors duration-300">
                      {p.statLabel}
                    </p>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 -translate-x-2 translate-y-2 text-ink opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-cyan-400 group-hover:opacity-100"
                  >
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
