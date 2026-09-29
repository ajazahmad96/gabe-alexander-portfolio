import { useEffect, useMemo, useRef } from 'react';
import { site } from '../data/site.js';
import { useInView } from '../hooks/useInView.js';
import { useMedia } from '../hooks/useMedia.js';

const HUES = [205, 32, 168, 14, 225, 46, 350, 110];

// Deterministic pseudo-random numbers so the placeholder waveform never jumps around.
function mulberry32(a) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Placeholder({ seed, soundOnly }) {
  const bars = useMemo(() => {
    if (!soundOnly) return [];
    const rand = mulberry32(seed * 977 + 13);
    return Array.from({ length: 64 }, (_, i) => {
      const envelope = 0.35 + 0.65 * Math.sin((i / 63) * Math.PI);
      return Math.max(6, Math.round((0.15 + rand() * 0.85) * envelope * 70));
    });
  }, [seed, soundOnly]);

  return (
    <div className="ph" style={{ '--h': HUES[seed % HUES.length] }}>
      {soundOnly && (
        <div className="ph__wave" aria-hidden="true">
          {bars.map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
      )}
      {site.showPlaceholderLabels && <span className="ph__badge">Placeholder</span>}
    </div>
  );
}

/**
 * The one place media is drawn: a looping preview video, a still image, or a placeholder.
 * - Videos are not requested until the frame is near the viewport.
 * - mode="hover"  : plays while `active` is true (or while in view on touch screens)
 * - mode="inview" : plays while at least half the frame is visible
 */
export default function MediaFrame({
  media = {},
  seed = 0,
  soundOnly = false,
  active = false,
  mode = 'hover',
  eager = false,
  className = '',
  alt = '',
}) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const near = useInView(wrapRef, { rootMargin: '300px', once: true });
  const visible = useInView(wrapRef, { threshold: 0.5 });
  const noHover = useMedia('(hover: none)');
  const reduced = useMedia('(prefers-reduced-motion: reduce)');

  const hasVideo = Boolean(media.src);
  const load = eager || near;
  const shouldPlay =
    hasVideo && !reduced && (mode === 'inview' ? visible : noHover ? visible : active);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (shouldPlay) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    } else {
      v.pause();
    }
  }, [shouldPlay, load]);

  return (
    <div ref={wrapRef} className={`media ${className}`} role="img" aria-label={alt || 'Project frame'}>
      <div className="media__inner">
        {hasVideo ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload={load ? 'metadata' : 'none'}
            poster={media.poster || undefined}
            src={load ? media.src : undefined}
          />
        ) : media.poster ? (
          <img src={media.poster} alt="" loading={eager ? 'eager' : 'lazy'} decoding="async" />
        ) : (
          <Placeholder seed={seed} soundOnly={soundOnly} />
        )}
      </div>
    </div>
  );
}
