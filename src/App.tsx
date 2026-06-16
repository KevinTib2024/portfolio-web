import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Tech from "./components/sections/Tech";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}