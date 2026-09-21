import { useState, type FormEvent } from "react";
import { BRAND, SERVICES, ACCREDITATIONS } from "../lib/data";
import { Eyebrow, Lines, Reveal } from "./ui";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const inputCls =
  "w-full rounded-md border border-ink/12 bg-snow px-4 py-3 text-sm text-ink placeholder:text-ash/45 outline-none transition-colors duration-300 focus:border-cyan-500";

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (form.name.trim().length < 2) next.name = "Please tell us who to call back.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "That email doesn't look right.";
    if (form.message.trim().length < 10) next.message = "A sentence or two helps us route it.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-paper text-ink">
      <div className="gridlines-light pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-cyan-500/6 blur-[130px]" />

      <div className="relative px-5 py-24 sm:px-8 lg:px-14 lg:py-32 xl:px-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* left rail */}
          <div className="lg:col-span-5">
            <Eyebrow index="03">
              Start a project
            </Eyebrow>
            <Lines
              className="mt-6 text-[clamp(2.5rem,5.6vw,4.8rem)] font-extrabold leading-[0.98] tracking-tight"
              lines={[
                <span key="a">Let's build the grid's</span>,
                <span key="b">
                  next chapter<span className="text-cyan-500">.</span>
                </span>,
              ]}
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-graphite">
              The sales desk answers inside one working day — with an engineer on the call, not a script.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="link-sweep block w-fit text-lg font-bold text-cyan-600 sm:text-2xl break-all"
              >
                {BRAND.email}
              </a>
              <a
                href={BRAND.phoneHref}
                className="link-sweep block w-fit text-lg font-bold text-ink sm:text-2xl"
              >
                {BRAND.phoneDisplay}
              </a>
            </div>

            <div className="mt-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
                Accreditations
              </p>
              <div className="mt-4 flex max-w-md flex-wrap gap-2">
                {ACCREDITATIONS.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-ink/12 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-graphite"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <div className="glass-light rounded-lg p-6 sm:p-8 lg:p-10">
                {sent ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none">
                      <circle cx="32" cy="32" r="30" stroke="#00d4d5" strokeWidth="2" />
                      <path d="m20 33 8 8 16-18" stroke="#00d4d5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="mt-6 text-2xl font-extrabold sm:text-3xl">
                      Request logged<span className="text-cyan-500">.</span>
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-graphite">
                      Thanks, {form.name.split(" ")[0] || "there"} — the sales desk replies within
                      one working day. Urgent? Call{" "}
                      <a href={BRAND.phoneHref} className="link-sweep text-cyan-600">
                        {BRAND.phoneDisplay}
                      </a>
                      .
                    </p>
                    <button
                      onClick={() => {
                        setForm(EMPTY);
                        setSent(false);
                      }}
                      className="link-sweep mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
                      Project enquiry — 60 seconds
                    </p>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="f-name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                          Name *
                        </label>
                        <input id="f-name" className={inputCls} placeholder="Jordan Whitfield" value={form.name} onChange={set("name")} />
                        {errors.name && <p className="mt-1.5 font-mono text-[10px] text-cyan-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="f-email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                          Email *
                        </label>
                        <input id="f-email" type="email" className={inputCls} placeholder="you@company.co.uk" value={form.email} onChange={set("email")} />
                        {errors.email && <p className="mt-1.5 font-mono text-[10px] text-cyan-600">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="f-phone" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                          Phone
                        </label>
                        <input id="f-phone" className={inputCls} placeholder="+44 …" value={form.phone} onChange={set("phone")} />
                      </div>
                      <div>
                        <label htmlFor="f-service" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                          What do you need?
                        </label>
                        <select
                          id="f-service"
                          className={`${inputCls} appearance-none`}
                          value={form.service}
                          onChange={set("service")}
                        >
                          <option value="" className="bg-snow">Select a discipline…</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title} className="bg-snow">
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="f-message" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                          Project details *
                        </label>
                        <textarea
                          id="f-message"
                          rows={4}
                          className={`${inputCls} resize-none`}
                          placeholder="Site location, capacity you're eyeing, grid status, timeline…"
                          value={form.message}
                          onChange={set("message")}
                        />
                        {errors.message && <p className="mt-1.5 font-mono text-[10px] text-cyan-600">{errors.message}</p>}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="group mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-cyan-500 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-snow transition-all duration-300 hover:bg-cyan-600 hover:shadow-[0_0_36px_rgba(0,212,213,0.4)]"
                    >
                      Send to the sales desk
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none">
                        <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
