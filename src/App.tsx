import { useCallback, useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Opening from "./components/Opening";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import Delivery from "./components/Delivery";
import Estimator from "./components/Estimator";
import Impact from "./components/Impact";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";
import { IMG } from "./lib/data";

type Phase = "loading" | "leaving" | "done";

export default function App() {
  const [phase, setPhase] = useState<Phase>("loading");

  const onComplete = useCallback(() => {
    setPhase((p) => (p === "loading" ? "leaving" : p));
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    const t = setTimeout(() => setPhase("done"), 920);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="min-h-screen bg-charcoal-950">
      {phase !== "done" && (
        <Preloader leaving={phase === "leaving"} onComplete={onComplete} />
      )}
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Opening />
        <Capabilities />
        <ParallaxSection
          image={IMG.team}
          title="Engineered by people who care"
          subtitle="Every project is led by a senior engineer — not a project manager reading from a script."
          height="h-[50vh]"
        />
        <Projects />
        <ParallaxSection
          image={IMG.wind}
          title="From rooftop to grid-scale"
          subtitle="We deliver across the full spectrum — domestic arrays, commercial rooftops, utility-scale solar farms and battery storage."
          height="h-[50vh]"
        />
        <Delivery />
        <Estimator />
        <ParallaxSection
          image={IMG.solarClose}
          title="Every panel, every cable, every connection"
          subtitle="Quality is non-negotiable. We build to last 30 years — because that's the commitment we make to our clients."
          height="h-[50vh]"
        />
        <Impact />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
