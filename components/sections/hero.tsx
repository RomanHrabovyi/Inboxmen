"use client";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Mail, MousePointer2, TrendingUp } from "lucide-react";

export function Hero() {
  const reduced = useReducedMotion();
  const initial = { opacity: 0, y: 24 };
  return <section id="top" className="container-shell relative grid min-h-[760px] items-center gap-12 pb-20 pt-32 lg:min-h-[820px] lg:grid-cols-[1.1fr_.9fr] lg:pt-36">
    <motion.div data-motion="intro" initial={initial} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .7, delay: .05 }} className="relative z-10">
      <p className="eyebrow mb-7">Klaviyo & retention · Shopify</p>
      <h1 className="display-title max-w-[780px] max-[640px]:text-[34px]">Email &amp; Retention<br />for <span className="relative">Shopify Brands.<span className="absolute -bottom-1 left-0 -z-10 h-[.24em] w-full bg-acid" /></span></h1>
      <p className="body-copy mt-7 max-w-[570px] text-lg">Klaviyo flows and campaigns that turn subscribers into repeat buyers — up to 28.5% of store revenue, 68% of it on autopilot.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="focus-ring inline-flex items-center rounded-full bg-acid px-6 py-4 font-bold transition hover:-translate-y-1 hover:shadow-lg">Get a free audit <ArrowUpRight className="ml-2 h-4 w-4" /></a><a href="#pricing" className="focus-ring inline-flex items-center rounded-full border border-ink/20 px-6 py-4 font-semibold transition hover:-translate-y-1 hover:border-ink">See pricing <ArrowDownRight className="ml-2 h-4 w-4" /></a></div>
      <p className="mt-5 text-sm text-muted">Free audit · a clear action plan · no commitment.</p>
    </motion.div>
    <motion.div data-motion="intro" initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: reduced ? 0 : .8, delay: .2 }} className="relative mx-auto flex min-h-[390px] w-full max-w-[540px] items-center justify-center lg:min-h-[520px]" aria-label="Illustration of a Klaviyo retention dashboard">
      <motion.div data-motion="hero-shape" animate={{ rotate: [-6, -3, -6], scale: [.98, 1.02, .98] }} transition={{ duration: reduced ? 0 : 16, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }} className="absolute h-[82%] w-[82%] rotate-[-6deg] rounded-[42%_58%_52%_48%/47%_44%_56%_53%] bg-acid/70" />
      <div className="relative w-[88%] max-w-[460px] rotate-[2deg] rounded-[28px] bg-ink p-4 text-white shadow-2xl sm:p-6" data-ui="retention-dashboard">
        <div className="flex items-center justify-between border-b border-white/15 pb-4"><div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full bg-acid text-ink"><Mail size={16} /></span><div><p className="text-sm font-semibold">Retention overview</p><p className="text-[11px] text-white/55">Illustrative dashboard</p></div></div><span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Demo view</span></div>
        <div className="grid grid-cols-2 gap-3 py-4"><div className="rounded-2xl bg-white/8 p-4"><p className="text-xs text-white/55">Email + SMS share</p><p className="mt-2 text-2xl font-semibold tracking-tight">28.5%</p><p className="mt-1 text-xs text-acid">of store revenue</p></div><div className="rounded-2xl bg-white/8 p-4"><p className="text-xs text-white/55">Automated share</p><p className="mt-2 text-2xl font-semibold tracking-tight">68%</p><p className="mt-1 text-xs text-white/55">of email + SMS revenue</p></div></div>
        <div className="rounded-2xl bg-white/5 p-4"><div className="flex items-center justify-between"><p className="text-sm font-medium">Revenue by channel</p><TrendingUp size={16} className="text-acid" /></div><svg viewBox="0 0 360 96" className="mt-4 h-24 w-full" role="img" aria-label="Rising email revenue trend line"><path d="M0 78 C30 72 39 80 64 62 S106 70 131 50 S171 54 199 36 S244 53 269 28 S316 37 360 8" fill="none" stroke="#0B99E0" strokeWidth="4" strokeLinecap="round"/><path d="M0 78 C30 72 39 80 64 62 S106 70 131 50 S171 54 199 36 S244 53 269 28 S316 37 360 8 L360 96 L0 96Z" fill="#0B99E0" opacity=".12"/></svg></div>
        <motion.div data-motion="floating" animate={{ y: [0, -8, 0] }} transition={{ duration: reduced ? 0 : 4, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }} className="absolute -right-4 top-10 flex items-center gap-3 rounded-2xl bg-white p-4 text-ink shadow-lg sm:-right-8"><span className="grid h-9 w-9 place-items-center rounded-full bg-acid"><MousePointer2 size={17} /></span><div><p className="text-xs text-muted">Conversion-rate lift</p><p className="font-bold">+12%</p></div></motion.div>
      </div>
      <span className="absolute bottom-2 left-4 hidden rounded-full bg-white px-4 py-2 text-xs font-medium shadow md:block">Strategy → creative → revenue</span>
    </motion.div>
  </section>;
}
