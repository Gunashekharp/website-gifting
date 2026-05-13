import Link from 'next/link'
import Reveal from '@/components/Reveal'

const VALUES = [
  {
    title: 'Handcrafted With Care',
    description:
      'Every hamper is assembled by hand with meticulous attention to detail. We believe the art of gifting deserves the same care as the finest craftsmanship.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Personal Touch',
    description:
      'No two gifts should be the same. From custom messages to curated selections, we help you create something as unique as the person receiving it.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Packaging',
    description:
      'We are committed to the planet. Our packaging uses recycled materials, biodegradable fillers, and reusable containers so every gift is kind to the earth.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m-3.414 1.068A9 9 0 013.888 15.903" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="bg-dark-950 py-24 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal delay={0}>
            <span className="section-label text-gold-500/60 font-body">
              Our Story
            </span>
            <h1 className="mt-4 font-heading text-5xl sm:text-6xl text-gold-300">
              About D&apos;CreativEdge
            </h1>
            <div className="mt-4 mx-auto h-px w-12 bg-gold-500/30" />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-gold-300/50 text-base max-w-lg mx-auto font-body">
              The gift that feels like you
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="section-label text-gold-500 font-body">Story</span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-neutral-900">
                Crafting Memories, One Gift at a Time
              </h2>
              <div className="mt-4 mx-auto h-px w-12 bg-gold-500/40" />
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-neutral-600 font-body">
              <p className="first-letter:text-5xl first-letter:font-heading first-letter:text-gold-700 first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none">
                D&apos;CreativEdge was born from a simple yet powerful belief: every gift should
                tell a story. What started as a passion project by a small team of
                design-obsessed gift enthusiasts has grown into a full-fledged gifting
                studio dedicated to creating experiences, not just packages.
              </p>
              <p>
                We handpick every product from local artisans and small-batch creators who
                share our commitment to quality. From single-origin coffees roasted in
                Coorg to hand-poured soy candles from a studio in Jaipur, every item in a
                D&apos;CreativEdge hamper has a provenance you can feel proud of.
              </p>
              <p>
                Our &ldquo;Build Your Own&rdquo; experience is the heart of what we do. It
                puts you in the creative seat, letting you choose the container, the items,
                the wrapping, and even a personal message card. Whether it&apos;s a birthday
                surprise, a corporate thank-you, or a festival celebration, we are here to
                make sure the gift feels like <em className="text-gold-700 not-italic font-medium">you</em>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-neutral-200 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-label text-gold-500 font-body">Philosophy</span>
              <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-neutral-900">
                Our Values
              </h2>
              <div className="mt-4 mx-auto h-px w-12 bg-gold-500/40" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="flex flex-col p-10 text-center border border-neutral-200 bg-white transition-all duration-500 hover:border-gold-500/30 hover:shadow-md">
                  <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6 text-gold-700 border border-gold-500/20 bg-gold-50/50">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-2xl text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-sm font-body">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-950 py-24 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-label text-gold-500/60 font-body">
              Get Started
            </span>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl text-gold-300">
              Ready to create something special?
            </h2>
            <p className="mt-6 text-gold-300/40 font-body">
              Design a gift that is as unique as the person you are giving it to.
            </p>
            <Link
              href="/build-your-own"
              className="mt-10 btn-premium inline-block px-12 py-4 text-sm uppercase tracking-[0.15em] font-body"
            >
              Build Your Own Hamper
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
