import { ArrowUpRight, BarChart3, Mail, MousePointerClick } from "lucide-react";
import { Reveal, SectionEyebrow } from "@/components/motion";
import { EmailDesignSlider } from "@/components/email-design-slider";

const proof = [
  { value: "$1.49M", label: "total revenue · $344K from email", kind: "revenue" },
  { value: "+103.95%", label: "attributed conversions", kind: "conversions" },
  { value: "54% open", label: "8.9% click · Post-Purchase flow", kind: "flow" },
];
function MockDashboard({ kind }: { kind: string }) {
  return <div data-ui="mock-dashboard" className="relative min-h-[210px] overflow-hidden rounded-2xl bg-[#111] p-5 text-white"><div className="flex items-center justify-between"><div className="flex items-center gap-2 text-xs text-white/65"><span className="h-2 w-2 rounded-full bg-acid" /> Klaviyo performance view</div><ArrowUpRight size={15} className="text-acid" /></div><div className="mt-7 flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-widest text-white/40">{kind === "flow" ? "Flow health" : "Attributed revenue"}</p><p className="mt-1 text-3xl font-semibold tracking-tight">{kind === "flow" ? "Welcome → repeat" : kind === "conversions" ? "+103.95%" : "$344,000"}</p></div><BarChart3 className="text-acid" size={26} /></div><svg viewBox="0 0 340 78" className="mt-3 h-[78px] w-full" role="img" aria-label="Illustrative analytics chart placeholder"><path d="M0 68 C30 66 42 57 66 60 S105 46 130 53 S176 30 201 41 S243 26 268 30 S310 12 340 6" fill="none" stroke="#0B99E0" strokeWidth="3"/><path d="M0 68 C30 66 42 57 66 60 S105 46 130 53 S176 30 201 41 S243 26 268 30 S310 12 340 6 L340 78 L0 78Z" fill="#0B99E0" opacity=".15"/></svg><span className="absolute bottom-3 right-4 text-[9px] uppercase tracking-[.12em] text-white/35">Illustrative slot · replace with Klaviyo screenshot</span></div>;
}
export function Results() { return <section className="section-pad bg-[#efefe9]" id="results"><div className="container-shell"><Reveal><SectionEyebrow>Results</SectionEyebrow><div className="grid gap-8 md:grid-cols-[1fr_.7fr] md:items-end"><h2 className="section-title max-w-[600px]">Make retention measurable.</h2><p className="body-copy max-w-[440px]">Selected performance snapshots supplied for this portfolio. Dashboard panels are illustrative placeholders; the email previews below are rebuilt from published design references.</p></div></Reveal>
    <div className="mt-12 grid gap-4 lg:grid-cols-[.8fr_1.2fr]">{proof.map(({ value, label, kind }, i) => <Reveal key={value} delay={i * .08} as="article" className={`rounded-3xl p-7 ${i === 0 ? "bg-acid lg:row-span-3" : "bg-white"}`}><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-full bg-black/5">{i === 2 ? <Mail size={18} /> : <MousePointerClick size={18} />}</span><span className="text-xs font-semibold text-muted">0{i + 1}</span></div><p className="mt-7 text-4xl font-bold tracking-[-.07em]">{value}</p><p className="mt-2 text-sm text-ink/65">{label}</p><div className="mt-7"><MockDashboard kind={kind} /></div></Reveal>)}</div>
    <EmailDesignSlider />
  </div></section>; }
