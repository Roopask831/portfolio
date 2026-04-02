import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={(e) =>
      e.target === e.currentTarget && onClose()
    }>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="modal-body">
          <h2>{project.title}</h2>
          <p>{project.overview}</p>
        </div>
      </div>
    </div>
  );
}