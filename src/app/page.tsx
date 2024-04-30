import { Business } from "@/components/Business";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="space-y-10 my-20">
      <Hero />
      <Business />
    </main>
  );
}
