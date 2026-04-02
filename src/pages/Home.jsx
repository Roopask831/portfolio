import { useFadeIn } from "../hooks/useFadeIn";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/skills";
import { ArrowRight, CircleDot } from "lucide-react";
import "../styles/Home.css";

export default function Home({ setActive }) {
  useFadeIn();

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection scrollTo={scrollTo} />
      <AboutSection />
      <SkillsSection />
    </>
  );
}

/* ─── HERO ─────────────────────────────────────────────── */
function HeroSection({ scrollTo }) {
  return (
    <section id="home" className="hero">
      <div className="hero__inner container">
        {/* Left: Text */}
        <div className="hero__text">
          <div className="hero__eyebrow">
            <CircleDot size={14} className="hero__dot" />
            <span className="hero__eyebrow-text">Available for opportunities</span>
          </div>

          <h1 className="hero__name">
            Roopa<br />
            <em>S Kalled</em>
          </h1>

          <p className="hero__subtitle">
            Software Engineer &middot; Full-Stack &middot; AI Systems
          </p>

          <p className="hero__desc">
            CS graduate student at Montclair State + 2 years at Cognizant building production
            systems. I design and engineer full-stack applications, geospatial tools, and
            AI-driven products — with a focus on real-world impact, clean APIs, and experiences
            users actually enjoy.
          </p>

          <div className="hero__buttons">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View Projects <ArrowRight size={15} />
            </button>
            <button className="btn-sage" onClick={() => scrollTo("resume")}>
              Download Resume
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </div>

          <div className="hero__stats">
            {[
              { num: "2+", label: "Years experience" },
              { num: "3",  label: "Live projects" },
              { num: "8+", label: "Technologies" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="hero__stat-num">{num}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero__visual">
          <div className="hero__ring">
            <div className="hero__avatar">RSK</div>
            <div className="hero__badge hero__badge--tl">
              <span className="hero__badge-icon">
                <CircleDot size={14} />
              </span>
              MS CS · GPA 3.7
            </div>
            <div className="hero__badge hero__badge--br">
              <span className="hero__badge-icon">
                <CircleDot size={14} />
              </span>
             2+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        {/* Left */}
        <div className="fade-in">
          <p className="section-label">About Me</p>
          <h2 className="section-heading">
            Engineer by training,<br />builder by instinct.
          </h2>
          <p className="section-sub">
            My path from CS classrooms to Cognizant production systems shaped how I think about
            software — pragmatically, with users and data at the center.
          </p>

          <div className="about__journey">
            {[
              { label: "Montclair State University",       sub: "M.S. Computer Science · Expected May 2026 · GPA 3.7" },
              { label: "Cognizant Technology Solutions",   sub: "Junior Software Engineer · Apr 2022 – Jun 2024" },
              { label: "Independent Projects",             sub: "Geospatial AI, full-stack finance apps, LLM-powered tools" },
            ].map(({ label, sub }, i) => (
              <div className="about__step" key={i}>
                <div className="about__step-dot">{i + 1}</div>
                <div>
                  <h4 className="about__step-title">{label}</h4>
                  <p className="about__step-sub">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: card */}
        <div className="about__card fade-in">
          <span className="about__tag">Career Focus</span>
          <h3 className="about__card-heading">What I love building</h3>
          <p className="about__card-body">
            I'm drawn to problems where data, geography, or intelligence can unlock something
            genuinely useful. Whether that's a geospatial flood prediction model, an AI that reads
            your resume better than you do, or a finance dashboard that actually makes sense — I
            care about the full stack: backend logic, API design, and a UI that doesn't make
            people think.
          </p>
          <div>
            <p className="about__focus-label">Targeting roles in</p>
            <div className="about__chips">
              {["Full-Stack Engineering", "Backend / APIs", "AI Applications", "Data Engineering", "Geospatial Tech"].map((c) => (
                <span className="about__chip" key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────── */
function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="fade-in skills__intro">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-heading">Built across the full stack</h2>
          <p className="section-sub" style={{ margin: "12px auto 0", textAlign: "center" }}>
            From browser to database to AI model — here's the toolkit.
          </p>
        </div>
        <div className="skills__grid">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.cat} {...g} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}