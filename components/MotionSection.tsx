"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div";
  id?: string;
};

/**
 * Fades and slides content up as it enters the viewport. Content is always
 * present in the DOM (no display:none), and falls back to a static render
 * for users with prefers-reduced-motion so it never blocks readability.
 */
export default function MotionSection({
  children,
  className,
  delay = 0,
  as = "section",
  id,
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  const motionProps = {
    className,
    id,
    initial: reduceMotion ? undefined : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (as === "div") {
    return <motion.div {...motionProps}>{children}</motion.div>;
  }

  return <motion.section {...motionProps}>{children}</motion.section>;
}
