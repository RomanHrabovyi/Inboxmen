import { AlertCircle, CalendarX2, ScanSearch } from "lucide-react";
import { Reveal, SectionEyebrow } from "@/components/motion";

const issues = [
  { icon: AlertCircle, title: "Flows half-built", copy: "A few automations are switched on, but key moments in the customer journey still go quiet." },
  { icon: CalendarX2, title: "Campaigns ad hoc", copy: "Promotions arrive when there is time, without a reliable plan or a clear audience." },
  { icon: ScanSearch, title: "No read on the data", copy: "Opens and clicks pile up, while the real contribution to repeat revenue stays fuzzy." },
];
export function Problem() {
  return <section className="section-pad container-shell" id="problem"><Reveal><SectionEyebrow>The problem</SectionEyebrow><div className="grid gap-8 md:grid-cols-[.95fr_1.05fr] md:items-end"><h2 className="section-title max-w-[650px]">You&apos;re leaving money in the inbox.</h2><p className="body-copy max-w-[480px] md:justify-self-end">An email program should do more than fill a calendar. It should make the next purchase easier to earn.</p></div></Reveal>
    <div className="mt-12 grid gap-4 md:grid-cols-3">{issues.map(({ icon: Icon, title, copy }, i) => <Reveal key={title} as="article" delay={i * .09} className="group min-h-[235px] rounded-3xl bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-acid"><Icon size={21} /></span><p className="mt-8 text-xs font-bold tracking-[.14em] text-muted">0{i + 1}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="body-copy mt-3 text-sm">{copy}</p></Reveal>)}</div>
  </section>;
}
