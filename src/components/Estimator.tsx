import { useMemo, useState, type CSSProperties } from "react";
import { useInView } from "../lib/hooks";
import { Eyebrow, Lines, Reveal } from "./ui";

type Profile = "home" | "business" | "farm";

const PROFILES: { id: Profile; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "business", label: "Business" },
  { id: "farm", label: "Farm / Utility" },
];

const CFG: Record<
  Profile,
  { rate: number; fill: number; costPerKwp: number; export: number; selfUse: number }
> = {
  home: { rate: 0.31, fill: 0.15, costPerKwp: 1450, export: 0.08, selfUse: 0.45 },
  business: { rate: 0.27, fill: 0.165, costPerKwp: 850, export: 0.07, selfUse: 0.65 },
  farm: { rate: 0.22, fill: 0.17, costPerKwp: 620, export: 0.06, selfUse: 0.8 },
};

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <label className="font-mono text-[10px] uppercase tracking-[0.24em] text-graphite">
          {label}
        </label>
        <span className="font-display text-xl font-bold tabular-nums text-cyan-600">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        className="sim-range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${pct}%` } as CSSProperties}
      />
    </div>
  );
}

export default function Estimator() {
  const [profile, setProfile] = useState<Profile>("business");
  const [bill, setBill] = useState(480);
  const [area, setArea] = useState(1800);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  const r = useMemo(() => {
    const c = CFG[profile];
    const kwp = area * c.fill;
    const genKwh = kwp * 900;
    const rawSavings = genKwh * (c.selfUse * c.rate + (1 - c.selfUse) * c.export);
    const savings = Math.min(rawSavings, bill * 12);
    const cost = kwp * c.costPerKwp;
    const payback = savings > 0 ? cost / savings : 0;
    const co2 = (genKwh * 0.183) / 1000;
    return { kwp, genKwh, savings, payback, co2 };
  }, [profile, bill, area]);

  const fmtGen = (kwh: number) =>
    kwh >= 1000 ? `${(kwh / 1000).toFixed(1)} MWh` : `${Math.round(kwh)} kWh`;

  return (
    <section id="estimator" className="relative scroll-mt-20 overflow-hidden bg-snow text-ink">
      <div className="gridlines-light pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-cyan-500/8 blur-[130px]" />

      <div ref={ref} className="relative px-5 py-24 sm:px-8 lg:px-14 lg:py-32 xl:px-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* left rail */}
          <div className="lg:col-span-5">
            <Eyebrow index="04">
              Solar + storage estimator
            </Eyebrow>
            <Lines
              className="font-display mt-6 text-[clamp(2.4rem,5.4vw,4.4rem)] font-extrabold leading-[0.98] tracking-tight"
              lines={[
                <span key="a">Price the sun</span>,
                <span key="b">
                  before you spend<span className="text-cyan-500">.</span>
                </span>,
              ]}
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-graphite">
              Slide your numbers through our yield model — the same one we take
              to bank meetings — and see the system size, the saving and the
              carbon before anyone sets foot on your roof.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "MIS-aligned yield assumptions",
                "London irradiance dataset, 10-yr average",
                "SEG export tariffs built in",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-graphite">
                  <span className="h-1.5 w-1.5 rotate-45 bg-green-500" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-sm border-l-2 border-ink/15 pl-4 text-xs leading-relaxed text-ash">
              Indicative only. A site survey and DNO check always precede a
              formal quotation — that's how the numbers stay honest.
            </p>
          </div>

          {/* configurator */}
          <div className={`reveal lg:col-span-7 ${inView ? "in" : ""}`}>
            <div className="glass-light rounded-lg p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
                  Usage profile
                </p>
                <div className="flex rounded-full border border-ink/12 p-1">
                  {PROFILES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setProfile(p.id)}
                      className={`rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300 ${
                        profile === p.id
                          ? "bg-cyan-500 font-semibold text-snow"
                          : "text-graphite hover:text-ink"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-9 space-y-8">
                <Slider
                  label="Average monthly electricity bill"
                  value={bill}
                  min={60}
                  max={2500}
                  step={20}
                  format={(v) => `£${v.toLocaleString("en-GB")}`}
                  onChange={setBill}
                />
                <Slider
                  label={profile === "farm" ? "Available land area" : "Available roof area"}
                  value={area}
                  min={40}
                  max={12000}
                  step={20}
                  format={(v) => `${v.toLocaleString("en-GB")} m²`}
                  onChange={setArea}
                />
              </div>

              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 lg:grid-cols-4">
                {[
                  { label: "System size", value: `${r.kwp.toFixed(1)} kWp`, tone: "text-ink" },
                  { label: "Generation / yr", value: fmtGen(r.genKwh), tone: "text-ink" },
                  { label: "Saving / yr", value: `£${Math.round(r.savings).toLocaleString("en-GB")}`, tone: "text-cyan-600" },
                  { label: "CO₂ avoided / yr", value: `${r.co2.toFixed(1)} t`, tone: "text-green-600" },
                ].map((o) => (
                  <div key={o.label} className="bg-snow px-4 py-5">
                    <p className={`font-display text-lg font-extrabold tabular-nums sm:text-xl ${o.tone}`}>
                      {o.value}
                    </p>
                    <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-ash">
                      {o.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                    Indicative payback
                  </p>
                  <p className="font-display mt-1 text-3xl font-extrabold text-cyan-600">
                    {r.payback.toFixed(1)}{" "}
                    <span className="text-lg font-bold text-graphite">yrs</span>
                  </p>
                </div>
                <div className="w-full max-w-[220px]">
                  <div className="h-1.5 overflow-hidden rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-green-500 transition-all duration-700 ease-out"
                      style={{ width: `${Math.min((r.payback / 15) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right font-mono text-[9px] uppercase tracking-[0.2em] text-ash/70">
                    vs 25-yr asset life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
