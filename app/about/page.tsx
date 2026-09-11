import type { Metadata } from "next";
import Image from "next/image";
import MotionSection from "@/components/MotionSection";
import { RESTAURANT } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story behind ${RESTAURANT.name}, a family-run restaurant in Anuradhapura.`,
};

const GALLERY = [
  { src: "/about-gallery-1.svg", alt: "Our kitchen" },
  { src: "/about-gallery-2.svg", alt: "Our dining hall" },
  { src: "/about-gallery-3.svg", alt: "Our family" },
  { src: "/about-gallery-4.svg", alt: "Our dishes" },
];

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          About Us
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
          A family table, open to everyone
        </h1>
      </div>

      {/*
        PLACEHOLDER COPY — TO BE REPLACED WITH REAL CONTENT FROM THE OWNER.
        The sections below (Our Story / What Makes Us Special) are written
        as tasteful, generic placeholder text so the page layout can be
        built and reviewed before the real story is supplied.
      */}
      <MotionSection className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-maroon sm:text-3xl">
              Our Story
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/75">
              <p>
                Sri Lakshmi Family Restaurant began as a small family kitchen
                on Jaffna Road, born from a simple idea: feed people the way
                you&apos;d feed your own family — generously, and with care.
                That idea has stayed with us as we&apos;ve grown into a
                restaurant that welcomes travellers, families and neighbours
                from across Rambewa and Anuradhapura.
              </p>
              <p>
                Every recipe on our menu carries a little bit of that
                original kitchen with it. We still cook the way our elders
                taught us, using fresh ingredients sourced close to home, and
                we still believe the best meals are the ones shared around a
                table with people you care about.
              </p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-maroon/5 shadow-sm">
            <Image
              src="/about-gallery-1.svg"
              alt="Our kitchen"
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-maroon/5 shadow-sm md:order-2">
            <Image
              src="/about-gallery-2.svg"
              alt="Our dining hall"
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-display text-2xl font-semibold text-maroon sm:text-3xl">
              What Makes Us Special
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/75">
              <p>
                It&apos;s the little things: curries simmered slowly instead
                of rushed, a warm greeting when you walk in, and staff who
                remember regulars by name. We keep our kitchen open around
                the clock so there&apos;s always a hot meal waiting, whether
                you&apos;re stopping by at sunrise or well past midnight.
              </p>
              <p>
                With seating for up to 80 guests, we&apos;re equally at home
                hosting a quiet family lunch or a larger gathering — and our
                takeaway counter means great food is never more than a short
                stop away.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto mt-20 max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
          A Look Around
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {GALLERY.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-maroon/5 shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
            </div>
          ))}
        </div>
      </MotionSection>
    </div>
  );
}
