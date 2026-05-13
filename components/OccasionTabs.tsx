"use client";

import Link from "next/link";
import Image from "next/image";

interface CategoryItem {
  id: string;
  label: string;
  image: string;
  href: string;
}

const categories: CategoryItem[] = [
  { id: "same-day", label: "Same Day Delivery", image: "/categories/same-day-delivery.avif", href: "/shop" },
  { id: "birthday", label: "Birthday", image: "/products/birthday-bloom-trunk.jpg", href: "/shop?occasion=birthday" },
  { id: "anniversary", label: "Anniversary", image: "/products/anniversary-rose-garden.jpg", href: "/shop?occasion=anniversary" },
  { id: "festival", label: "Festivals", image: "/products/rakhi-golden-basket.jpg", href: "/shop?occasion=festival" },
  { id: "name-gifts", label: "Name Gifts", image: "/categories/name-gifts.avif", href: "/shop" },
  { id: "thank-you", label: "Thank You", image: "/products/gratitude-garden.jpg", href: "/shop?occasion=thank-you" },
  { id: "for-him", label: "For Him", image: "/products/movie-night-trunk.jpg", href: "/shop?recipient=for-him" },
  { id: "for-her", label: "For Her", image: "/products/birthday-surprise-box.jpg", href: "/shop?recipient=for-her" },
];

export default function OccasionTabs() {
  return (
    <section className="py-10 sm:py-14 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900">
            The Best Gifts are Personal
          </h2>
          <p className="mt-2 text-sm text-neutral-500 font-body">
            Delivered fast wherever they are
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-x-6 sm:gap-x-10 gap-y-8">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-[72px] h-[72px] sm:w-[90px] sm:h-[90px] rounded-full overflow-hidden border-2 border-neutral-200 group-hover:border-gold-500 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="90px"
                  />
                </div>
                <p className="mt-2.5 text-xs sm:text-[13px] font-body font-semibold text-neutral-700 leading-tight group-hover:text-gold-700 transition-colors duration-200 max-w-[80px] sm:max-w-[100px]">
                  {cat.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
