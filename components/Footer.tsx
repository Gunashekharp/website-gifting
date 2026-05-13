import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/build-your-own", label: "Build Your Own" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  { href: "/shop?occasion=birthday", label: "Birthday" },
  { href: "/shop?occasion=anniversary", label: "Anniversary" },
  { href: "/shop?occasion=festival", label: "Festival" },
  { href: "/shop?occasion=thank-you", label: "Thank You" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-950">
      {/* Newsletter section */}
      <div className="border-b border-dark-800/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="max-w-xl mx-auto text-center">
            <span className="section-label text-gold-500/60 font-body">
              Newsletter
            </span>
            <h3 className="mt-4 font-heading text-3xl sm:text-4xl text-gold-300">
              Stay in the Loop
            </h3>
            <p className="mt-4 text-sm text-gold-300/40 font-body leading-relaxed">
              Curated gifting ideas, new arrivals, and exclusive offers
              delivered to your inbox.
            </p>
            <form action="#" className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 bg-dark-900 border border-dark-800 px-5 py-3.5 text-sm text-gold-100 placeholder:text-neutral-600 outline-none transition-all duration-300 focus:border-gold-500/50 font-body"
              />
              <button
                type="submit"
                className="btn-premium px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-body font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="D'CreativEdge Gifting Solutions"
                width={400}
                height={215}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 font-heading italic text-gold-500/70 text-lg">
              The gift that feels like you
            </p>
            <p className="mt-3 text-xs leading-relaxed text-gold-300/30 font-body">
              Luxury custom gift hampers crafted with love and attention to
              detail. Handcrafted in Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-500/70 mb-6 font-body font-medium">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gold-300/40 hover:text-gold-300 transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-500/70 mb-6 font-body font-medium">
              Occasions
            </h3>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gold-300/40 hover:text-gold-300 transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-500/70 mb-6 font-body font-medium">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-gold-300/40 font-body">
              <p>hello@dcreativedge.in</p>
              <p>+91 95038 18666</p>
              <p>Koramangala, Bangalore</p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gold-300/30 hover:text-gold-500 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gold-300/30 hover:text-gold-500 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gold-300/30 hover:text-gold-500 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-800/30 mt-16 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-gold-300/20 text-xs tracking-wide font-body">
            &copy; {new Date().getFullYear()} D&apos;CreativEdge Gifting Solutions
          </p>
          <div className="flex items-center gap-6 text-xs text-gold-300/20 font-body">
            <Link href="/privacy" className="hover:text-gold-300/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold-300/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
