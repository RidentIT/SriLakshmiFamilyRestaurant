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
 * Fades and slides CONTENT up as it enters the viewport. The outer
 * section/div — which usually carries a background color via `className`
 * — is a plain, unanimated element; only an inner wrapper animates.
 *
 * This matters: animating opacity on the section itself would fade its
 * background too, letting the page's base background show through behind
 * a below-the-fold dark section until it scrolls far enough to trigger.
 * Keeping the background permanently opaque avoids that gap entirely.
 */
export default function MotionSection({
  children,
  className,
  delay = 0,
  as = "section",
  id,
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  const Wrapper = as;

  const motionProps = {
    initial: reduceMotion ? undefined : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <Wrapper className={className} id={id}>
      <motion.div {...motionProps}>{children}</motion.div>
    </Wrapper>
  );
}
