import { useCallback, useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Opening from "./components/Opening";
import Pillars from "./components/Pillars";
import Capabilities from "./components/Capabilities";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplitSection from "./components/SplitSection";
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
        {/* Metlen-style massive hero */}
        <Opening />

        {/* Metlen-style 4-tab square menu */}
        <Pillars />

        {/* Metlen-style split section — Solar */}
        <SplitSection
          image={IMG.farm}
          eyebrow="Solar generation"
          title="From a single rooftop to a forty-megawatt field."
          body="We design, build and maintain solar PV across the full spectrum — domestic, commercial and utility-scale. Every array is engineered to the same standard: 30-year service life, bankable yield, and a grid connection that holds."
          stat={{ value: "312 MWp", label: "installed capacity" }}
          cta="Explore solar capabilities"
        />

        {/* Capabilities ledger */}
        <Capabilities />

        {/* Metlen-style split section — Storage (dark, reversed) */}
        <SplitSection
          image={IMG.bessTwilight}
          eyebrow="Battery storage"
          title="Stacking revenue streams from day one."
          body="Grid-scale and behind-the-meter BESS, delivered as a turnkey system — from container pads and HVAC to stack commissioning and revenue optimisation. We size every system around your site, your grid connection and your route to market."
          stat={{ value: "20 MW", label: "latest facility" }}
          cta="Discuss your storage project"
          reverse
          dark
        />

        {/* Projects */}
        <Projects />

        {/* Metlen-style split section — Grid */}
        <SplitSection
          image={IMG.substation}
          eyebrow="Grid infrastructure"
          title="The cables, the switchgear, the code — all in-house."
          body="LV and HV distribution, SCADA, private fibre and the civil works that connect them. One accountable team means the electricians talk to the civils, the civils talk to the DNO, and nothing falls between subcontractors."
          stat={{ value: "98.4%", label: "fleet availability" }}
          cta="Talk to a delivery lead"
        />

        {/* Impact ledger */}
        <Impact />

        {/* Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
