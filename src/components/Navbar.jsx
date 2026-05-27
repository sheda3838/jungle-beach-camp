import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Memories", href: "#memories" },
  { label: "Meals", href: "#meals" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  /* ── Scroll shadow + active section tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Find which section is in view
      const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        // For sticky stacking cards, the top bounding rect stays at 0 once active.
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close drawer on resize to desktop ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Prevent body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = (href) => {
    setOpen(false);
    // Smooth scroll
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop / Mobile top bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[6%] transition-all duration-300 ${
          scrolled
            ? "bg-[#050a05]/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)] py-3"
            : "py-7"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#hero");
          }}
          className="flex items-center hover:opacity-90 transition-opacity shrink-0"
        >
          <img
            src="/logo.png"
            alt="Jungle Beach Camp"
            className={`w-auto object-contain drop-shadow-md rounded-xl transition-all duration-300 ${
              scrolled ? "h-8" : "h-14"
            }`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-7 items-center">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(href);
                }}
                className={`font-sans text-[13px] font-medium transition-colors duration-200 relative group ${
                  isActive ? "text-[#f0a850]" : "text-white/70 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#f0a850] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Hamburger button (mobile) */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg transition-colors hover:bg-white/5"
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-[#050a05]/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-down drawer */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-[#060e07] border-b border-white/[0.06] shadow-2xl transition-transform duration-300 ease-out lg:hidden pt-24 pb-8 px-8 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(href);
                }}
                className={`font-sans text-[15px] font-medium py-3 border-b border-white/[0.05] transition-colors duration-200 ${
                  isActive ? "text-[#f0a850]" : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
