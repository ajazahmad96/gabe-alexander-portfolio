import { useEffect, useRef } from 'react';
import MediaFrame from './MediaFrame.jsx';
import { site } from '../data/site.js';
import { useMedia } from '../hooks/useMedia.js';

const pad = (n) => String(n).padStart(2, '0');

export default function HeroReel({ onOpenReel }) {
  const tcRef = useRef(null);
  const reduced = useMedia('(prefers-reduced-motion: reduce)');

  // Quiet detail: a running 24 fps timecode, like the counter on an edit timeline.
  useEffect(() => {
    if (reduced) return undefined;
    let raf = 0;
    let last = '';
    const t0 = performance.now();
    const tick = (now) => {
      const f = Math.floor(((now - t0) / 1000) * 24);
      const text = `${pad(Math.floor(f / 86400))}:${pad(Math.floor(f / 1440) % 60)}:${pad(
        Math.floor(f / 24) % 60
      )}:${pad(f % 24)}`;
      if (text !== last && tcRef.current) {
        tcRef.current.textContent = text;
        last = text;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <section className="hero" aria-label="Showreel">
      <div className="hero__frame">
        <MediaFrame media={site.heroLoop} seed={3} mode="inview" eager alt="Showreel preview" />
      </div>

      <div className="hero__ui">
        <h1 className="hero__name">
          <span>Gabe</span> <span>Alexander</span>
        </h1>
        <div className="hero__row">
          <p className="hero__role">{site.role}</p>
          <div className="hero__actions">
            <button type="button" className="reel-btn" onClick={onOpenReel}>
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
              </svg>
              Play reel
            </button>
            <span className="hero__tc" ref={tcRef} aria-hidden="true">
              00:00:00:00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
