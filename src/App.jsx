import React from 'react';
import Hero          from './components/Hero';
import About         from './components/About';
import Activities    from './components/Activities';
import Memories      from './components/Gallery';
import Meals         from './components/Meals';
import Accommodation from './components/Accommodation';
import Testimonials  from './components/Testimonials';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Activities />
      <Memories />
      <Meals />
      <Accommodation />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
