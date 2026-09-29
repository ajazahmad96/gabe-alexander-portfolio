import { useEffect, useState } from 'react';
import { site } from '../data/site.js';

const LINKS = [
  { href: '#/work', label: 'Work' },
  { href: '#/about', label: 'About' },
  { href: '#/contact', label: 'Contact' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [typeof window !== 'undefined' ? window.location.hash : '']);

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <a className="nav__mark" href="#/">
        {site.name}
      </a>
      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
      {open && (
        <div className="nav__sheet">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
