"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Reveal, SectionEyebrow } from "@/components/motion";

type Layout = "welcome" | "editorial" | "offer" | "cart" | "reviews" | "launch" | "education" | "testimonial" | "winback" | "restock";
type EmailDesign = {
  layout: Layout;
  category: string;
  title: string;
  subject: string;
  headline: string;
  copy: string;
  button: string;
  why: string;
  image: number;
  products: [number, number];
  accent: string;
  paper: string;
  ink: string;
  source: string;
};

const gallery = "https://in-box.com/our-designs";
const designs: EmailDesign[] = [
  { layout:"welcome", category:"Welcome", title:"A thoughtful first hello", subject:"A considered start", headline:"Good things begin with a thoughtful choice.", copy:"A small introduction to the pieces we return to, made to feel useful from the first day.", button:"Meet the essentials", why:"A product-led welcome gives new subscribers an immediate next step. A clear first-order benefit can turn fresh interest into a first purchase.", image:0, products:[0,2], accent:"#0B99E0", paper:"#F7F5F0", ink:"#1D2730", source:gallery },
  { layout:"editorial", category:"Editorial campaign", title:"Lead with a story worth opening", subject:"A note for the slower days", headline:"Make a little room for better rituals.", copy:"Soft textures, warm light, and a few pieces chosen to make an ordinary morning feel considered.", button:"Read the short edit", why:"An editorial lead gives the campaign a reason to be read. The product follows naturally from the story instead of arriving as a catalogue dump.", image:7, products:[4,6], accent:"#A8B8AB", paper:"#F4F1EA", ink:"#202720", source:gallery },
  { layout:"offer", category:"First-order offer", title:"Make the first order easy to say yes to", subject:"A little something for your first order", headline:"A better everyday starts here.", copy:"Explore the collection, find your favorite, and enjoy a thoughtful welcome on your first order.", button:"Use your welcome offer", why:"The offer is visible early and attached to a focused product story. That removes a common first-purchase hesitation without discounting every future email.", image:2, products:[2,0], accent:"#DCE9E5", paper:"#F8F8F4", ink:"#202820", source:gallery },
  { layout:"cart", category:"Abandoned cart", title:"Put the chosen item back in reach", subject:"Your selection is still here", headline:"Still thinking it over?", copy:"Your saved selection is ready when you are. Take another look at the details, then pick up right where you left off.", button:"Return to your selection", why:"Showing the exact product restores context and shortens the route back to checkout. A single direct action keeps the reminder focused.", image:3, products:[3,4], accent:"#172F7A", paper:"#F5F6F7", ink:"#1F2833", source:gallery },
  { layout:"reviews", category:"Cart + social proof", title:"Answer the last question with proof", subject:"A few kind words from people who tried it", headline:"Loved for the details that matter.", copy:"A closer look at the feel, fit, and everyday use—plus a note from someone who already made it part of their routine.", button:"See your saved item", why:"A review near the product reminder addresses uncertainty while purchase intent is still active. Specific proof often carries more weight than another urgency line.", image:5, products:[5,3], accent:"#E9C56A", paper:"#FBF8F0", ink:"#25251F", source:gallery },
  { layout:"launch", category:"Product launch", title:"Give a new arrival a clear moment", subject:"Meet what is new", headline:"A fresh find, made for daily use.", copy:"Thoughtful details, a lighter feel, and a simple place in your everyday rotation. Take a first look at what just arrived.", button:"Explore the new arrival", why:"One hero product, a few useful benefits, and a focused CTA help a launch email turn attention into product-page visits and first orders.", image:8, products:[8,9], accent:"#D7E8F0", paper:"#F4F7F8", ink:"#1B2D38", source:gallery },
  { layout:"education", category:"Product education", title:"Show why the ingredients matter", subject:"A closer look at what goes in", headline:"Good ingredients. Clear reasons.", copy:"A simple guide to the details behind the formula, what each one does, and how to make it part of a routine.", button:"Explore the formula", why:"Education makes the product easier to compare and understand. It can resolve practical objections before the shopper reaches checkout.", image:2, products:[2,0], accent:"#C8DCCB", paper:"#F3F7F1", ink:"#263529", source:gallery },
  { layout:"testimonial", category:"Customer story", title:"Let a real experience do the talking", subject:"A note from someone who made it part of home", headline:"“It just feels right here.”", copy:"A considered choice, used every day. A short customer story gives the product a place in real life, beyond the studio photo.", button:"See the piece in detail", why:"A customer story provides social proof in a memorable format. It can help a shopper picture ownership and lower the risk of trying something new.", image:6, products:[6,7], accent:"#C1D3E0", paper:"#F4F6F5", ink:"#24313A", source:gallery },
  { layout:"winback", category:"Win-back", title:"Give a lapsed customer a reason to return", subject:"A small reason to come back", headline:"It has been a while. Here's a little welcome back.", copy:"Take another look at the collection and enjoy a returning-customer offer on your next favorite.", button:"Come back to the collection", why:"A relevant return offer gives lapsed customers a concrete reason to re-engage. Targeting keeps the incentive focused on people who have drifted away.", image:9, products:[9,10], accent:"#F0C992", paper:"#FBF4E9", ink:"#2F271D", source:gallery },
  { layout:"restock", category:"Back in stock", title:"Turn renewed availability into action", subject:"The one you wanted is back", headline:"Back on the shelf, and ready when you are.", copy:"The popular essential has returned. Take a fresh look while your preferred option is available.", button:"Shop the restock", why:"A restock message reaches shoppers who already raised their hand. Showing the product and making availability clear captures existing intent.", image:1, products:[1,3], accent:"#CBD5E2", paper:"#F3F5F8", ink:"#242D39", source:gallery },
];

function Photo({ index, label, className }: { index: number; label: string; className: string }) {
  const column = index % 3;
  const row = Math.floor(index / 3);
  const x = [0, 50, 100][column];
  const y = [0, 33.333, 66.667, 100][row];
  return <div role="img" aria-label={label} className={className} style={{ backgroundImage:"url('/email-campaign-contact-sheet.png')", backgroundSize:"300% 400%", backgroundPosition:x + "% " + y + "%", backgroundRepeat:"no-repeat" }} />;
}

function EmailPreview({ design, index }: { design: EmailDesign; index: number }) {
  const button = <span className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-5 text-[10px] font-semibold text-white" style={{ backgroundColor:design.accent }}>{design.button}<ArrowUpRight size={12} /></span>;
  const grid = <div className="mt-5 grid grid-cols-2 gap-3">{design.products.map((photo, i) => <div key={photo} className="min-w-0"><Photo index={photo} label={"Unbranded product photograph " + (i + 1)} className="aspect-square rounded-[10px]" /><p className="mt-2 text-[9px] font-semibold">{i === 0 ? "Made for the everyday" : "A considered favorite"}</p><p className="mt-1 text-[8px] text-black/45">Explore details ↗</p></div>)}</div>;
  const intro = <><p className="text-[9px] font-semibold uppercase tracking-[.18em] text-black/45">{design.category}</p><h4 className="mt-2 text-[clamp(27px,3.4vw,38px)] font-semibold leading-[1.02] tracking-[-.055em]">{design.headline}</h4></>;
  const paragraph = <p className="mt-3 max-w-[370px] text-[12px] leading-relaxed text-black/65">{design.copy}</p>;
  let body;

  switch (design.layout) {
    case "welcome":
      body = <div className="px-5 pb-6 pt-4 sm:px-7"><div className="rounded-[12px] p-5 text-center" style={{backgroundColor:design.paper}}><p className="text-[9px] font-semibold uppercase tracking-[.22em] text-black/45">A considered start</p><h4 className="mx-auto mt-4 max-w-[320px] font-serif text-[clamp(30px,3.5vw,41px)] leading-[1.02]">{design.headline}</h4><p className="mx-auto mt-3 max-w-[330px] text-[12px] leading-relaxed text-black/60">{design.copy}</p>{button}<Photo index={design.image} label="Still-life product photograph" className="mt-5 aspect-[1.55/1] rounded-[10px]" /></div>{grid}</div>;
      break;
    case "editorial":
      body = <div className="px-5 pb-6 pt-5 sm:px-7"><div className="flex items-center justify-between text-[9px] uppercase tracking-[.17em] text-black/45"><span>A note for you</span><span>Selected with care</span></div><div className="mt-5 grid grid-cols-[1.15fr_.85fr] items-center gap-4"><div>{intro}{paragraph}{button}</div><Photo index={design.image} label="Editorial home still life" className="aspect-[.74/1] rounded-[10px]" /></div><div className="mt-6 border-t border-black/10 pt-4"><p className="text-[9px] uppercase tracking-[.18em] text-black/45">Inside this edit</p>{grid}</div></div>;
      break;
    case "offer":
      body = <div className="px-4 pb-5 pt-4 sm:px-6"><div className="overflow-hidden rounded-[12px]" style={{backgroundColor:design.paper}}><div className="px-5 pb-5 pt-6 text-center"><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-black/45">A welcome, with a little extra</p><h4 className="mx-auto mt-3 max-w-[330px] text-[clamp(29px,3.5vw,40px)] font-semibold leading-[1.02] tracking-[-.05em]">{design.headline}</h4><p className="mt-2 text-sm font-semibold" style={{color:design.accent}}>15% off your first order</p>{button}</div><Photo index={design.image} label="Skincare product still life" className="aspect-[1.5/1]" /><div className="px-5 pb-5 pt-4 text-center"><p className="mx-auto max-w-[330px] text-[12px] leading-relaxed text-black/60">{design.copy}</p><p className="mt-3 border-y border-black/10 py-3 text-[9px] uppercase tracking-[.16em]">Use your welcome code at checkout</p></div></div>{grid}</div>;
      break;
    case "cart":
      body = <div className="px-5 pb-6 pt-5 sm:px-7"><p className="text-center text-[9px] font-semibold uppercase tracking-[.2em] text-black/45">Saved for later</p><div className="mt-4 text-center">{intro}</div><div className="mt-5 flex items-center gap-4 rounded-[12px] border border-black/10 bg-white p-3"><Photo index={design.image} label="Saved product photograph" className="aspect-square w-[36%] shrink-0 rounded-[8px]" /><div className="min-w-0"><p className="text-[9px] uppercase tracking-[.16em] text-black/45">Your selection</p><p className="mt-2 text-sm font-semibold">The detail you liked</p><p className="mt-1 text-[10px] leading-relaxed text-black/55">Ready to pick up whenever you are.</p><p className="mt-3 text-xs font-semibold">$68.00</p></div></div><div className="mt-4 text-center">{paragraph}{button}</div><p className="mt-4 text-center text-[9px] text-black/45">Shipping and returns details are easy to find at checkout.</p></div>;
      break;
    case "reviews":
      body = <div className="px-5 pb-6 pt-5 sm:px-7"><div className="text-center">{intro}{paragraph}</div><Photo index={design.image} label="Lifestyle product photograph" className="mt-5 aspect-[1.55/1] rounded-[10px]" /><div className="mt-4 rounded-[10px] p-4 text-center" style={{backgroundColor:design.paper}}><div className="flex justify-center gap-1" style={{color:design.accent}}>{Array.from({length:5},(_,i)=><Star key={i} size={12} fill="currentColor" />)}</div><p className="mt-2 font-serif text-lg italic">“Better than expected, and lovely to use every day.”</p><p className="mt-2 text-[9px] uppercase tracking-[.16em] text-black/45">Verified customer</p></div><div className="text-center">{button}</div></div>;
      break;
    case "launch":
      body = <div className="px-4 pb-5 pt-4 sm:px-6"><div className="relative overflow-hidden rounded-[12px] text-white" style={{backgroundColor:design.ink}}><Photo index={design.image} label="New product launch still life" className="aspect-[1.1/1] w-full opacity-90" /><div className="p-5 sm:p-6"><p className="text-[9px] uppercase tracking-[.2em] text-white/55">Just arrived</p><h4 className="mt-2 font-serif text-[clamp(30px,3.4vw,40px)] leading-[1.02]">{design.headline}</h4><p className="mt-3 max-w-[350px] text-[12px] leading-relaxed text-white/70">{design.copy}</p><span className="mt-4 inline-flex rounded-full px-5 py-3 text-[10px] font-semibold text-white" style={{backgroundColor:design.accent}}>Explore the new arrival ↗</span></div></div>{grid}</div>;
      break;
    case "education":
      body = <div className="px-5 pb-6 pt-5 sm:px-7"><div>{intro}{paragraph}</div><Photo index={design.image} label="Skincare ingredients and product photograph" className="mt-5 aspect-[1.65/1] rounded-[10px]" /><div className="mt-4 grid grid-cols-3 gap-3 border-y border-black/10 py-4 text-center"><div><span className="text-lg font-semibold">01</span><p className="mt-1 text-[9px] leading-snug">What it is</p></div><div><span className="text-lg font-semibold">02</span><p className="mt-1 text-[9px] leading-snug">Why it helps</p></div><div><span className="text-lg font-semibold">03</span><p className="mt-1 text-[9px] leading-snug">How to use it</p></div></div><div className="text-center">{button}</div></div>;
      break;
    case "testimonial":
      body = <div className="px-4 pb-5 pt-4 sm:px-6"><Photo index={design.image} label="Home collection lifestyle photograph" className="aspect-[1.35/1] rounded-[10px]" /><div className="px-4 py-5 text-center sm:px-7"><p className="text-[9px] font-semibold uppercase tracking-[.18em] text-black/45">A customer note</p><h4 className="mt-3 font-serif text-[clamp(30px,3.6vw,42px)] italic leading-[1.02]">{design.headline}</h4><p className="mx-auto mt-3 max-w-[330px] text-[12px] leading-relaxed text-black/60">{design.copy}</p><p className="mt-4 text-[9px] uppercase tracking-[.16em] text-black/45">From a recent order</p>{button}</div><div className="border-t border-black/10 px-5 pt-4">{grid}</div></div>;
      break;
    case "winback":
      body = <div className="px-4 pb-5 pt-4 sm:px-6"><div className="rounded-[12px] px-5 pb-6 pt-6 text-center" style={{backgroundColor:design.paper}}><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-black/45">A little something, just for you</p><h4 className="mx-auto mt-3 max-w-[340px] font-serif text-[clamp(29px,3.5vw,40px)] leading-[1.02]">{design.headline}</h4><p className="mx-auto mt-3 max-w-[330px] text-[12px] leading-relaxed text-black/60">{design.copy}</p><div className="mx-auto mt-4 max-w-[230px] border-y border-dashed border-black/25 py-3 text-sm font-semibold tracking-[.14em]">WELCOME BACK</div>{button}<p className="mt-3 text-[9px] text-black/45">A small thank-you on your next order</p></div><Photo index={design.image} label="Chocolate product campaign photograph" className="mt-3 aspect-[1.55/1] rounded-[10px]" /></div>;
      break;
    case "restock":
      body = <div className="px-5 pb-6 pt-5 sm:px-7"><div className="text-center">{intro}<p className="mt-2 text-[10px] font-semibold uppercase tracking-[.14em]" style={{color:design.accent}}>Available again · limited quantities</p></div><Photo index={design.image} label="Perfume product still life" className="mt-5 aspect-[1.55/1] rounded-[10px]" /><div className="mt-4 flex items-center justify-between border-y border-black/10 py-3 text-[10px]"><span>Everyday essential</span><span className="font-semibold">$84.00</span></div><p className="mt-3 text-center text-[12px] leading-relaxed text-black/60">{design.copy}</p><div className="text-center">{button}</div></div>;
      break;
  }

  return <div className="mx-auto max-w-[460px] overflow-hidden rounded-[20px] bg-white shadow-xl" style={{backgroundColor:design.paper,color:design.ink}}>
    <div className="flex items-center justify-between border-b border-black/[.08] px-5 py-3 text-[9px] uppercase tracking-[.16em] text-black/40"><span>{design.category}</span><span>{String(index+1).padStart(2,"0")} / 10</span></div>
    {body}
    <div className="border-t border-black/[.08] px-5 py-3 text-center text-[8px] text-black/40">Manage preferences&nbsp;&nbsp;·&nbsp;&nbsp;Unsubscribe</div>
  </div>;
}

export function EmailDesignSlider() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const design = designs[active];
  const change = (step: number) => setActive(current => (current + step + designs.length) % designs.length);

  return <section id="email-designs" className="mt-24 scroll-mt-24" aria-label="Ten curated email design references">
    <Reveal>
      <SectionEyebrow>Email design references</SectionEyebrow>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h3 className="section-title max-w-[700px]">Ten emails, each with a reason.</h3>
        <p className="max-w-[420px] text-sm leading-relaxed text-muted">Recreated as clean, brand-free previews from published welcome, cart, post-purchase, and campaign references.</p>
      </div>
    </Reveal>

    <div className="mt-8 overflow-hidden rounded-[28px] bg-ink p-3 text-white sm:p-6 lg:p-8">
      <div className="mb-4 flex items-center gap-4 border-b border-white/15 px-1 pb-4 lg:hidden">
        <button type="button" onClick={()=>change(-1)} aria-label="Previous email design" className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition hover:border-acid hover:text-acid"><ArrowLeft size={16} /></button>
        <button type="button" onClick={()=>change(1)} aria-label="Next email design" className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full bg-acid text-ink transition hover:scale-105"><ArrowRight size={16} /></button>
        <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/15" role="progressbar" aria-label="Email designs" aria-valuemin={1} aria-valuemax={10} aria-valuenow={active+1}>
          <div className="h-full rounded-full bg-acid transition-all duration-300" style={{width:((active+1)*10)+"%"}} />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_.9fr] lg:items-stretch lg:gap-10">
        <div className="rounded-[20px] bg-[#e6e3db] p-3 sm:p-5">
          <div className="h-[min(70vh,720px)] min-h-[540px] overflow-y-auto overscroll-contain rounded-[14px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active} data-motion="email-slide" initial={{opacity:0,x:reduced?0:16}} animate={{opacity:1,x:0}} exit={{opacity:0,x:reduced?0:-12}} transition={{duration:reduced?0:.28,ease:[.22,1,.36,1]}}>
                <EmailPreview design={design} index={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col px-1 py-2 sm:px-2 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-acid">{design.category}</p>
            <p className="text-xs tabular-nums text-white/45">{String(active+1).padStart(2,"0")} / 10</p>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={"insight-"+active} data-motion="email-caption" initial={{opacity:0,y:reduced?0:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduced?0:-6}} transition={{duration:reduced?0:.22}}>
              <h4 className="mt-3 text-2xl font-semibold tracking-[-.05em] sm:text-3xl">{design.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-white/60">“{design.subject}”</p>
              <div className="mt-6 border-t border-white/15 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/45">Why it earns</p>
                <p className="mt-3 max-w-[450px] text-sm leading-relaxed text-white/75">{design.why}</p>
              </div>
              <a className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:text-acid hover:decoration-acid" href={design.source} target="_blank" rel="noreferrer">See the public design references <ArrowUpRight size={13} /></a>
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto hidden items-center justify-between gap-5 border-t border-white/15 pt-5 lg:flex">
            <div className="flex items-center gap-2">
              <button type="button" onClick={()=>change(-1)} aria-label="Previous email design" className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-acid hover:text-acid"><ArrowLeft size={16} /></button>
              <button type="button" onClick={()=>change(1)} aria-label="Next email design" className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-acid text-ink transition hover:scale-105"><ArrowRight size={16} /></button>
            </div>
            <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/15" role="progressbar" aria-label="Email designs" aria-valuemin={1} aria-valuemax={10} aria-valuenow={active+1}>
              <div className="h-full rounded-full bg-acid transition-all duration-300" style={{width:((active+1)*10)+"%"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className="mt-3 text-[11px] leading-relaxed text-muted">These previews use original sample copy and unbranded product imagery. The linked public gallery is the visual source; revenue notes explain the strategy without assigning outside performance data to these recreated layouts.</p>
  </section>;
}
