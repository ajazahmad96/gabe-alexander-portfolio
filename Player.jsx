import { useState } from 'react';
import MediaFrame from './MediaFrame.jsx';

// Click-to-load player: nothing heavy loads until the visitor presses play.
export default function Player({ src = '', poster = '', embed = '', seed = 0, soundOnly = false, title = 'film' }) {
  const [started, setStarted] = useState(false);
  const playable = Boolean(embed || src);

  if (started && embed) {
    return (
      <div className="player">
        <iframe
          src={embed}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  if (started && src) {
    return (
      <div className="player">
        <video src={src} poster={poster || undefined} controls autoPlay playsInline />
      </div>
    );
  }
  return (
    <div className="player">
      <MediaFrame media={{ poster }} seed={seed} soundOnly={soundOnly} alt={title} />
      <button
        type="button"
        className="player__play"
        onClick={() => playable && setStarted(true)}
        aria-disabled={!playable}
        aria-label={playable ? `Play ${title}` : `${title}: video not added yet`}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
