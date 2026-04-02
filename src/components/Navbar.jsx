import { useState, useEffect } from "react";

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo" onClick={() => scrollTo("home")}>
        Roopa<span>.</span>
      </div>

      <ul className="nav-links">
        {["home","projects","resume","contact"].map(id => (
          <li key={id}>
            <a onClick={() => scrollTo(id)}
              style={{ color: active === id ? "var(--sage)" : "" }}>
              {id}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-cta" onClick={() => scrollTo("contact")}>
        Let's Talk →
      </button>
    </nav>
  );
}