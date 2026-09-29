import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'picture', label: 'Picture' },
  { id: 'sound', label: 'Sound' },
];

// A five-card rhythm: one wide frame, then two staggered pairs. Repeats down the page.
const RHYTHM = ['wide', 'major', 'minor', 'minor', 'major'];

export default function SelectedWork() {
  const [filter, setFilter] = useState('all');
  const list = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => filter === 'all' || project.roles.includes(filter));

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <header className="work__head">
        <h2 id="work-title" className="work__title">
          Selected work
        </h2>
        <div className="filters" role="group" aria-label="Filter work">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className="filters__btn"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <div className="work__grid" key={filter}>
        {list.map(({ project, index }, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            seed={index}
            variant={RHYTHM[i % RHYTHM.length]}
          />
        ))}
      </div>
    </section>
  );
}
