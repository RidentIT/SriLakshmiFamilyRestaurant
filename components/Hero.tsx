"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RESTAURANT } from "@/data/restaurant";

/**
 * Full-viewport hero. The fallback image is always rendered first (and is
 * what LCP measures), so nothing blocks initial paint. The background video
 * is layered on top and only faded in once it reports it can actually play —
 * on a slow connection, a data-saver connection, prefers-reduced-motion, or
 * if /hero-video.mp4 is missing/errors, it simply never appears and the
 * fallback image remains the background, which is a fully designed end state
 * on its own.
 */
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoAllowed, setVideoAllowed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    // Respect data-saver mode / very slow connections where present.
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const isSlow =
      connection?.saveData ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g";

    if (!isSlow) {
      // Deliberately deferred to a post-hydration effect: navigator.connection
      // is only available client-side, so flipping this synchronously during
      // render would mismatch the server-rendered (fallback-image-only) HTML.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVideoAllowed(true);
    }
  }, [reduceMotion]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal">
      {/* Fallback image — always present, drives LCP */}
      <Image
        src="/hero-cooking.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {videoAllowed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Readability overlay, works over either layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold sm:text-sm">
            Anuradhapura, Sri Lanka
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-6xl">
            {RESTAURANT.name}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/85 sm:text-lg">
            {RESTAURANT.tagline} Come as you are &mdash; leave as family.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex h-14 items-center justify-center rounded-full bg-gold px-8 text-base font-semibold text-maroon-dark shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] hover:bg-gold/90 active:scale-[0.99] sm:text-lg"
            >
              View Menu
            </Link>
            <Link
              href="/contact#reserve"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-cream/70 px-8 text-base font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10 sm:text-lg"
            >
              Reserve a Table
            </Link>
          </div>

          <p className="mt-6 text-sm text-cream/70">
            {RESTAURANT.hoursDisplay} &middot; Dine-in &amp; Takeaway &middot;
            Seats up to {RESTAURANT.seatingCapacity}
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex">
        <span className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-cream/50 p-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold" />
        </span>
      </div>
    </section>
  );
}
