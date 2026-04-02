import "../styles/SkillCard.css";

export default function SkillCard({ Icon, cat, skills, delay = 0 }) {
  return (
    <div className="skill-card fade-in" style={{ transitionDelay: `${delay}ms` }}>
      <div className="skill-card__header">
        <Icon size={20} strokeWidth={1.75} className="skill-card__icon" />
        <span className="skill-card__cat">{cat}</span>
      </div>
      <div className="skill-card__tags">
        {skills.map((s) => (
          <span className="skill-card__tag" key={s}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}