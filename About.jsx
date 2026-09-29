import MediaFrame from './MediaFrame.jsx';
import { site } from '../data/site.js';

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__portrait">
        <MediaFrame
          media={{ poster: site.about.portrait }}
          seed={5}
          alt={`Portrait of ${site.name}`}
        />
      </div>
      <div className="about__text">
        <h2 id="about-title" className="about__line">
          {site.about.line}
        </h2>
        <p>{site.about.intro}</p>
      </div>
    </section>
  );
}
