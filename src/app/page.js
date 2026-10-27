import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-mesh" aria-hidden="true" />

      <Navbar />

      <main className="relative z-[1]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <div className="relative z-[1]">
        <Footer />
      </div>
    </>
  );
}