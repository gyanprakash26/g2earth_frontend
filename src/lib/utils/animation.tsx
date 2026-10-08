"use client";

/**
 * Reusable animation primitives for G2Earth.
 * All animations respect prefers-reduced-motion.
 * Import from here — never scatter motion config across components.
 */

import { motion, useReducedMotion, useInView, AnimatePresence } from "motion/react";
import { useRef } from "react";

export { motion, AnimatePresence, useReducedMotion };

// ─── Shared easing / timing ──────────────────────────────────────────────────

export const EASE_OUT = [0.0, 0.0, 0.2, 1] as const;
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

export const DURATION = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
  enter: 0.5,
} as const;

// ─── Variant factories ────────────────────────────────────────────────────────

export function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.enter, ease: EASE_OUT, delay },
    },
  };
}

export function fadeIn(delay = 0) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: DURATION.enter, ease: EASE_OUT, delay },
    },
  };
}

export function staggerContainer(staggerChildren = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };
}

// ─── FadeIn wrapper component ─────────────────────────────────────────────────

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** If true, animates once when element enters viewport */
  onScroll?: boolean;
  as?: React.ElementType;
}

export function FadeIn({
  children,
  delay = 0,
  className,
  onScroll = false,
}: FadeInProps) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const variants = fadeUp(delay);

  if (shouldReduce) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={onScroll ? (isInView ? "visible" : "hidden") : "visible"}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger list wrapper ─────────────────────────────────────────────────────

interface StaggerListProps {
  children: React.ReactNode;
  className?: string;
  as?: "ul" | "div" | "ol";
  stagger?: number;
  onScroll?: boolean;
}

export function StaggerList({
  children,
  className,
  as: Tag = "div",
  stagger = 0.07,
  onScroll = false,
}: StaggerListProps) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  if (shouldReduce) {
    const El = Tag as React.ElementType;
    return <El className={className}>{children}</El>;
  }

  const MotionTag = motion[Tag as "div" | "ul" | "ol"];

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement & HTMLUListElement & HTMLOListElement>}
      className={className}
      variants={staggerContainer(stagger)}
      initial="hidden"
      animate={onScroll ? (isInView ? "visible" : "hidden") : "visible"}
    >
      {children}
    </MotionTag>
  );
}

// ─── Stagger item ─────────────────────────────────────────────────────────────

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeUp()}>
      {children}
    </motion.div>
  );
}
