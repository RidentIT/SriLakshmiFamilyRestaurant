"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type GalleryImage = { src: string; alt: string };

/**
 * Horizontally swipeable photo gallery. Swiping itself is native CSS
 * scroll-snap (works out of the box on touch, trackpad, and mouse-wheel —
 * no drag library needed); this component just layers on arrow buttons,
 * dot indicators, and a one-time "peek" nudge so the gallery reads as
 * swipeable at a glance.
 */
export default function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!mostVisible) return;
        const index = slideRefs.current.findIndex((el) => el === mostVisible.target);
        if (index !== -1) setActive(index);
      },
      { root: track, threshold: [0.5, 0.75, 0.95] }
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [images.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // One-time nudge on mount to hint the gallery is swipeable.
    const timer = setTimeout(() => {
      track.scrollBy({ left: 56, behavior: "smooth" });
      setTimeout(() => track.scrollTo({ left: 0, behavior: "smooth" }), 550);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  function scrollByDirection(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.85, behavior: "smooth" });
  }

  function scrollToIndex(index: number) {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:gap-5 sm:scroll-px-6 sm:px-6 lg:scroll-px-8 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="relative aspect-[3/4] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl bg-cream/5 shadow-lg sm:w-[40%] lg:w-[27%]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 27vw, (min-width: 640px) 40vw, 72vw"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => scrollByDirection(-1)}
        className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 text-charcoal shadow-md transition-transform hover:scale-105 lg:flex"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => scrollByDirection(1)}
        className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/95 text-charcoal shadow-md transition-transform hover:scale-105 lg:flex"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Go to photo ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === active ? "w-6 bg-gold" : "w-1.5 bg-cream/25 hover:bg-cream/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
