"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxHeroProps {
  children: ReactNode;
}

export default function ParallaxHero({ children }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const y = window.scrollY;
            ref.current.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
