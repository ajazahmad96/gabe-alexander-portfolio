import { site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {site.name}
      </span>
      <div className="footer__socials">
        {site.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
