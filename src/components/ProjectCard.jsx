import { useState } from 'react';
import MediaFrame from './MediaFrame.jsx';
import { isSoundOnly, roleLabel } from '../data/projects.js';

export default function ProjectCard({ project, seed, variant }) {
  const [active, setActive] = useState(false);
  return (
    <a
      className={`card card--${variant}`}
      href={`#/work/${project.slug}`}
      data-cursor="View"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <div className="card__frame">
        <MediaFrame
          media={project.media}
          seed={seed}
          soundOnly={isSoundOnly(project)}
          active={active}
          alt={`${project.title} ${project.subtitle}`.trim()}
        />
        <h3 className="card__title">
          <span>{project.title}</span>
        </h3>
      </div>
      <p className="card__meta">
        {project.subtitle && <span>{project.subtitle}</span>}
        <span className="card__role">{roleLabel(project.roles)}</span>
      </p>
    </a>
  );
}
