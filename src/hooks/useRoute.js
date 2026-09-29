import { useEffect, useState } from 'react';

// Tiny hash router, so the site works on any static host with no server setup.
//   #/                 home
//   #/work  #/about  #/contact   home, scrolled to that section
//   #/work/<slug>      a project page
const SECTIONS = ['work', 'about', 'contact'];

function parse() {
  const parts = window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'work' && parts[1]) {
    return { name: 'project', slug: decodeURIComponent(parts[1]), section: null };
  }
  return { name: 'home', slug: null, section: SECTIONS.includes(parts[0]) ? parts[0] : null };
}

export function useRoute() {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const on = () => setRoute(parse());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}
