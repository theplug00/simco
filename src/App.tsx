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
    <div className="min-h-screen bg-pine-950">
      {phase !== "done" && (
        <Preloader leaving={phase === "leaving"} onComplete={onComplete} />
      )}
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Opening />
        <Capabilities />
        <Projects />
        <Delivery />
        <Estimator />
        <Impact />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
