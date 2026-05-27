import React from 'react';

const NAV_LINKS = ['About', 'Memories', 'Activities', 'Meals', 'Accommodation', 'Testimonials', 'Contact'];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-[8%] py-8">
      <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
        <img src="/logo.png" alt="Jungle Beach Camp" className="h-12 w-auto object-contain drop-shadow-md rounded-full" />
      </a>
      
      <div className="hidden lg:flex gap-8 items-center">
        {NAV_LINKS.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-white/80 text-sm hover:text-white transition-colors">
            {link}
          </a>
        ))}
      </div>

      <button className="lg:hidden flex flex-col gap-1.5 p-2">
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
      </button>
    </nav>
  );
}
