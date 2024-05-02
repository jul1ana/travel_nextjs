import { About } from "@/components/About";
import { Business } from "@/components/Business";
import { Feats } from "@/components/Feats";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <div className="space-y-20">
        <Hero />
        <Business />
        <About />
        <Services />
      </div>
      <Feats />
    </main>
  );
}
