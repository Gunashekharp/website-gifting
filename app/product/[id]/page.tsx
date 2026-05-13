'use client'

import { use, useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

function formatPrice(n: number): string {
  return '₹' + n.toLocaleString('en-IN')
}

function makeThumbnails(base: string) {
  return [
    { id: 0, src: base, alt: 'Front view' },
    { id: 1, src: base, alt: 'Side view' },
    { id: 2, src: base, alt: 'Contents view' },
    { id: 3, src: base, alt: 'Packaging view' },
  ]
}

function QuantitySelector({
  value,
  onChange,
}: {
  value: number
  onChange: (n: number) => void
}) {
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="w-10 h-10 border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center text-neutral-900 transition-colors font-body text-lg"
        aria-label="Decrease quantity"
      >
        &minus;
      </button>
      <span className="w-12 h-10 flex items-center justify-center text-sm font-medium text-neutral-900 font-body border-y border-neutral-200">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="w-10 h-10 border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center text-neutral-900 transition-colors font-body text-lg"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

type WrappingStyle = 'classic' | 'premium' | 'eco'

function GiftOptions() {
  const [isGift, setIsGift] = useState(false)
  const [message, setMessage] = useState('')
  const [wrapping, setWrapping] = useState<WrappingStyle>('classic')
  const [hidePrice, setHidePrice] = useState(false)

  const WRAPPING_OPTIONS: { value: WrappingStyle; label: string; desc: string }[] = [
    { value: 'classic', label: 'Classic', desc: 'Matte finish with satin ribbon' },
    { value: 'premium', label: 'Premium', desc: 'Velvet box with gold foil' },
    { value: 'eco', label: 'Eco', desc: 'Kraft paper with dried flowers' },
  ]

  return (
    <div className="border border-neutral-200 p-6">
      <label className="flex items-center gap-3 cursor-pointer">
        <div
          className={`w-10 h-6 relative transition-colors duration-300 cursor-pointer ${
            isGift ? 'bg-neutral-900' : 'bg-neutral-200'
          }`}
          onClick={() => setIsGift(!isGift)}
        >
          <div
            className={`absolute top-1 w-4 h-4 bg-white shadow transition-transform duration-300 ${
              isGift ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </div>
        <span className="text-sm uppercase tracking-[0.15em] text-neutral-900 font-body font-medium">
          This is a gift
        </span>
      </label>

      {isGift && (
        <div className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="gift-message"
              className="block text-xs uppercase tracking-[0.15em] text-neutral-500 mb-2 font-body"
            >
              Gift Message
            </label>
            <textarea
              id="gift-message"
              value={message}
              onChange={(e) => {
                if (e.target.value.length <= 200) setMessage(e.target.value)
              }}
              rows={3}
              placeholder="Write a heartfelt message..."
              className="w-full border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-0 font-body resize-none transition-all"
            />
            <p className="text-xs text-neutral-400 mt-1 text-right font-body">
              {message.length}/200
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 mb-3 font-body">
              Wrapping Style
            </p>
            <div className="grid grid-cols-3 gap-3">
              {WRAPPING_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex flex-col items-center text-center p-4 border cursor-pointer transition-all duration-300 ${
                    wrapping === opt.value
                      ? 'border-neutral-900 bg-neutral-50'
                      : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="wrapping"
                    value={opt.value}
                    checked={wrapping === opt.value}
                    onChange={() => setWrapping(opt.value)}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium text-neutral-900 font-body">
                    {opt.label}
                  </span>
                  <span className="text-xs text-neutral-500 mt-1 font-body leading-tight">
                    {opt.desc}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div
              className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-all duration-200 ${
                hidePrice
                  ? 'bg-neutral-900 border-neutral-900'
                  : 'border-neutral-300 group-hover:border-neutral-400'
              }`}
              onClick={() => setHidePrice(!hidePrice)}
            >
              {hidePrice && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </div>
            <span className="text-sm text-neutral-700 font-body">
              Hide price from delivery
            </span>
          </label>
        </div>
      )}
    </div>
  )
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const product = useMemo(
    () => products.find((p) => p.id === id),
    [id]
  )

  const [selectedThumb, setSelectedThumb] = useState(0)
  const [imageOpacity, setImageOpacity] = useState(1)
  const [quantity, setQuantity] = useState(1)

  const handleThumbClick = (thumbId: number) => {
    if (thumbId === selectedThumb) return
    setImageOpacity(0)
    setTimeout(() => {
      setSelectedThumb(thumbId)
      setImageOpacity(1)
    }, 50)
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-white flex flex-col items-center justify-center gap-6">
        <h1 className="font-heading text-3xl text-neutral-900">
          Product not found
        </h1>
        <Link
          href="/shop"
          className="text-xs uppercase tracking-[0.15em] text-neutral-900 font-body font-medium border-b border-neutral-900 pb-1"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const thumbnails = makeThumbnails(product.image)
  const hasDiscount =
    product.originalPrice != null && product.originalPrice > product.price
  const discount = hasDiscount
    ? Math.round(
        ((product.originalPrice! - product.price) / product.originalPrice!) * 100
      )
    : 0

  const deliveryStart = new Date()
  deliveryStart.setDate(deliveryStart.getDate() + 5)
  const deliveryEnd = new Date()
  deliveryEnd.setDate(deliveryEnd.getDate() + 7)
  const fmtDate = (d: Date) =>
    d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-neutral-400 font-body">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <span className="text-neutral-300">/</span>
          <Link href="/shop" className="hover:text-neutral-900 transition-colors">
            Shop
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-900">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="animate-fade-in-up">
            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden border border-neutral-200">
              <Image
                src={thumbnails[selectedThumb].src}
                alt={`${product.name} — ${thumbnails[selectedThumb].alt}`}
                fill
                className="object-cover"
                style={{ opacity: imageOpacity, transition: 'opacity 0.3s ease' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-dark-950/80 text-gold-300 px-3 py-1.5 backdrop-blur-sm font-body">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2 mt-3">
              {thumbnails.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleThumbClick(t.id)}
                  className={`relative aspect-square overflow-hidden border transition-all duration-300 ${
                    selectedThumb === t.id
                      ? 'border-neutral-900'
                      : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                  aria-label={t.alt}
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <span className="section-label text-gold-500 font-body mb-3">
              {product.category}
            </span>

            <h1 className="font-heading text-3xl md:text-4xl text-neutral-900 font-light mb-5">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-neutral-200">
              <span className="font-heading text-2xl text-neutral-900">
                {formatPrice(product.price)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-base text-neutral-400 line-through font-body">
                    {formatPrice(product.originalPrice!)}
                  </span>
                  <span className="text-xs font-medium text-copper-500 font-body">
                    {discount}% off
                  </span>
                </>
              )}
            </div>

            <p className="text-neutral-600 leading-relaxed mb-8 font-body text-sm">
              {product.description}
            </p>

            {/* What's Inside */}
            <div className="mb-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-900 font-body font-medium mb-4">
                What&apos;s Inside
              </h2>
              <div className="border border-neutral-200 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.contents.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 bg-gold-500 mt-2 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900 font-body">
                          {item.name}
                        </p>
                        <p className="text-xs text-neutral-500 font-body">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity + CTAs */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-body">
                  Quantity
                </span>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>

              <button
                type="button"
                className="btn-premium w-full py-4 text-xs uppercase tracking-[0.2em] font-body font-medium"
              >
                Add to Cart
              </button>

              <button
                type="button"
                className="btn-outline border border-neutral-900 text-neutral-900 w-full py-4 text-xs uppercase tracking-[0.2em] font-body font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300 ease-out"
              >
                Customize This
              </button>
            </div>

            <div className="mb-8">
              <GiftOptions />
            </div>

            {/* Delivery info */}
            <div className="border border-neutral-200 p-6 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-900 font-body font-medium">
                Delivery Information
              </h3>

              <div className="space-y-3 text-sm font-body">
                <div className="flex items-center gap-3 text-neutral-600">
                  <span className="text-neutral-400">Estimated:</span>
                  <span className="text-neutral-900 font-medium">
                    {fmtDate(deliveryStart)} &ndash; {fmtDate(deliveryEnd)}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-neutral-600">
                  <span className="text-neutral-400">Shipping:</span>
                  <span className="text-neutral-900 font-medium">
                    Free above ₹2,000
                  </span>
                </div>
                <div className="flex items-center gap-3 text-neutral-600">
                  <span className="text-neutral-400">Returns:</span>
                  <span className="text-neutral-900 font-medium">
                    7-day hassle-free returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
