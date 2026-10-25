import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { Audience } from "@/components/sections/audience";
import { Results } from "@/components/sections/results";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/motion";

export default function Home() {
  return <><ScrollProgress /><Header /><main><Hero /><Stats /><Problem /><Services /><Audience /><Results /><Process /><Pricing /><About /><Contact /></main><Footer /></>;
}
