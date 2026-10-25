import { services } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/motion";

export function Services() {
  return <section className="section-pad bg-ink text-white dark-section" id="services"><div className="container-shell"><Reveal><SectionEyebrow>What I do</SectionEyebrow><div className="grid gap-8 md:grid-cols-[1fr_.7fr] md:items-end"><h2 className="section-title max-w-[720px]">Everything your Klaviyo account needs.</h2><p className="max-w-[430px] text-base leading-relaxed text-white/65">From the first account setup to the monthly details that make retention compound.</p></div></Reveal>
    <div className="mt-14 grid overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">{services.map(({ number, title, description, icon: Icon }, index) => <Reveal key={number} as="article" delay={(index % 5) * .05} className="group min-h-[226px] border-b border-r border-white/10 bg-ink p-5 transition-colors duration-300 hover:bg-white hover:text-ink"><div className="flex items-start justify-between"><span className="text-xs font-semibold tracking-[.14em] text-white/45 group-hover:text-muted">{number}</span><Icon size={20} className="text-acid group-hover:text-ink" strokeWidth={1.8} /></div><h3 className="mt-9 text-lg font-semibold tracking-[-.03em]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/60 group-hover:text-muted">{description}</p></Reveal>)}</div>
  </div></section>;
}
