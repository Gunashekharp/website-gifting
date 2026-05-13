import Link from "next/link";
import Image from "next/image";
import {
  type Product,
  products,
  testimonials,
} from "@/lib/products";
import Reveal from "@/components/Reveal";
import ParallaxHero from "@/components/ParallaxHero";
import ScrollRow from "@/components/ScrollRow";
import OccasionTabs from "@/components/OccasionTabs";

/* ------------------------------------------------------------------ */
/*  Hero (compact)                                                     */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-dark-950 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.05) 0%, transparent 60%)",
        }}
      />

      <ParallaxHero>
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] animate-shimmer hero-heading-entrance">
            Where Every Gift
            <br />
            Tells a Story
          </h1>

          <p className="mt-6 text-base md:text-lg text-gold-300/60 font-light tracking-wide max-w-lg mx-auto leading-relaxed animate-fade-in-up delay-200 font-body">
            Handcrafted hampers & personalized gifts
            <br className="hidden sm:block" />
            curated with intention, delivered with love.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link
              href="/build-your-own"
              className="btn-premium rounded-none px-12 py-4 text-sm uppercase tracking-[0.15em] font-body"
            >
              Build Your Own
            </Link>
            <Link
              href="/shop"
              className="btn-outline border border-gold-500/40 text-gold-300 rounded-none px-12 py-4 text-sm uppercase tracking-[0.15em] hover:bg-gold-500/10 font-body"
            >
              Shop Collection
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 animate-fade-in delay-500">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-3.5 w-3.5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gold-300/50 font-body tracking-wide">
              5.0 Rated &middot; 226+ Reviews on Google
            </span>
          </div>
        </div>
      </ParallaxHero>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Compact Product Card (for scroll rows)                             */
/* ------------------------------------------------------------------ */
function ScrollCard({ product }: { product: Product }) {
  const hasDiscount = product.originalPrice != null && product.originalPrice > product.price;

  const discount = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className="flex-shrink-0 w-[220px] sm:w-[260px] snap-start group">
      <div className="bg-white border border-neutral-200 shadow-sm hover:shadow-lg hover:border-gold-500/30 transition-all duration-300 overflow-hidden">
        <Link href={`/product/${product.id}`} className="block">
          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover img-zoom"
              sizes="260px"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.12em] bg-dark-950 text-gold-300 px-3 py-1.5 font-body font-medium">
                {product.badge}
              </span>
            )}
            {hasDiscount && (
              <span className="absolute top-3 right-3 text-[10px] font-bold bg-red-600 text-white px-2 py-1 font-body">
                {discount}% OFF
              </span>
            )}
            <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/10 transition-colors duration-300" />
          </div>
        </Link>

        <div className="p-4">
          <Link href={`/product/${product.id}`}>
            <h3 className="font-heading text-lg font-semibold text-neutral-900 leading-snug group-hover:text-gold-700 transition-colors duration-200 line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-lg font-bold font-body text-neutral-900">
              &#8377;{product.price.toLocaleString("en-IN")}
            </span>
            {hasDiscount && (
              <span className="text-xs text-neutral-400 line-through font-body">
                &#8377;{product.originalPrice!.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <button
            type="button"
            className="mt-4 w-full py-2.5 bg-dark-950 text-gold-300 text-[11px] uppercase tracking-[0.15em] font-body font-semibold hover:bg-gold-700 hover:text-white transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Editorial Feature — premium dark showcase                          */
/* ------------------------------------------------------------------ */
function EditorialFeature() {
  const featured = products[2]; // Anniversary Rose Garden — Premium
  const picks = [products[0], products[4], products[5]]; // Bloom Trunk, Movie Night, Rakhi

  return (
    <section className="bg-dark-950 py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label text-gold-500/60 font-body">Handpicked</span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-gold-300">
              Editor&apos;s Pick
            </h2>
            <div className="mt-4 mx-auto h-px w-12 bg-gold-500/30" />
          </div>
        </Reveal>

        {/* Hero feature — large card */}
        <Reveal>
          <Link href={`/product/${featured.id}`} className="group block relative mb-8">
            <div className="relative aspect-[21/9] sm:aspect-[21/8] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover img-zoom"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 sm:px-12 max-w-lg">
                  {featured.badge && (
                    <span className="inline-block text-[9px] uppercase tracking-[0.2em] text-dark-950 bg-gold-500 px-3 py-1 mb-4 font-body font-semibold">
                      {featured.badge}
                    </span>
                  )}
                  <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                    {featured.name}
                  </h3>
                  <p className="mt-3 text-sm text-gold-300/50 font-body leading-relaxed hidden sm:block">
                    {featured.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-heading text-gold-300">
                      &#8377;{featured.price.toLocaleString("en-IN")}
                    </span>
                    {featured.originalPrice && (
                      <span className="text-sm text-gold-300/30 line-through font-body">
                        &#8377;{featured.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-2 mt-5 text-[11px] uppercase tracking-[0.15em] text-gold-500 font-body font-semibold group-hover:text-gold-300 transition-colors duration-300">
                    Shop Now
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* 3 smaller picks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {picks.map((product, i) => (
            <Reveal key={product.id} delay={(i + 1) * 80}>
              <Link href={`/product/${product.id}`} className="group block relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {product.badge && (
                      <span className="inline-block text-[8px] uppercase tracking-[0.2em] text-dark-950 bg-gold-500 px-2.5 py-0.5 mb-3 font-body font-semibold">
                        {product.badge}
                      </span>
                    )}
                    <h3 className="font-heading text-xl sm:text-2xl text-white leading-tight">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-lg font-heading text-gold-300">
                        &#8377;{product.price.toLocaleString("en-IN")}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gold-300/30 line-through font-body">
                          &#8377;{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Recipient Tiles                                                    */
/* ------------------------------------------------------------------ */
const recipientTiles = [
  { id: "for-him", label: "For Him", image: "/products/movie-night-trunk.jpg" },
  { id: "for-her", label: "For Her", image: "/products/birthday-surprise-box.jpg" },
  { id: "for-kids", label: "For Kids", image: "/products/mermaid-custom-box.jpg" },
  { id: "for-couples", label: "For Couples", image: "/products/love-garden-tray.jpg" },
];

function RecipientTiles() {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="section-label text-gold-500 font-body">Curated For</span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-neutral-900">
              Shop by Recipient
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {recipientTiles.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 60}>
              <Link
                href={`/shop?recipient=${tile.id}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={tile.image}
                  alt={tile.label}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-[#080808]/20 to-transparent group-hover:from-[#080808]/60 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-wide">
                    {tile.label}
                  </span>
                  <span className="block mt-1 text-[10px] uppercase tracking-[0.15em] text-gold-300/70 font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Build Your Own CTA (compact)                                       */
/* ------------------------------------------------------------------ */
function BuildYourOwnCTA() {
  return (
    <section className="relative bg-dark-950 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-24 text-center z-10">
        <Reveal>
          <span className="section-label text-gold-500/60 font-body">
            Customize
          </span>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-300 leading-tight">
            Create Something
            <br />
            Truly Personal
          </h2>

          <div className="mt-5 mx-auto h-px w-16 bg-gold-500/30" />

          <p className="mt-6 text-gold-300/50 font-body leading-relaxed max-w-lg mx-auto text-sm">
            Handpick every item. Choose your box. Add your message.
            We&rsquo;ll wrap it with love and deliver it to their doorstep.
          </p>

          <Link
            href="/build-your-own"
            className="mt-10 btn-premium inline-block px-14 py-4 text-sm uppercase tracking-[0.15em] font-body"
          >
            Start Building
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center mb-14">
            <span className="section-label text-gold-500 font-body">Testimonials</span>
            <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-neutral-900">
              What Our Customers Say
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-gold-500" />
                ))}
              </div>
              <span className="text-lg font-bold font-body text-neutral-900">5.0</span>
              <span className="text-sm text-neutral-500 font-body">from 226+ reviews on Google</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <div className="relative flex flex-col p-7 bg-white border border-neutral-200 shadow-sm transition-all duration-300 ease-out hover:border-gold-500/30 hover:shadow-md h-full">
                <svg className="w-8 h-8 text-gold-500/20 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>

                <blockquote className="flex-1 text-neutral-600 font-body text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-dark-950 text-gold-300 font-heading text-sm font-semibold flex items-center justify-center shrink-0">
                      {getInitials(testimonial.name)}
                    </span>
                    <div>
                      <span className="text-sm text-neutral-900 font-semibold font-body block">
                        {testimonial.name}
                      </span>
                      <span className="text-xs text-neutral-400 font-body">Verified Buyer</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <StarIcon key={i} className="h-3 w-3 text-gold-500" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Trust Bar                                                          */
/* ------------------------------------------------------------------ */
function TrustBar() {
  const trustItems = [
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "Handcrafted",
      description: "Every hamper assembled by hand",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: "Free Delivery",
      description: "Orders above ₹2,000",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      ),
      title: "226+ Happy Customers",
      description: "5.0 rated on Google",
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Secure Checkout",
      description: "SSL-encrypted payments",
    },
  ];

  return (
    <section className="bg-dark-950 py-14 sm:py-16 border-t border-dark-800/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3">
              <span className="text-gold-500">{item.icon}</span>
              <span className="font-heading text-lg text-gold-300 tracking-wide font-semibold">
                {item.title}
              </span>
              <span className="text-xs text-gold-300/50 font-body">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Product Row Sections                                               */
/* ------------------------------------------------------------------ */
const trendingProducts = products.filter((p) => p.badge);
const premiumProducts = [...products].sort((a, b) => b.price - a.price).slice(0, 6);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OccasionTabs />

      <ScrollRow label="Trending" title="Trending Now" viewAllHref="/shop">
        {trendingProducts.map((p) => (
          <ScrollCard key={p.id} product={p} />
        ))}
      </ScrollRow>

      <EditorialFeature />

      <RecipientTiles />

      <ScrollRow label="Luxury" title="Premium Collection" viewAllHref="/shop">
        {premiumProducts.map((p) => (
          <ScrollCard key={p.id} product={p} />
        ))}
      </ScrollRow>

      <BuildYourOwnCTA />
      <TestimonialsSection />
      <TrustBar />
    </>
  );
}
