import { About } from "@/components/About";
import { Business } from "@/components/Business";
import { CaseStudies } from "@/components/CaseStudies";
import { Feats } from "@/components/Feats";
import { Hero } from "@/components/Hero";
import { Members } from "@/components/Members";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="space-y-40">
      <Hero />
      <Business />
      <About />
      <Services />
      <Feats />
      <Members />
      <CaseStudies />
      <Plans />
    </main>
  );
}
