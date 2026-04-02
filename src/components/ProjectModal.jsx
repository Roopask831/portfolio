import { X, ExternalLink, GitBranch } from "lucide-react";
import "../styles/ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const {
    title, thumb, tags, overview, problem,
    implementation, features, tech, github, live,
  } = project;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        {/* Header */}
        <div className="modal__header">
          <div className="modal__thumb" style={{ background: thumb }} />
          <div className="modal__meta">
            <h2 className="modal__title">{title}</h2>
            <div className="modal__tags">
              {tags.map((t) => (
                <span className="modal__tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="modal__body">
          <Section label="Overview" text={overview} />
          <Section label="The Problem" text={problem} />
          <Section label="Technical Implementation" text={implementation} />

          <p className="modal__section-title">Key Features</p>
          <ul className="modal__features">
            {features.map((f) => <li key={f}>{f}</li>)}
          </ul>

          <p className="modal__section-title">Technologies Used</p>
          <div className="modal__tags" style={{ marginTop: 6 }}>
            {tech.map((t) => <span className="modal__tag" key={t}>{t}</span>)}
          </div>

          <div className="modal__actions">
            {live && (
              <a className="btn-primary" href={live} target="_blank" rel="noreferrer">
                <ExternalLink size={15} /> Live Project
              </a>
            )}
          <a className="btn-outline" href={github} target="_blank" rel="noreferrer">
  <GitBranch size={15} /> GitHub
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ label, text }) {
  return (
    <>
      <p className="modal__section-title">{label}</p>
      <p className="modal__text">{text}</p>
    </>
  );
}