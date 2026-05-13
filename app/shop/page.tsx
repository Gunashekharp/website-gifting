'use client'

import { useState, useEffect, useMemo, useCallback, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { products, occasions, recipients } from '@/lib/products'
import type { Product } from '@/lib/products'
import Reveal from '@/components/Reveal'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const PRICE_RANGES = [
  { id: 'under-2000', label: 'Under ₹2,000', min: 0, max: 1999 },
  { id: '2000-3500', label: '₹2,000 - ₹3,500', min: 2000, max: 3500 },
  { id: '3500-5000', label: '₹3,500 - ₹5,000', min: 3500, max: 5000 },
  { id: 'above-5000', label: 'Above ₹5,000', min: 5001, max: Infinity },
]

type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'newest'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'popular', label: 'Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatPrice(n: number): string {
  return '₹' + n.toLocaleString('en-IN')
}

function toggleSet<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set)
  if (next.has(value)) next.delete(value)
  else next.add(value)
  return next
}

/* ------------------------------------------------------------------ */
/*  Filter sidebar                                                     */
/* ------------------------------------------------------------------ */

function FilterGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="py-5 border-b border-neutral-100 last:border-0">
      <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-900 mb-4 font-body font-medium">
        {title}
      </h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  )
}

function CheckboxItem({
  id,
  label,
  checked,
  onChange,
}: {
  id: string
  label: string
  checked: boolean
  onChange: () => void
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <div
        className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-all duration-200 ${
          checked
            ? 'bg-neutral-900 border-neutral-900'
            : 'border-neutral-300 group-hover:border-neutral-400'
        }`}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm font-body text-neutral-600 group-hover:text-neutral-900 transition-colors">
        {label}
      </span>
    </label>
  )
}

/* ------------------------------------------------------------------ */
/*  Product card                                                       */
/* ------------------------------------------------------------------ */

function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.originalPrice != null && product.originalPrice > product.price

  return (
    <div className="group flex flex-col bg-white overflow-hidden transition-all duration-500 hover:shadow-lg border border-neutral-200/80 hover:border-gold-500/30">
      {/* Image */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-dark-950/80 text-gold-300 px-3 py-1.5 backdrop-blur-sm font-body">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/20 transition-colors duration-500 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-xs uppercase tracking-[0.2em] text-white bg-dark-950/70 backdrop-blur-sm px-6 py-3 font-body">
              View Details
            </span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-heading text-xl text-neutral-900 mb-1 line-clamp-1 hover:text-gold-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-neutral-500 mb-4 line-clamp-2 font-body leading-relaxed">
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
          <div className="flex items-baseline gap-2">
            <span className="text-neutral-900 font-heading text-lg">
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-neutral-400 line-through font-body">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
          </div>
          <button
            type="button"
            className="text-xs uppercase tracking-[0.15em] text-gold-700 hover:text-gold-900 transition-colors font-body font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main shop content                                                  */
/* ------------------------------------------------------------------ */

function ShopContent() {
  const searchParams = useSearchParams()

  const [selectedOccasions, setSelectedOccasions] = useState<Set<string>>(new Set())
  const [selectedRecipients, setSelectedRecipients] = useState<Set<string>>(new Set())
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<Set<string>>(new Set())
  const [sort, setSort] = useState<SortOption>('popular')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    const occ = searchParams.get('occasion')
    if (occ) setSelectedOccasions(new Set([occ]))
  }, [searchParams])

  const hasAnyFilter =
    selectedOccasions.size > 0 ||
    selectedRecipients.size > 0 ||
    selectedPriceRanges.size > 0

  const clearAll = useCallback(() => {
    setSelectedOccasions(new Set())
    setSelectedRecipients(new Set())
    setSelectedPriceRanges(new Set())
  }, [])

  const filtered = useMemo(() => {
    let list: Product[] = [...products]

    if (selectedOccasions.size > 0) {
      list = list.filter((p) => p.occasion.some((o) => selectedOccasions.has(o)))
    }
    if (selectedRecipients.size > 0) {
      list = list.filter((p) => p.recipient.some((r) => selectedRecipients.has(r)))
    }
    if (selectedPriceRanges.size > 0) {
      const ranges = PRICE_RANGES.filter((r) => selectedPriceRanges.has(r.id))
      list = list.filter((p) => ranges.some((r) => p.price >= r.min && p.price <= r.max))
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        list.reverse()
        break
      default:
        break
    }

    return list
  }, [selectedOccasions, selectedRecipients, selectedPriceRanges, sort])

  const filterContent = (
    <div>
      <FilterGroup title="Occasion">
        {occasions.map((o) => (
          <CheckboxItem
            key={o.id}
            id={`occ-${o.id}`}
            label={o.label}
            checked={selectedOccasions.has(o.id)}
            onChange={() => setSelectedOccasions((prev) => toggleSet(prev, o.id))}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Recipient">
        {recipients.map((r) => (
          <CheckboxItem
            key={r.id}
            id={`rec-${r.id}`}
            label={r.label}
            checked={selectedRecipients.has(r.id)}
            onChange={() => setSelectedRecipients((prev) => toggleSet(prev, r.id))}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price Range">
        {PRICE_RANGES.map((r) => (
          <CheckboxItem
            key={r.id}
            id={`price-${r.id}`}
            label={r.label}
            checked={selectedPriceRanges.has(r.id)}
            onChange={() => setSelectedPriceRanges((prev) => toggleSet(prev, r.id))}
          />
        ))}
      </FilterGroup>

      {hasAnyFilter && (
        <button
          onClick={clearAll}
          className="w-full mt-6 text-xs uppercase tracking-[0.15em] font-medium text-gold-700 hover:text-gold-900 transition-colors font-body py-3 border border-gold-500/30 hover:bg-gold-50"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header banner */}
      <div className="bg-dark-950 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="section-label text-gold-500/60 font-body">Browse</span>
          <h1 className="mt-4 font-heading text-5xl sm:text-6xl text-gold-300">
            Our Collection
          </h1>
          <div className="mt-4 mx-auto h-px w-12 bg-gold-500/30" />
          <p className="mt-6 text-gold-300/50 font-body max-w-lg mx-auto">
            Hand-curated luxury gift hampers for every occasion and every heart.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-900 font-body font-medium mb-6">
                Filters
              </h2>
              {filterContent}
            </div>
          </aside>

          {/* Main grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-200">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-neutral-900 border border-neutral-200 px-5 py-2.5 hover:border-neutral-400 transition-all font-body"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                </svg>
                Filters
                {hasAnyFilter && (
                  <span className="bg-neutral-900 text-white text-[10px] w-5 h-5 flex items-center justify-center">
                    {selectedOccasions.size + selectedRecipients.size + selectedPriceRanges.size}
                  </span>
                )}
              </button>

              <p className="text-sm text-neutral-500 font-body">
                {filtered.length} of {products.length} hampers
              </p>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="text-xs uppercase tracking-[0.1em] border border-neutral-200 px-4 py-2.5 bg-white text-neutral-900 focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 font-body transition-all appearance-none cursor-pointer pr-8"
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-3xl text-neutral-900 font-heading mb-3">
                  No products found
                </p>
                <p className="text-neutral-500 font-body mb-8">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={clearAll}
                  className="text-xs uppercase tracking-[0.15em] text-gold-700 font-medium hover:text-gold-900 transition-colors font-body border-b border-gold-500/30 pb-1"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                  <Reveal key={p.id} delay={i * 60}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter slide-out */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-dark-950/60 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />

          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-900 font-body font-medium">
                Filters
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors"
                aria-label="Close filters"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">{filterContent}</div>

            <div className="p-5 border-t border-neutral-100">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-premium w-full bg-neutral-900 text-white font-body py-3.5 text-xs uppercase tracking-[0.15em] font-medium"
              >
                Show {filtered.length} Result{filtered.length !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page wrapper                                                       */
/* ------------------------------------------------------------------ */

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-warm-white flex items-center justify-center">
          <div className="text-gold-500 font-heading text-2xl animate-fade-in">
            Loading collection...
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  )
}
