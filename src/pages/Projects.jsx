import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";
import "../styles/Projects.css";

export default function Projects() {
  useFadeIn();
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="fade-in">
          <p className="section-label">Selected Work</p>
          <h2 className="section-heading">Projects that ship.</h2>
          <p className="section-sub">
            Real problems, real APIs, real deployments — not just side experiments.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelected}
              delay={i * 80}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}