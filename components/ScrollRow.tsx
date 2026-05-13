"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import Link from "next/link";

interface ScrollRowProps {
  label: string;
  title: string;
  viewAllHref: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollRow({ label, title, viewAllHref, children, className }: ScrollRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className={`py-16 sm:py-24 ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="section-label text-gold-500 font-body">{label}</span>
            <h2 className="mt-1.5 font-heading text-3xl sm:text-4xl font-bold text-neutral-900">
              {title}
            </h2>
          </div>
          <Link
            href={viewAllHref}
            className="hidden sm:flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold-700 hover:text-gold-500 transition-colors font-body font-medium"
          >
            View All
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Scroll container */}
        <div className="relative group/scroll">
          {/* Left arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 hidden md:flex w-10 h-10 items-center justify-center bg-white border border-neutral-200 shadow-md text-neutral-700 hover:text-gold-700 hover:border-gold-500/50 transition-all duration-300 ease-out opacity-0 group-hover/scroll:opacity-100"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 hidden md:flex w-10 h-10 items-center justify-center bg-white border border-neutral-200 shadow-md text-neutral-700 hover:text-gold-700 hover:border-gold-500/50 transition-all duration-300 ease-out opacity-0 group-hover/scroll:opacity-100"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2"
          >
            {children}
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href={viewAllHref}
            className="text-xs uppercase tracking-[0.2em] text-gold-700 font-body font-medium"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
