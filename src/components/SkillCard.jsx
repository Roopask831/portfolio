export default function SkillCard({ group }) {
  return (
    <div className="skill-card">
      <div className="skill-cat">
        {group.icon} {group.cat}
      </div>
      <div className="skill-tags">
        {group.skills.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}