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

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--void)]">
      <CursorEffect />
      <Navigation />
      <Hero />
      <About />
      <Journey />
      <FortyTwo />
      <PowerPlatform />
      <Projects />
      <Stack />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
