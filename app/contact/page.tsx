'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'

const SUBJECTS = [
  'General',
  'Corporate Inquiry',
  'Custom Order',
  'Feedback',
] as const

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white border border-neutral-200 px-5 py-3.5 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-0 focus:outline-none transition-all font-body text-sm'

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="bg-dark-950 py-24 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <span className="section-label text-gold-500/60 font-body">
              Contact
            </span>
            <h1 className="mt-4 font-heading text-5xl sm:text-6xl text-gold-300">
              Get In Touch
            </h1>
            <div className="mt-4 mx-auto h-px w-12 bg-gold-500/30" />
            <p className="mt-6 text-gold-300/50 font-body">
              We would love to hear from you
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-900 font-body font-medium mb-8">
                  Send a Message
                </h2>

                {submitted ? (
                  <div className="border border-gold-500/20 bg-gold-50/50 p-12 text-center">
                    <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5 text-gold-700 border border-gold-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl text-neutral-900 mb-2">
                      Message Sent
                    </h3>
                    <p className="text-neutral-500 font-body text-sm">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-2 font-body">
                          Name <span className="text-copper-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-2 font-body">
                          Email <span className="text-copper-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-2 font-body">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-2 font-body">
                          Subject <span className="text-copper-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className={`${inputClass} appearance-none cursor-pointer`}
                        >
                          <option value="" disabled>Select a subject</option>
                          {SUBJECTS.map((subject) => (
                            <option key={subject} value={subject}>{subject}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-2 font-body">
                        Message <span className="text-copper-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-premium bg-neutral-900 text-white w-full py-4 text-xs uppercase tracking-[0.2em] font-body font-medium cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <Reveal delay={100}>
                <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-900 font-body font-medium mb-8">
                  Contact Info
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2 font-body">
                      Visit Us
                    </h3>
                    <p className="text-neutral-900 text-sm leading-relaxed font-body">
                      D&apos;CreativEdge Gifting Solutions<br />
                      42, Craft Lane, Koramangala<br />
                      Bangalore, Karnataka 560034
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2 font-body">
                      Call Us
                    </h3>
                    <p className="text-neutral-900 text-sm font-body">
                      +91 98765 43210
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2 font-body">
                      Email Us
                    </h3>
                    <p className="text-neutral-900 text-sm font-body">
                      hello@dcreativedge.in
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2 font-body">
                      WhatsApp
                    </h3>
                    <p className="text-neutral-900 text-sm font-body">
                      +91 98765 43210
                    </p>
                  </div>

                  <div className="pt-8 border-t border-neutral-200">
                    <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-4 font-body">
                      Business Hours
                    </h3>
                    <div className="text-sm space-y-2 font-body">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Mon - Fri</span>
                        <span className="text-neutral-900 font-medium">10 AM - 7 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Saturday</span>
                        <span className="text-neutral-900 font-medium">10 AM - 5 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Sunday</span>
                        <span className="text-neutral-900 font-medium">Closed</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-neutral-200">
                    <h3 className="text-xs uppercase tracking-[0.15em] text-neutral-400 mb-4 font-body">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      {['Instagram', 'Facebook', 'WhatsApp'].map((name) => (
                        <a
                          key={name}
                          href="#"
                          aria-label={name}
                          className="text-xs uppercase tracking-[0.15em] text-neutral-500 hover:text-neutral-900 transition-colors font-body"
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
