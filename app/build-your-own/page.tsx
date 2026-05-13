'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { containers, builderItems } from '@/lib/products';
import type { Container, BuilderItem } from '@/lib/products';

const STEPS = ['Container', 'Size', 'Items', 'Personalize', 'Preview'] as const;

const CATEGORIES = ['All', 'Chocolates', 'Beverages', 'Self-Care', 'Snacks', 'Stationery', 'Decor'] as const;

const WRAPPING_STYLES = [
  {
    id: 'classic-gold',
    name: 'Classic Gold',
    description: 'Gold foil paper with a satin ribbon',
    colors: 'from-gold-300 to-gold-500',
    accent: 'bg-gold-500',
  },
  {
    id: 'rustic-kraft',
    name: 'Rustic Kraft',
    description: 'Brown kraft paper with twine bow',
    colors: 'from-copper-300 to-copper-500',
    accent: 'bg-copper-500',
  },
  {
    id: 'eco-green',
    name: 'Eco Green',
    description: 'Recycled paper with dried leaf sprig',
    colors: 'from-emerald-200 to-emerald-500',
    accent: 'bg-emerald-600',
  },
] as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ProgressBar({ currentStep }: { currentStep: number }) {
  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-neutral-200" aria-hidden="true" />
          <div
            className="absolute top-5 left-0 h-0.5 bg-gold-500 transition-all duration-500"
            style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
            aria-hidden="true"
          />

          {STEPS.map((label, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            const isFuture = index > currentStep;

            return (
              <div key={label} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    isCompleted
                      ? 'bg-gold-700 text-white'
                      : isCurrent
                        ? 'bg-gold-500 text-white ring-4 ring-gold-100'
                        : 'bg-white border-2 border-neutral-200 text-neutral-600'
                  }`}
                >
                  {isCompleted ? (
                    <CheckIcon className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium hidden sm:block ${
                    isCurrent
                      ? 'text-gold-700'
                      : isCompleted
                        ? 'text-gold-700'
                        : 'text-neutral-600'
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- Step 1: Choose Container ---------- */
function StepContainer({
  selected,
  onSelect,
}: {
  selected: Container | null;
  onSelect: (c: Container) => void;
}) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-heading text-neutral-900 text-center mb-2">
        Choose Your Container
      </h2>
      <p className="text-neutral-600 text-center mb-8">
        Select the perfect container for your custom hamper
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {containers.map((container) => {
          const isSelected = selected?.id === container.id;
          return (
            <button
              key={container.id}
              onClick={() => onSelect(container)}
              className={`group rounded-xl border-2 p-5 text-left transition-all duration-200 hover:shadow-lg cursor-pointer ${
                isSelected
                  ? 'border-gold-500 bg-gold-50 shadow-md'
                  : 'border-neutral-200 bg-white hover:border-gold-300'
              }`}
            >
              <div className="aspect-square rounded-lg bg-neutral-50 mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={container.image}
                  alt={container.name}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full p-4"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-1">
                {container.name}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {container.description}
              </p>
              <p className="text-sm text-gold-700 font-medium mt-2">
                From &#8377;{container.sizes[0].price}
              </p>
              {isSelected && (
                <div className="mt-3 flex items-center gap-1.5 text-gold-700 text-sm font-medium">
                  <CheckIcon className="w-4 h-4" />
                  Selected
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Step 2: Select Size ---------- */
function StepSize({
  container,
  selectedSize,
  onSelect,
}: {
  container: Container;
  selectedSize: { label: string; capacity: number; price: number } | null;
  onSelect: (size: { label: string; capacity: number; price: number }) => void;
}) {
  return (
    <div>
      <p className="text-sm text-gold-700 font-medium text-center mb-2">
        {container.name}
      </p>
      <h2 className="text-3xl sm:text-4xl font-heading text-neutral-900 text-center mb-2">
        Select Size
      </h2>
      <p className="text-neutral-600 text-center mb-8">
        Choose how many items you want to fit
      </p>

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        {container.sizes.map((size) => {
          const isSelected = selectedSize?.label === size.label;
          return (
            <button
              key={size.label}
              onClick={() => onSelect(size)}
              className={`rounded-xl border-2 p-6 text-center transition-all duration-200 hover:shadow-lg cursor-pointer ${
                isSelected
                  ? 'border-gold-500 bg-gold-50 shadow-md'
                  : 'border-neutral-200 bg-white hover:border-gold-300'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isSelected ? 'bg-gold-500 text-white' : 'bg-neutral-50 text-neutral-600'
                }`}
              >
                <span className="text-xl font-bold">{size.label[0]}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-1">
                {size.label}
              </h3>
              <p className="text-sm text-neutral-600 mb-3">
                Fits {size.capacity} items
              </p>
              <p className="text-lg font-semibold text-gold-700">
                &#8377;{size.price}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Step 3: Add Items ---------- */
function StepItems({
  selectedItems,
  capacity,
  containerPrice,
  onAdd,
  onRemove,
}: {
  selectedItems: BuilderItem[];
  capacity: number;
  containerPrice: number;
  onAdd: (item: BuilderItem) => void;
  onRemove: (itemId: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return builderItems;
    return builderItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const itemsTotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = containerPrice + itemsTotal;
  const isFull = selectedItems.length >= capacity;

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-heading text-neutral-900 text-center mb-2">
        Add Items to Your Hamper
      </h2>
      <p className="text-neutral-600 text-center mb-8">
        Pick your favourite items to include
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Category tabs + product grid */}
        <div className="flex-1 min-w-0">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold-700 text-white'
                    : 'bg-neutral-50 text-neutral-600 hover:bg-gold-50 hover:text-gold-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredItems.map((item) => {
              const isAdded = selectedItems.some((si) => si.id === item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-4 transition-all duration-200 ${
                    isAdded
                      ? 'border-gold-500 bg-gold-50'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  <div className="aspect-square rounded-lg bg-neutral-50 mb-3 flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="object-contain w-full h-full p-3"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-1 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gold-700 font-medium mb-3">
                    &#8377;{item.price}
                  </p>
                  {isAdded ? (
                    <button
                      onClick={() => onRemove(item.id)}
                      className="w-full py-2 rounded-lg bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => onAdd(item)}
                      disabled={isFull}
                      className={`w-full py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        isFull
                          ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                          : 'bg-gold-700 text-white hover:bg-gold-900'
                      }`}
                    >
                      {isFull ? 'Full' : 'Add'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right sidebar / bottom on mobile: Running Summary */}
        <div className="lg:w-80 shrink-0">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 lg:sticky lg:top-8">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-4">
              Your Hamper
            </h3>

            {/* Capacity indicator */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-neutral-600">Items added</span>
                <span className="font-semibold text-neutral-900">
                  {selectedItems.length}/{capacity}
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-neutral-100 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    isFull ? 'bg-gold-700' : 'bg-gold-500'
                  }`}
                  style={{ width: `${(selectedItems.length / capacity) * 100}%` }}
                />
              </div>
            </div>

            {/* Item list */}
            {selectedItems.length === 0 ? (
              <p className="text-sm text-neutral-600 py-4 text-center">
                No items added yet. Start adding items to build your hamper.
              </p>
            ) : (
              <ul className="divide-y divide-neutral-100 mb-4 max-h-64 overflow-y-auto">
                {selectedItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-3">
                    <div className="min-w-0 mr-2">
                      <p className="text-sm font-medium text-neutral-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-neutral-600">&#8377;{item.price}</p>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-neutral-400 hover:text-red-500 transition-colors shrink-0 cursor-pointer"
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Price breakdown */}
            <div className="border-t border-neutral-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Container</span>
                <span className="text-neutral-900">&#8377;{containerPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Items</span>
                <span className="text-neutral-900">&#8377;{itemsTotal}</span>
              </div>
              <div className="flex justify-between text-base font-semibold pt-2 border-t border-neutral-100">
                <span className="text-neutral-900">Total</span>
                <span className="text-gold-700">&#8377;{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Step 4: Personalize ---------- */
function StepPersonalize({
  giftMessage,
  setGiftMessage,
  wrappingStyle,
  setWrappingStyle,
  nameTag,
  setNameTag,
}: {
  giftMessage: string;
  setGiftMessage: (msg: string) => void;
  wrappingStyle: string;
  setWrappingStyle: (style: string) => void;
  nameTag: string;
  setNameTag: (name: string) => void;
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading text-neutral-900 text-center mb-2">
        Personalize Your Gift
      </h2>
      <p className="text-neutral-600 text-center mb-10">
        Add a personal touch to make it extra special
      </p>

      {/* Gift Message */}
      <div className="mb-10">
        <label className="block text-sm font-semibold text-neutral-900 mb-2">
          Gift Message
        </label>
        <textarea
          value={giftMessage}
          onChange={(e) => {
            if (e.target.value.length <= 200) setGiftMessage(e.target.value);
          }}
          placeholder="Write a heartfelt message for the recipient..."
          rows={4}
          className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-300 focus:outline-none resize-none transition-colors"
        />
        <p className="text-xs text-neutral-600 mt-1.5 text-right">
          {giftMessage.length}/200 characters
        </p>
      </div>

      {/* Wrapping Style */}
      <div className="mb-10">
        <label className="block text-sm font-semibold text-neutral-900 mb-4">
          Wrapping Style
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {WRAPPING_STYLES.map((style) => {
            const isSelected = wrappingStyle === style.id;
            return (
              <button
                key={style.id}
                onClick={() => setWrappingStyle(style.id)}
                className={`rounded-xl border-2 p-5 text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-gold-500 bg-gold-50 shadow-md'
                    : 'border-neutral-200 bg-white hover:border-gold-300'
                }`}
              >
                <div
                  className={`h-20 rounded-lg bg-gradient-to-br ${style.colors} mb-3`}
                />
                <h4 className="font-semibold text-neutral-900 text-sm mb-1">
                  {style.name}
                </h4>
                <p className="text-xs text-neutral-600">{style.description}</p>
                {isSelected && (
                  <div className="mt-2 flex items-center gap-1 text-gold-700 text-xs font-medium">
                    <CheckIcon className="w-3.5 h-3.5" />
                    Selected
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Name Tag */}
      <div className="mb-10">
        <label className="block text-sm font-semibold text-neutral-900 mb-2">
          Add a Name Tag <span className="font-normal text-neutral-600">(optional)</span>
        </label>
        <input
          type="text"
          value={nameTag}
          onChange={(e) => setNameTag(e.target.value)}
          placeholder="e.g. To Priya, with love"
          className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-gold-500 focus:ring-2 focus:ring-gold-300 focus:outline-none transition-colors"
        />
      </div>

      {/* Message Card Preview */}
      {(giftMessage || nameTag) && (
        <div>
          <p className="text-sm font-semibold text-neutral-900 mb-3">
            Card Preview
          </p>
          <div className="bg-gold-100 border-2 border-gold-500 rounded-xl p-6 max-w-sm mx-auto shadow-sm">
            {nameTag && (
              <p className="font-heading text-xl text-gold-900 mb-3 italic">
                {nameTag}
              </p>
            )}
            {giftMessage && (
              <p className="text-neutral-900 text-sm leading-relaxed whitespace-pre-wrap">
                {giftMessage}
              </p>
            )}
            <div className="mt-4 pt-3 border-t border-gold-300">
              <p className="text-xs text-gold-700 font-medium">
                D&apos;CreativEdge Gifting Solutions
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Step 5: Preview & Checkout ---------- */
function StepPreview({
  container,
  size,
  selectedItems,
  giftMessage,
  wrappingStyle,
  nameTag,
}: {
  container: Container;
  size: { label: string; capacity: number; price: number };
  selectedItems: BuilderItem[];
  giftMessage: string;
  wrappingStyle: string;
  nameTag: string;
}) {
  const itemsTotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = size.price + itemsTotal;
  const wrappingLabel =
    WRAPPING_STYLES.find((s) => s.id === wrappingStyle)?.name ?? 'Classic Gold';

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading text-neutral-900 text-center mb-2">
        Review Your Hamper
      </h2>
      <p className="text-neutral-600 text-center mb-10">
        Everything looks perfect? Place your order below.
      </p>

      <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
        {/* Container + Size */}
        <div className="p-6 border-b border-neutral-100">
          <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider mb-3">
            Container
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-neutral-900">{container.name}</p>
              <p className="text-sm text-neutral-600">
                {size.label} &mdash; fits {size.capacity} items
              </p>
            </div>
            <p className="font-semibold text-neutral-900">&#8377;{size.price}</p>
          </div>
        </div>

        {/* Items */}
        <div className="p-6 border-b border-neutral-100">
          <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider mb-3">
            Items ({selectedItems.length})
          </h3>
          <ul className="space-y-3">
            {selectedItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-neutral-900">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-neutral-900">&#8377;{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Personalization */}
        <div className="p-6 border-b border-neutral-100">
          <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider mb-3">
            Personalization
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-600">Wrapping</span>
              <span className="text-neutral-900">{wrappingLabel}</span>
            </div>
            {nameTag && (
              <div className="flex justify-between">
                <span className="text-neutral-600">Name Tag</span>
                <span className="text-neutral-900">{nameTag}</span>
              </div>
            )}
            {giftMessage && (
              <div className="mt-3">
                <span className="text-neutral-600">Message:</span>
                <p className="mt-1 text-neutral-900 bg-gold-50 rounded-lg p-3 text-sm italic">
                  &ldquo;{giftMessage}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="p-6 bg-neutral-50">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Container ({size.label})</span>
              <span className="text-neutral-900">&#8377;{size.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Items ({selectedItems.length})</span>
              <span className="text-neutral-900">&#8377;{itemsTotal}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-3 border-t border-neutral-200">
              <span className="text-neutral-900">Total</span>
              <span className="text-gold-700">&#8377;{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 space-y-3">
        <button className="w-full py-4 rounded-xl bg-gold-700 text-white text-lg font-semibold hover:bg-gold-900 transition-colors cursor-pointer">
          Place Order
        </button>
        <p className="text-center text-sm text-neutral-600">
          You will be redirected to complete payment
        </p>
      </div>
    </div>
  );
}

/* ========== Main Page Component ========== */
export default function BuildYourOwnPage() {
  const [currentStep, setCurrentStep] = useState(0);

  // Step 1: Container
  const [selectedContainer, setSelectedContainer] = useState<Container | null>(null);

  // Step 2: Size
  const [selectedSize, setSelectedSize] = useState<{
    label: string;
    capacity: number;
    price: number;
  } | null>(null);

  // Step 3: Items
  const [selectedItems, setSelectedItems] = useState<BuilderItem[]>([]);

  // Step 4: Personalize
  const [giftMessage, setGiftMessage] = useState('');
  const [wrappingStyle, setWrappingStyle] = useState('classic-gold');
  const [nameTag, setNameTag] = useState('');

  const capacity = selectedSize?.capacity ?? 0;
  const containerPrice = selectedSize?.price ?? 0;

  const canGoNext = (): boolean => {
    switch (currentStep) {
      case 0:
        return selectedContainer !== null;
      case 1:
        return selectedSize !== null;
      case 2:
        return selectedItems.length > 0;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1 && canGoNext()) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleContainerSelect = (container: Container) => {
    setSelectedContainer(container);
    // Reset size and items if container changes
    setSelectedSize(null);
    setSelectedItems([]);
  };

  const handleSizeSelect = (size: { label: string; capacity: number; price: number }) => {
    setSelectedSize(size);
    // Clear items if capacity shrinks
    setSelectedItems((prev) => prev.slice(0, size.capacity));
  };

  const handleAddItem = (item: BuilderItem) => {
    if (selectedItems.length < capacity && !selectedItems.some((si) => si.id === item.id)) {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <header className="bg-dark-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-2xl text-gold-500">
            D&apos;CreativEdge
          </Link>
          <Link href="/shop" className="text-sm text-gold-300 hover:text-gold-500 transition-colors">
            Back to Shop
          </Link>
        </div>
      </header>

      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} />

      {/* Step Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-32">
        {currentStep === 0 && (
          <StepContainer
            selected={selectedContainer}
            onSelect={handleContainerSelect}
          />
        )}

        {currentStep === 1 && selectedContainer && (
          <StepSize
            container={selectedContainer}
            selectedSize={selectedSize}
            onSelect={handleSizeSelect}
          />
        )}

        {currentStep === 2 && (
          <StepItems
            selectedItems={selectedItems}
            capacity={capacity}
            containerPrice={containerPrice}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
          />
        )}

        {currentStep === 3 && (
          <StepPersonalize
            giftMessage={giftMessage}
            setGiftMessage={setGiftMessage}
            wrappingStyle={wrappingStyle}
            setWrappingStyle={setWrappingStyle}
            nameTag={nameTag}
            setNameTag={setNameTag}
          />
        )}

        {currentStep === 4 && selectedContainer && selectedSize && (
          <StepPreview
            container={selectedContainer}
            size={selectedSize}
            selectedItems={selectedItems}
            giftMessage={giftMessage}
            wrappingStyle={wrappingStyle}
            nameTag={nameTag}
          />
        )}
      </main>

      {/* Navigation Footer */}
      {currentStep < 4 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 py-4 px-4 sm:px-6 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                currentStep === 0
                  ? 'text-neutral-300 cursor-not-allowed'
                  : 'border-2 border-gold-700 text-gold-700 hover:bg-gold-50'
              }`}
            >
              Back
            </button>

            <div className="text-sm text-neutral-600 hidden sm:block">
              Step {currentStep + 1} of {STEPS.length}
            </div>

            <button
              onClick={handleNext}
              disabled={!canGoNext()}
              className={`px-8 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                canGoNext()
                  ? 'bg-gold-700 text-white hover:bg-gold-900'
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Back & Edit link on Preview step */}
      {currentStep === 4 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 py-4 px-4 sm:px-6 z-50">
          <div className="max-w-7xl mx-auto flex justify-center">
            <button
              onClick={() => setCurrentStep(0)}
              className="text-gold-700 hover:text-gold-900 text-sm font-medium underline underline-offset-4 cursor-pointer"
            >
              Go Back &amp; Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
