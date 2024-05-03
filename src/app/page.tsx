import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Business } from "@/components/Business";
import { CaseStudies } from "@/components/CaseStudies";
import { Feats } from "@/components/Feats";
import { Hero } from "@/components/Hero";
import { Members } from "@/components/Members";
import { MiniMap } from "@/components/MiniMap";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

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
      <Testimonials />
      <Blog />
      <MiniMap />
    </main>
  );
}
