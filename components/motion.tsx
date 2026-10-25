"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0, as = "div" }: { children: React.ReactNode; className?: string; delay?: number; as?: "div" | "article" | "section" }) {
  const Component = motion[as];
  const reduced = useReducedMotion();
  return <Component data-motion="reveal" className={className} initial={{ opacity: 0, y: 28, filter: "blur(5px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: reduced ? 0 : 0.78, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</Component>;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]" aria-hidden="true"><motion.div className="h-full origin-left bg-acid" style={{ scaleX }} /></div>;
}

export function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (reduced) {
      const frame = requestAnimationFrame(() => setCount(value));
      return () => cancelAnimationFrame(frame);
    }
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const duration = 1500;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);
  return <span ref={ref} aria-label={`${prefix}${value.toFixed(decimals)}${suffix}`}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow mb-5">{children}</p>; }

export function Marquee() {
  const tags = ["Perfume", "Cosmetics", "Apparel", "Home goods", "DTC", "Shopify Plus", "Klaviyo", "US", "EU", "UK"];
  return <div className="overflow-hidden border-y border-black/10 py-5" aria-label="Markets and platforms"><div className="marquee-track flex w-max gap-8" aria-hidden="true">{[...tags, ...tags, ...tags, ...tags].map((tag, index) => <span key={`${tag}-${index}`} className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[.12em] text-ink/70">{tag}<span className="h-2 w-2 rounded-full bg-acid" /></span>)}</div></div>;
}
