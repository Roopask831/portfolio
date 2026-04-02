import { useFadeIn } from "../hooks/useFadeIn";
import { projects } from "../data/projects";
import { MapPin, Phone, Mail, Link2, Printer } from "lucide-react";
import "../styles/Resume.css";

/* ── DATA ── */
const CONTACT = [
  { Icon: MapPin,  label: "Piscataway, NJ" },
  { Icon: Phone,   label: "732-433-6154",                   href: "tel:7324336154" },
  { Icon: Mail,    label: "kalledr1@montclair.edu",          href: "mailto:kalledr1@montclair.edu" },
  { Icon: Link2,   label: "linkedin.com/in/roopaskalled77",  href: "https://linkedin.com/in/roopaskalled77" },
];

const SKILLS = [
  { cat: "Languages",       items: ["C", "Java", "JavaScript", "SQL"] },
  { cat: "Frontend",        items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
  { cat: "Backend",         items: ["Node.js", "Express.js", "Spring Boot", "Microservices", "REST APIs"] },
  { cat: "Databases",       items: ["MySQL", "MongoDB", "Firebase"] },
  { cat: "Tools & Platforms", items: ["Git", "GitHub", "AWS", "Docker", "Kubernetes"] },
  { cat: "Other",           items: ["Chart.js", "Leaflet.js", "GeoTIFF.js", "Google Earth Engine"] },
];

const EDUCATION = [
  {
    school: "Montclair State University",
    degree: "Master of Science in Computer Science",
    date: "Expected May 2026",
    extra: "GPA: 3.7",
    courses: ["Computer Algorithms and Analysis", "Database Systems"],
  },
  {
    school: "KLE University, Karnataka, India",
    degree: "Bachelor of Computer Applications",
    date: "June 2021",
    extra: "GPA: 8.9 / 10",
    courses: [],
  },
];

const EXP_BULLETS = [
  "Built interactive UI using React.js for enterprise-scale applications, improving component reuse and developer velocity.",
  "Improved performance and responsiveness across devices through lazy loading, code splitting, and CSS optimization.",
  "Conducted debugging, unit testing, and integration testing to maintain code quality across release cycles.",
  "Participated in agile development cycles and contributed to continuous deployment pipelines.",
];

const PROJECT_BULLETS = {
  1: [
    "Processed DEM raster data to compute elevation, slope, and flow accumulation for flood vulnerability scoring.",
    "Integrated NASA POWER, NOAA, and Open-Meteo APIs for 48-hour real-time precipitation forecasting.",
    "Rendered interactive risk maps using Leaflet.js with color-coded vulnerability zones.",
  ],
  2: [
    "Built Firebase Authentication + Firestore sync for multi-device real-time expense tracking.",
    "Visualized spending trends and category breakdowns with Chart.js and triggered smart budget alerts.",
    "Exported financial data to Excel and shipped the app as an installable PWA with offline support.",
  ],
  3: [
    "Integrated LLaMA 3 via Groq API to semantically analyze resumes against job descriptions.",
    "Computed ATS keyword match scores and generated ranked, actionable improvement recommendations.",
    "Deployed a full React frontend on Vercel with side-by-side resume vs job description comparison.",
  ],
};

export default function Resume() {
  useFadeIn();

  return (
    <section id="resume" className="resume">
      <div className="container resume__wrap">
        <div className="fade-in">
          <p className="section-label">Resume</p>
          <h2 className="section-heading">Experience &amp; Education</h2>
        </div>

        <div className="r-card fade-in">
          {/* ── HEADER ── */}
          <div className="r-header">
            <div className="r-name">Roopa S Kalled</div>
            <div className="r-title-sub">Software Engineer &middot; Full-Stack &middot; AI Applications</div>
            <div className="r-contacts">
              {CONTACT.map(({ Icon, label, href }) =>
                href ? (
                  <a key={label} className="r-contact" href={href} target="_blank" rel="noreferrer">
                    <Icon size={13} /> {label}
                  </a>
                ) : (
                  <span key={label} className="r-contact">
                    <Icon size={13} /> {label}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="r-body">
            {/* ── SUMMARY ── */}
            <Section title="Summary">
              <p className="r-text">
                Computer Science graduate student with 2+ years of experience in full-stack development
                and React.js. Strong background in building scalable, responsive web applications and
                integrating APIs. Experienced in real-time data systems, database management, and
                modern web technologies.
              </p>
            </Section>

            {/* ── SKILLS ── */}
            <Section title="Skills">
              <div className="r-skills-grid">
                {SKILLS.map(({ cat, items }) => (
                  <div className="r-skill-group" key={cat}>
                    <h5 className="r-skill-cat">{cat}</h5>
                    <div className="r-skill-list">
                      {items.map((s) => (
                        <span className="r-skill-item" key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── EDUCATION ── */}
            <Section title="Education">
              {EDUCATION.map((edu) => (
                <div className="r-item" key={edu.school}>
                  <div className="r-item-header">
                    <div>
                      <div className="r-item-title">{edu.school}</div>
                      <div className="r-item-sub">{edu.degree} &middot; {edu.extra}</div>
                    </div>
                    <span className="r-item-date">{edu.date}</span>
                  </div>
                  {edu.courses.length > 0 && (
                    <p className="r-text" style={{ marginTop: 6 }}>
                      <strong style={{ fontWeight: 500 }}>Relevant Coursework:</strong>{" "}
                      {edu.courses.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </Section>

            {/* ── EXPERIENCE ── */}
            <Section title="Work Experience">
              <div className="r-item">
                <div className="r-item-header">
                  <div>
                    <div className="r-item-title">Junior Software Engineer — Cognizant Technology Solutions</div>
                    <div className="r-item-sub">Bangalore, India &middot; Full-time</div>
                  </div>
                  <span className="r-item-date">Apr 2022 – Jun 2024</span>
                </div>
                <ul className="r-bullets">
                  {EXP_BULLETS.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </Section>

            {/* ── PROJECTS ── */}
            <Section title="Projects">
              <div className="r-proj-grid">
                {projects.map((p) => (
                  <div className="r-proj-card" key={p.id}>
                    <div className="r-proj-header">
                      <h4 className="r-proj-title">{p.title}</h4>
                    </div>
                    <ul className="r-bullets r-bullets--compact">
                      {PROJECT_BULLETS[p.id].map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <div className="r-proj-tags">
                      {p.tags.map((t) => <span className="r-proj-tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>

        {/* Download row */}
        <div className="resume__dl-row">
          <button className="btn-primary" onClick={() => window.print()}>
            <Printer size={15} /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div className="r-section">
      <div className="r-section-head">{title}</div>
      {children}
    </div>
  );
}