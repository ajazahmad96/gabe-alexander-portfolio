import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import HeroReel from './components/HeroReel.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Cursor from './components/Cursor.jsx';
import ReelDialog from './components/ReelDialog.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import { useRoute } from './hooks/useRoute.js';

export default function App() {
  const route = useRoute();
  const [reelOpen, setReelOpen] = useState(false);

  // Jump to the right section when the hash points at #/work, #/about, #/contact.
  useEffect(() => {
    if (route.name !== 'home' || !route.section) return;
    const el = document.getElementById(route.section);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [route]);

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        {route.name === 'project' ? (
          <ProjectPage slug={route.slug} />
        ) : (
          <>
            <HeroReel onOpenReel={() => setReelOpen(true)} />
            <SelectedWork />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <ReelDialog open={reelOpen} onClose={() => setReelOpen(false)} />
    </>
  );
}
