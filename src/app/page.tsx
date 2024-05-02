import { About } from "@/components/About";
import { Business } from "@/components/Business";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="space-y-20 my-10">
      <Hero />
      <Business />
      <About />
    </main>
  );
}
