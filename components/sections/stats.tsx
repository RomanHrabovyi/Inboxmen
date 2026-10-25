import { stats } from "@/lib/data";
import { AnimatedCounter, Marquee, Reveal } from "@/components/motion";

export function Stats() {
  return <section aria-label="Retention marketing benchmarks" className="border-y border-black/10 bg-white/60">
    <div className="container-shell grid grid-cols-2 gap-0 py-7 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat, index) => <Reveal key={stat.label} delay={index * .06} className="px-3 py-4 sm:px-5"><p className="text-3xl font-bold tracking-[-.06em] sm:text-4xl"><AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} /></p><p className="mt-2 max-w-40 text-xs leading-relaxed text-muted sm:text-sm">{stat.label}</p></Reveal>)}
    </div><Marquee />
  </section>;
}
