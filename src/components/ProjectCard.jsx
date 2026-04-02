export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-thumb" style={{ background: project.thumb }}>
        {project.icon}
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.short}</p>
      </div>
    </div>
  );
}