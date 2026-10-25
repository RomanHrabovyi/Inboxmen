import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { Reveal, SectionEyebrow } from "@/components/motion";

export function About() {
  return <section className="section-pad container-shell scroll-mt-24" id="about">
    <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
      <Reveal className="relative mx-auto w-full max-w-[410px]">
        <div className="relative aspect-square overflow-hidden rounded-full bg-acid" role="img" aria-label="Roman, email and e-commerce specialist">
          <Image src="/roman-office.png" alt="Roman standing in a studio and holding a tablet" fill sizes="(max-width: 768px) 80vw, 410px" className="object-cover object-[center_22%]" />
        </div>
        <span className="absolute bottom-5 right-0 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">10+ yrs</span>
      </Reveal>
      <Reveal>
        <SectionEyebrow>About</SectionEyebrow>
        <h2 className="section-title max-w-[700px]">Who you&apos;ll actually work with.</h2>
        <p className="body-copy mt-6 max-w-[680px]">I&apos;m Roman, an email and e-commerce specialist with 10+ years in the work. I build Klaviyo retention programs for DTC brands across the US, EU and UK — and stay close to the details from the first audit through the next test.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold"><MapPin size={16} /> US · EU · UK</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-acid px-4 py-3 text-sm font-semibold"><Sparkles size={16} /> 10+ years in email</span>
        </div>
      </Reveal>
    </div>
  </section>;
}

