import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} onClick={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}