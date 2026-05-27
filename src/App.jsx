import React from 'react';

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

      {/* Normal flow ending sections - they scroll up together to end the page naturally */}
      <div className="relative z-[7] bg-[#050a05] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <div className="relative z-50">
        <FloatingWhatsApp />
      </div>

    </div>
  );
}
