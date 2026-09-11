import Link from "next/link";
import Hero from "@/components/Hero";
import MotionSection from "@/components/MotionSection";
import FeatureCard from "@/components/FeatureCard";
import DishCard from "@/components/DishCard";
import PhotoGallery from "@/components/PhotoGallery";
import { menuCategories } from "@/data/menu";
import { RESTAURANT } from "@/data/restaurant";

const GALLERY_IMAGES = [
  { src: "/ares1.jpg", alt: "Elegant dining room with a marble bar" },
  { src: "/ares11.jpg", alt: "Warmly lit dining hall seating" },
  { src: "/ares3.jpg", alt: "Chef searing a dish over open flame" },
  { src: "/ares4.jpg", alt: "Buffet spread at golden hour" },
  { src: "/ares5.jpg", alt: "Cozy counter seating in the evening" },
  { src: "/ares6.jpg", alt: "Chef finishing a plated dish" },
  { src: "/ares7.jpg", alt: "A spread of shared dishes on the table" },
  { src: "/ares8.jpg", alt: "Sauce being drizzled over a dish" },
  { src: "/ares9.jpg", alt: "Friends sharing a meal together" },
  { src: "/ares10.jpg", alt: "A toast shared around the table" },
];

const FEATURED_ITEM_IDS = [
  "fr-chicken",
  "ko-chicken",
  "sp-thai-rice",
  "ck-chicken",
  "pa-chicken",
  "fj-mango",
];

const featuredItems = menuCategories
  .flatMap((category) => category.items)
  .filter((item) => FEATURED_ITEM_IDS.includes(item.id))
  .sort(
    (a, b) => FEATURED_ITEM_IDS.indexOf(a.id) - FEATURED_ITEM_IDS.indexOf(b.id)
  );

const FEATURES = [
  {
    title: "Authentic Flavors",
    description:
      "Recipes passed down through the family, cooked fresh every day the traditional way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 13a8 8 0 1 1 16 0c0 4-3 7-8 9-5-2-8-5-8-9Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12c1 1.5 5 1.5 6 0" />
      </svg>
    ),
  },
  {
    title: "Dine-In & Takeaway",
    description:
      "Enjoy a full family meal at our tables, or order ahead and take it with you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v7a3 3 0 0 0 3 3v6M7 4v6M4 4h3M15 4l3 3v13M15 4c2 0 3.5 1.5 3.5 4S17 12 15 12" />
      </svg>
    ),
  },
  {
    title: "Open 24 Hours",
    description:
      "Early morning, late night or anytime in between — we're always ready to serve you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    title: "Seats up to 80",
    description:
      "Spacious, comfortable seating for family gatherings, groups and celebrations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 21V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12M3 21h18M7 11h10M9 7V4h6v3" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <MotionSection className="bg-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Why Sri Lakshmi
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
              A family restaurant, in every sense
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Featured Dishes
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
                A taste of what&apos;s cooking
              </h2>
            </div>
            <Link
              href="/menu"
              className="hidden shrink-0 text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold/80 sm:inline-block"
            >
              View full menu &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredItems.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/menu"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-maroon-dark"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Visit Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
            A glimpse inside Sri Lakshmi
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-cream/70">
            Swipe through the dining room, the kitchen, and the moments that
            happen around our tables.
          </p>
        </div>

        <div className="mt-12">
          <PhotoGallery images={GALLERY_IMAGES} />
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <address className="text-sm not-italic leading-relaxed text-cream/70">
            {RESTAURANT.addressLines.join(", ")} &middot; {RESTAURANT.hoursDisplay}
          </address>
          <a
            href={RESTAURANT.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-maroon-dark transition-colors hover:bg-gold/90"
          >
            Get Directions
          </a>
        </div>
      </MotionSection>
    </>
  );
}
