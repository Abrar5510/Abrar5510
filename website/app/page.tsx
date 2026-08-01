import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Ticker from "@/components/Ticker";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Standards from "@/components/Standards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Ticker />
      <Skills />
      <Projects />
      <Standards />
      <Contact />
      <Footer />
    </main>
  );
}
