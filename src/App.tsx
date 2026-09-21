import { useCallback, useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Opening from "./components/Opening";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
