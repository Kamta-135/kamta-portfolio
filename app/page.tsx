import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NeuralField from "@/components/NeuralField";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <NeuralField />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </PageTransition>
  );
}
