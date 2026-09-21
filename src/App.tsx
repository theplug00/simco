import { useCallback, useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Opening from "./components/Opening";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
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
    <div className="min-h-screen bg-snow">
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
          image={IMG.solarClose}
          title="Every panel, every cable, every connection"
          subtitle="Quality is non-negotiable. We build to last 30 years — because that's the commitment we make to our clients."
          height="h-[50vh]"
        />
        <Impact />
        <ParallaxSection
          image={IMG.bessTwilight}
          title="The grid's next chapter starts here"
          subtitle="From rooftop to grid-scale, we're building the renewable backbone of the UK."
          height="h-[50vh]"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
