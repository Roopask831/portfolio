import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import useFadeIn from "./hooks/useFadeIn";

export default function App() {
  const [active, setActive] = useState("home");
  useFadeIn();

  useEffect(() => {
    const sections = ["home","about","skills","projects","resume","contact"];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { threshold: 0.4 });

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <Home setActive={setActive} />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}