import { CircleDollarSign, Layers3, Sparkles } from "lucide-react";
import { Reveal, SectionEyebrow } from "@/components/motion";
const audience = [
  { title: "An existing base", copy: "Turn the list you have into more relevant conversations and more second orders.", icon: CircleDollarSign },
  { title: "A fresh start", copy: "Set up the right foundations before your first serious subscriber wave arrives.", icon: Sparkles },
  { title: "Any catalog size", copy: "Keep a focused range clear, or bring structure to a large product catalog.", icon: Layers3 },
];
export function Audience() { return <section className="section-pad container-shell"><Reveal><SectionEyebrow>Who I work with</SectionEyebrow><h2 className="section-title max-w-[740px]">A retention partner for the next stage.</h2></Reveal><div className="mt-11 grid gap-4 md:grid-cols-3">{audience.map(({ title, copy, icon: Icon }, i) => <Reveal key={title} delay={i * .08} className={`rounded-3xl p-7 ${i === 1 ? "bg-acid" : "bg-white"}`}><Icon size={23} /><h3 className="mt-11 text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="body-copy mt-3 text-sm">{copy}</p></Reveal>)}</div></section>; }
