import { useEffect, useRef, useState } from 'react';
import { useMedia } from '../hooks/useMedia.js';

// A small custom cursor that picks up a "View" / "Play" label from data-cursor
// on whatever it's hovering. Skipped entirely on touch devices.
export default function Cursor() {
  const ref = useRef(null);
  const [label, setLabel] = useState('');
  const [on, setOn] = useState(false);
  const noHover = useMedia('(hover: none)');

  useEffect(() => {
    if (noHover) return undefined;
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      const el = e.target.closest?.('[data-cursor]');
      setLabel(el ? el.getAttribute('data-cursor') : '');
    };
    const enter = () => setOn(true);
    const leave = () => setOn(false);
    window.addEventListener('mousemove', move);
    document.documentElement.addEventListener('mouseenter', enter);
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseenter', enter);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, [noHover]);

  if (noHover) return null;
  return (
    <div ref={ref} className={`cursor ${on ? 'cursor--on' : ''} ${label ? 'cursor--label' : ''}`} aria-hidden="true">
      {label && <span>{label}</span>}
    </div>
  );
}
