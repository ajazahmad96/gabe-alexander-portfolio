import { useEffect, useRef } from 'react';
import Player from './Player.jsx';
import { site } from '../data/site.js';

export default function ReelDialog({ open, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return undefined;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="reel"
      aria-label="Showreel"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="reel__bar">
        <span>Showreel</span>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
      {open && (
        <Player
          src={site.reel.src}
          poster={site.reel.poster}
          embed={site.reel.embed}
          seed={3}
          title="Showreel"
        />
      )}
    </dialog>
  );
}
