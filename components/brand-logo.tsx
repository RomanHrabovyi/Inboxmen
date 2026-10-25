type BrandLogoProps = { inverse?: boolean; className?: string };

export function BrandLogo({ inverse = false, className = "" }: BrandLogoProps) {
  return <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" className="h-9 w-9 shrink-0">
      <rect width="64" height="64" rx="18" fill="#0B99E0" />
      <rect x="14" y="20" width="36" height="26" rx="3" fill="white" />
      <path d="m15.5 21.5 16.5 13 16.5-13" stroke="#0B99E0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m15.5 44 11-9m22 9-11-9" stroke="#0B99E0" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
    <span className={`text-xl font-black tracking-[-.08em] ${inverse ? "text-white" : "text-ink"}`}>INBOX<span className="text-acid">M</span>EN</span>
  </span>;
}
