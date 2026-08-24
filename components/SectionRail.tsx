"use client";

import { useEffect, useState } from "react";

const sections = [
  "about",
  "experience",
  "skills",
  "projects",
  "certification",
  "events",
  "education",
  "contact",
];

export default function SectionRail() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-7 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      {sections.map((id, index) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          className="group flex items-center justify-end gap-3"
        >
          <span
            className={`text-[10px] font-mono uppercase tracking-widest transition ${
              active === id
                ? "text-white opacity-100"
                : "text-white/0 group-hover:text-white/40"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className={`h-1.5 rounded-full transition-all ${
              active === id
                ? "w-7 bg-cyan-300"
                : "w-1.5 bg-white/20 group-hover:bg-white/50"
            }`}
          />
        </a>
      ))}
    </div>
  );
}