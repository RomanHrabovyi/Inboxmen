"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { BrandLogo } from "@/components/brand-logo";

const links = [["Services", "#services"], ["Pricing", "#pricing"], ["Results", "#results"], ["Process", "#process"], ["About", "#about"]];
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => { const update = () => setScrolled(window.scrollY > 24); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return <motion.header data-motion="intro" initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: reduced ? 0 : .55 }} className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-paper/95 shadow-sm backdrop-blur-md" : "bg-paper/75 backdrop-blur-sm"}`}>
    <nav className="container-shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
      <a className="focus-ring" href="#top" aria-label="INBOXMEN home"><BrandLogo /></a>
      <div className="hidden items-center gap-7 md:flex">{links.map(([label, href]) => <a key={label} href={href} className="focus-ring group relative py-2 text-sm font-medium text-ink/75 transition hover:text-ink">{label}<span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-acid transition-transform group-hover:scale-x-100" /></a>)}</div>
      <a href="#contact" className="focus-ring hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold !text-white transition hover:-translate-y-0.5 hover:bg-acid hover:!text-ink md:inline-flex">Get a free audit <span className="ml-2" aria-hidden="true">↗</span></a>
      <button type="button" onClick={() => setOpen(!open)} className="focus-ring inline-flex rounded-full p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div className="container-shell pb-5 md:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} href={href} className="block border-t border-black/10 py-3 text-base">{label}</a>)}<a onClick={() => setOpen(false)} href="#contact" className="mt-3 inline-flex rounded-full bg-acid px-5 py-3 font-semibold">Get a free audit ↗</a></div>}
  </motion.header>;
}
