import { useEffect } from 'react';
import Player from './Player.jsx';
import MediaFrame from './MediaFrame.jsx';
import { projects, isSoundOnly, roleLabel } from '../data/projects.js';

export default function ProjectPage({ slug }) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <section className="project project--missing">
        <p>That project isn’t here.</p>
        <a href="#/work">Back to work</a>
      </section>
    );
  }

  const soundOnly = isSoundOnly(project);

  return (
    <article className="project">
      <a className="project__back" href="#/work">
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        Work
      </a>

      <header className="project__head">
        <p className="project__role">{roleLabel(project.roles)}</p>
        <h1 className="project__title">{project.title}</h1>
        {project.subtitle && <p className="project__subtitle">{project.subtitle}</p>}
      </header>

      <div className="project__player">
        <Player
          src={project.film}
          poster={project.media.poster}
          embed={project.embed}
          seed={index}
          soundOnly={soundOnly}
          title={project.title}
        />
      </div>

      <div className="project__body">
        <p className="project__desc">{project.description}</p>

        {project.credits?.length > 0 && (
          <dl className="project__credits">
            {project.credits.map((c) => (
              <div key={c.role}>
                <dt>{c.role}</dt>
                <dd>{c.name}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.result && (
          <p className="project__result">
            <strong>{project.result.value}</strong>
            <span>{project.result.label}</span>
          </p>
        )}
      </div>

      {project.stills?.length > 0 && (
        <div className="project__stills">
          {project.stills.map((s, i) => (
            <div key={i} className="project__still" style={{ aspectRatio: s.ratio || '16/9' }}>
              <img src={s.src} alt={s.alt || ''} loading="lazy" />
            </div>
          ))}
        </div>
      )}

      <a className="project__next" href={`#/work/${next.slug}`}>
        <span>Next</span>
        <strong>{next.title}</strong>
        <MediaFrame media={next.media} seed={(index + 1) % projects.length} soundOnly={isSoundOnly(next)} alt="" />
      </a>
    </article>
  );
}
