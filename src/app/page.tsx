import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import FortyTwo from "@/components/FortyTwo";
import PowerPlatform from "@/components/PowerPlatform";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/ui/CursorEffect";
import BgCanvas from "@/components/ui/BgCanvas";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-void)" }}>
      <BgCanvas />
      <CursorEffect />
      <Navigation />

      {/* Content shifted right of sidebar */}
      <div style={{ marginLeft: "var(--nav-w)", position: "relative", zIndex: 1 }}>
        <Hero />

        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrow" /></div>
        <About />

        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrow" /></div>
        <PowerPlatform />

        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrow" /></div>
        <Journey />

        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrow" /></div>
        <FortyTwo />

        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrow" /></div>
        <Projects />

        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrow" /></div>
        <Stack />

        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrow" /></div>
        <Services />

        <div className="flow-connector"><div className="flow-line" /><div className="flow-arrow" /></div>
        <Contact />

        <Footer />
      </div>
    </div>
  );
}
