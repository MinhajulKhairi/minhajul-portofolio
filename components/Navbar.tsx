"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#07090d]/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:py-7">
        {/* Logo */}
        <a
          href="#overview"
          className="font-mono text-xl font-medium tracking-tight text-white transition duration-300 hover:text-cyan-200"
        >
          <span className="text-cyan-300">MYK</span>
          <span className="text-white/40"> / portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 xl:flex">
          {[
            ["about", "About"],
            ["experience", "Experience"],
            ["skills", "Skills"],
            ["projects", "Projects"],
            ["certification", "Certification"],
            ["events", "Events"],
            ["education", "Education"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="group relative py-2 text-[18px] font-medium tracking-[-0.01em] text-white/75 transition duration-300 hover:text-white"
            >
              {label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CV */}
        <a
          href="/Minhajul_Yusri_Khairi-CV.pdf"
          download
          className="rounded-full border border-white/15 bg-white/[.06] px-6 py-3 text-[17px] font-medium text-white/85 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}