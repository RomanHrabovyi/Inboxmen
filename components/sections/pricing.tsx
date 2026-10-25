"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import { monthlyPlans, setupPlans, type Plan } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/motion";

function PlanCard({ plan, index, reduced }: { plan: Plan; index: number; reduced: boolean | null }) {
  return <motion.article data-motion="pricing-card" initial={{ opacity: 0, y: 22, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduced ? 0 : .58, delay: reduced ? 0 : index * .09, ease: [0.22, 1, 0.36, 1] }} whileHover={reduced ? undefined : { y: -6 }} className={`relative flex h-full flex-col rounded-3xl p-6 ring-1 transition-shadow duration-300 hover:shadow-2xl sm:p-7 ${plan.popular ? "bg-ink text-white ring-acid" : "bg-white text-ink ring-black/5"}`}>
    {plan.popular && <span className="absolute -top-3 right-6 rounded-full bg-acid px-4 py-1.5 text-xs font-bold text-ink">Most Popular</span>}
    <p className={`text-xs font-semibold uppercase tracking-[.14em] ${plan.popular ? "text-white/50" : "text-muted"}`}>{plan.name}</p>
    <p className="mt-5 text-4xl font-bold tracking-[-.07em]">{plan.price}<span className={`ml-1 text-sm font-medium tracking-normal ${plan.popular ? "text-white/55" : "text-muted"}`}>{plan.cadence}</span></p>
    <p className={`mt-3 min-h-12 text-sm leading-relaxed ${plan.popular ? "text-white/65" : "text-muted"}`}>{plan.summary}</p>
    <div className={`my-6 h-px ${plan.popular ? "bg-white/15" : "bg-black/10"}`} />
    <ul className="flex-1 space-y-3">{plan.features.map(feature => <li key={feature} className="flex gap-2.5 text-sm leading-snug"><Check size={17} className="mt-0.5 shrink-0 text-acid" /><span>{feature}</span></li>)}</ul>
    <a href="#contact" className={`focus-ring mt-8 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${plan.popular ? "bg-acid !text-ink" : "bg-ink !text-white hover:bg-acid hover:!text-ink"}`}>Get started <ArrowUpRight size={15} className="ml-2" /></a>
  </motion.article>;
}

export function Pricing() {
  const [tab, setTab] = useState<"monthly" | "setup">("monthly");
  const reduced = useReducedMotion();
  const plans = tab === "monthly" ? monthlyPlans : setupPlans;
  return <section className="section-pad bg-ink text-white dark-section" id="pricing"><div className="container-shell"><Reveal><SectionEyebrow>Pricing</SectionEyebrow><div className="flex flex-wrap items-end justify-between gap-6"><h2 className="section-title max-w-[700px]">Straightforward support.<br className="hidden sm:block" /> Clear starting points.</h2><p className="max-w-[380px] text-sm leading-relaxed text-white/60">Choose the kind of help that fits what your store needs next.</p></div></Reveal>
    <Reveal className="mt-10 flex flex-col justify-between gap-5 rounded-3xl bg-acid p-6 text-ink sm:flex-row sm:items-center sm:p-8"><div><p className="text-xs font-bold uppercase tracking-[.14em]">Start with clarity</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.04em]">Free Klaviyo Audit <span className="font-medium">— $0</span></h3><p className="mt-2 text-sm text-ink/65">Get a focused review and a clear action plan for your account.</p></div><a href="#contact" className="focus-ring inline-flex shrink-0 items-center rounded-full bg-ink px-6 py-4 text-sm font-bold !text-white transition hover:-translate-y-1 hover:bg-white hover:!text-ink">Get my free audit <ArrowUpRight size={16} className="ml-2" /></a></Reveal>
    <div className="mt-10 flex flex-wrap items-center justify-between gap-5"><div className="inline-flex rounded-full bg-white/10 p-1.5" role="tablist" aria-label="Pricing type">{[["monthly", "Campaigns & Retention"], ["setup", "Setup & Flows"]].map(([value, label]) => <button key={value} id={`tab-${value}`} role="tab" aria-selected={tab === value} aria-controls="pricing-plans" onClick={() => setTab(value as "monthly" | "setup")} className={`focus-ring rounded-full px-4 py-3 text-sm font-semibold transition sm:px-6 ${tab === value ? "bg-acid text-ink" : "text-white/70 hover:text-white"}`}>{label}</button>)}</div><p className="text-xs text-white/45">{tab === "monthly" ? "Monthly retainers" : "One-time projects"}</p></div>
    <div id="pricing-plans" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-6 grid items-stretch gap-4 lg:grid-cols-3"><AnimatePresence mode="wait" initial={false}><motion.div data-motion="pricing" key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : .24 }} className="contents">{plans.map((plan, index) => <PlanCard key={plan.name} plan={plan} index={index} reduced={reduced} />)}</motion.div></AnimatePresence></div>
    <p className="mt-5 text-xs text-white/45">Starting prices. Final cost depends on scope, number of emails, design and account state.</p>
  </div></section>;
}
