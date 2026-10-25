import {
  Activity, BarChart3, Brush, ClipboardCheck, FlaskConical, Megaphone,
  MousePointerClick, Settings2, ShieldCheck, UsersRound, type LucideIcon,
} from "lucide-react";

export const services: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  { number: "01", title: "Email Marketing Audit", description: "Find revenue leaks and prioritize fixes by their potential impact.", icon: ClipboardCheck },
  { number: "02", title: "Klaviyo Setup", description: "A clean account, connected integrations and solid foundations.", icon: Settings2 },
  { number: "03", title: "Email Flows", description: "Welcome, cart, post-purchase, win-back and the journeys between.", icon: Activity },
  { number: "04", title: "Email Campaigns", description: "Useful newsletters and promotions on a thoughtful calendar.", icon: Megaphone },
  { number: "05", title: "Segmentation", description: "Give each subscriber a message that fits their behaviour.", icon: UsersRound },
  { number: "06", title: "Deliverability", description: "Keep lists healthy and improve the odds of reaching the inbox.", icon: ShieldCheck },
  { number: "07", title: "List Growth", description: "Signup forms and pop-ups that welcome the right subscribers.", icon: MousePointerClick },
  { number: "08", title: "A/B Testing", description: "Learn what works across subject lines, creative and timing.", icon: FlaskConical },
  { number: "09", title: "Analytics & Reporting", description: "A clear view of email revenue, customer value and churn.", icon: BarChart3 },
  { number: "10", title: "Email Design & Content", description: "On-brand design and copy made to move customers to act.", icon: Brush },
];

export type Plan = { name: string; price: string; cadence: string; summary: string; features: string[]; popular?: boolean };
export const monthlyPlans: Plan[] = [
  { name: "Campaign Starter", price: "$450", cadence: "/mo", summary: "A steady rhythm your subscribers can count on.", features: ["4 email campaigns / month", "Copy + design on approved template", "Audience segmentation", "Sending + short monthly report"] },
  { name: "Retention Growth", price: "$900", cadence: "/mo", summary: "A stronger campaign program with flow optimization.", features: ["4 campaigns / month", "Optimize existing flows", "1 A/B test / month", "Segmentation + reporting"], popular: true },
  { name: "Retention Management", price: "From $800", cadence: "/mo", summary: "Ongoing hands-on support for your retention channel.", features: ["Campaigns + flow optimization", "Audience segmentation", "Testing + full reporting", "Priority support"] },
];
export const setupPlans: Plan[] = [
  { name: "Single Flow", price: "From $150", cadence: "one-time", summary: "Build one useful customer journey, end to end.", features: ["One automation flow of your choice", "Copy + template-based design", "Triggers and filters", "QA + testing"] },
  { name: "Flow Starter", price: "$450", cadence: "one-time", summary: "Get the essential journeys working together.", features: ["Welcome, Abandoned Cart, Post-Purchase", "6–8 emails total", "Setup + testing", "Logic check"], popular: true },
  { name: "Klaviyo Setup", price: "From $350", cadence: "one-time", summary: "A thoughtful foundation for a new Klaviyo account.", features: ["Full Klaviyo setup from scratch", "2–3 flows + base logic", "Deliverability basics", "Forms + segmentation setup"] },
];

export const stats = [
  { value: 28.5, suffix: "%", label: "email + SMS share of store revenue", decimals: 1 },
  { value: 68, suffix: "%", label: "of that revenue from automated flows" },
  { value: 12, prefix: "+", suffix: "%", label: "conversion-rate lift" },
  { value: 100, suffix: "k+", label: "customer records managed" },
  { value: 10, suffix: "k+", label: "products across Shopify Plus" },
  { value: 5, label: "languages in one Welcome flow" },
];
