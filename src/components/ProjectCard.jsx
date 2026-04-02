// Remove Github from the import
import { ExternalLink, GitBranch } from "lucide-react";
import "../styles/ProjectCard.css";

export default function ProjectCard({ project, onSelect, delay = 0 }) {
  const { title, thumb, short, tags, github, live } = project;

  return (
    <div
      className="project-card fade-in"
      style={{ transitionDelay: `${delay}ms` }}
      onClick={() => onSelect(project)}
    >
      <div className="project-card__thumb" style={{ background: thumb }}>
        <div className="project-card__thumb-overlay" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{short}</p>
        <div className="project-card__tags">
          {tags.slice(0, 4).map((t) => (
            <span className="project-card__tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <button className="link-btn link-btn--primary">View Details</button>

        {live && (
          <a
            className="link-btn"
            href={live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={13} />
            Live
          </a>
        )}

        <a
          className="link-btn"
  href={github}
  target="_blank"
  rel="noreferrer"
  onClick={(e) => e.stopPropagation()}
>
  <GitBranch size={13} />
  GitHub
</a>
      </div>
    </div>
  );
}