"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/build-your-own", label: "Build Your Own" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header className="fixed top-0 w-full z-50">
        {/* ─── Announcement bar ─── */}
        <div className={`bg-[#080808] ticker-wrap border-b border-[#1A1A1A] transition-all duration-500 overflow-hidden ${scrolled ? "max-h-0 border-b-0" : "max-h-10"}`}>
          <div className="ticker-content">
            {[
              "Online Luxury Gifting Brand",
              "Free Shipping on Orders Above ₹2,000",
              "Handcrafted in Bangalore",
              "Same Day Delivery Available",
              "Online Luxury Gifting Brand",
              "Free Shipping on Orders Above ₹2,000",
              "Handcrafted in Bangalore",
              "Same Day Delivery Available",
            ].map((msg, i) => (
              <span
                key={i}
                className="inline-flex items-center text-[10px] tracking-[0.25em] uppercase font-body text-[#B8B8B8]/50 py-2"
              >
                <span className="mx-8">{msg}</span>
                <span className="text-[#D4AF37]/20">&#9670;</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── Main header ─── */}
        <div
          className={`bg-[#080808] transition-all duration-500 ${
            scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : ""
          }`}
        >
          {/* Logo row */}
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex items-center justify-between py-1.5">
              {/* Left: search (desktop) / hamburger (mobile) */}
              <div className="w-28 flex items-center">
                <button
                  aria-label="Search"
                  className="hidden md:flex p-2 text-[#B8B8B8]/40 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>

                <button
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="md:hidden p-2 text-[#B8B8B8]/40 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Center: Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="D'CreativEdge Gifting Solutions"
                  width={400}
                  height={215}
                  className="h-[80px] md:h-[100px] w-auto"
                  priority
                />
              </Link>

              {/* Right: account + cart */}
              <div className="w-28 flex items-center justify-end gap-5">
                <button
                  aria-label="Account"
                  className="hidden md:flex p-2 text-[#B8B8B8]/40 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </button>

                <Link
                  href="/cart"
                  aria-label="Shopping cart"
                  className="relative p-2 text-[#B8B8B8]/40 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                        1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0
                        0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576
                        0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0
                        .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375
                        0 0 1 .75 0Z"
                    />
                  </svg>
                  <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 items-center justify-center bg-[#D4AF37] text-[8px] font-bold text-[#080808] rounded-full">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ─── Desktop nav links ─── */}
          <div className="hidden md:block border-t border-[#1A1A1A]">
            <nav className="mx-auto max-w-7xl px-6 lg:px-12">
              <ul className="flex items-center justify-center gap-12 py-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`relative text-[11px] uppercase tracking-[0.3em] font-body font-medium transition-all duration-300 pb-1.5 ${
                          isActive
                            ? "text-[#D4AF37]"
                            : "text-[#B8B8B8]/40 hover:text-[#E5C06B]"
                        }`}
                      >
                        {link.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[1px] bg-[#D4AF37]" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-[1px] bg-[#1A1A1A]" />
      </header>

      {/* ─── Mobile full-screen overlay ─── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#080808]">
          <button
            aria-label="Close menu"
            onClick={closeMobile}
            className="absolute top-6 right-6 p-2 text-[#B8B8B8]/30 hover:text-[#D4AF37] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mb-14">
            <Image
              src="/logo.png"
              alt="D'CreativEdge"
              width={400}
              height={215}
              className="h-20 w-auto"
            />
          </div>

          <div className="w-8 h-[1px] bg-[#1A1A1A] mb-12" />

          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`text-[13px] uppercase tracking-[0.35em] font-body font-medium transition-colors duration-300 animate-fade-in-up ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-[#B8B8B8]/30 hover:text-[#E5C06B]"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-16 flex items-center gap-6">
            <Link
              href="/cart"
              onClick={closeMobile}
              className="flex items-center gap-2 text-[#B8B8B8]/25 hover:text-[#E5C06B] transition-colors duration-300 text-[10px] uppercase tracking-[0.25em] font-body"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                    1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0
                    0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576
                    0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0
                    .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375
                    0 0 1 .75 0Z"
                />
              </svg>
              Cart
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
