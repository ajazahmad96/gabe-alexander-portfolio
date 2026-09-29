import { site } from '../data/site.js';

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__title">
        Have a project in mind?
        <br />
        Let’s talk.
      </h2>
      <a className="contact__email" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      <div className="contact__socials">
        {site.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
