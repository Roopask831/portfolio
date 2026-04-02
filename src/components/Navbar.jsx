import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const NAV_ITEMS = ["home", "about", "projects", "resume", "contact"];

export default function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo" onClick={() => scrollTo("home")}>
        Roopa<span>.</span>
      </div>

      <ul className="navbar__links nav-links">
        {NAV_ITEMS.map((id) => (
          <li key={id}>
            <a
              onClick={() => scrollTo(id)}
              className={active === id ? "navbar__link--active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button className="nav-cta navbar__cta" onClick={() => scrollTo("contact")}>
        Let's Talk &rarr;
      </button>
    </nav>
  );
}