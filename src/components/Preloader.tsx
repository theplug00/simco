import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../lib/hooks";
import { LogoMark } from "./ui";

const WORD = "SIMCO";

export default function Preloader({
  leaving,
  onComplete,
}: {
  leaving: boolean;
  onComplete: () => void;
}) {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (reduced) {
      setProgress(100);
      if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(onComplete, 120);
      }
      return;
    }
    const t0 = performance.now();
    const duration = 1650;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setTimeout(onComplete, 420);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, onComplete]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-charcoal-950 text-snow transition-transform duration-[850ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="gridlines-light pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-cyan-500/12 blur-[120px]" />

      <div className="relative flex items-center justify-between px-5 pt-6 sm:px-8 lg:px-14">
        <div
          className={`flex items-center gap-3 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <LogoMark className="h-8 w-8" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mist">
            Loading grid telemetry
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mist">
          London · UK
        </span>
      </div>

      <div className="relative flex flex-col items-center px-5">
        <div className="flex overflow-hidden">
          {WORD.split("").map((ch, i) => (
            <span
              key={i}
              className="font-display inline-block text-[clamp(4rem,14vw,11rem)] font-extrabold leading-[0.95] tracking-tight"
              style={{
                transform: mounted ? "translateY(0)" : "translateY(112%)",
                transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: `${120 + i * 70}ms`,
              }}
            >
              {ch}
            </span>
          ))}
        </div>
        <p
          className={`mt-4 font-mono text-[11px] uppercase tracking-[0.42em] text-cyan-400 transition-all delay-500 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          Renewable Solutions
        </p>
      </div>

      <div className="relative px-5 pb-6 sm:px-8 lg:px-14">
        <div className="flex items-end justify-between font-mono">
          <span className="text-[11px] uppercase tracking-[0.3em] text-mist">
            Solar · Storage · Grid
          </span>
          <span className="text-4xl font-medium tabular-nums text-snow sm:text-5xl">
            {progress}
            <span className="text-cyan-500">%</span>
          </span>
        </div>
        <div className="mt-3 h-px w-full bg-white/10">
          <div
            className="h-full bg-cyan-500 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
