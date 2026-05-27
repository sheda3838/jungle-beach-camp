import React from 'react';
import { ReactLenis } from 'lenis/react';
import Hero          from './components/Hero';
import Navbar        from './components/Navbar';
import About         from './components/About';
import Activities    from './components/Activities';
import Memories      from './components/Gallery';
import Meals         from './components/Meals';
import Accommodation from './components/Accommodation';
import Testimonials  from './components/Testimonials';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CinematicTransition from './components/common/CinematicTransition';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="relative w-full bg-[#050a05]">
      
      {/* Navbar sits at the root to avoid being covered by sliding cards */}
      <Navbar />

      {/* 
        Sequential z-indexing ensures the newer sections naturally overlay 
        the previous sections in the DOM flow without needing complex hacks.
      */}
      <CinematicTransition zIndex={1}>
        <Hero />
      </CinematicTransition>

      <CinematicTransition zIndex={2}>
        <About />
      </CinematicTransition>

      <CinematicTransition zIndex={3}>
        <Activities />
      </CinematicTransition>

      <CinematicTransition zIndex={4}>
        <Memories />
      </CinematicTransition>

      <CinematicTransition zIndex={5}>
        <Meals />
      </CinematicTransition>

      <CinematicTransition zIndex={6}>
        <Accommodation />
      </CinematicTransition>

      <CinematicTransition zIndex={7}>
        <Testimonials />
      </CinematicTransition>

      <CinematicTransition zIndex={8}>
        <Contact />
      </CinematicTransition>

      {/* Footer stays in normal flow to close out the page normally */}
      <div className="relative z-[9] bg-black">
        <Footer />
      </div>

      <div className="relative z-50">
        <FloatingWhatsApp />
      </div>

    </div>
    </ReactLenis>
  );
}
