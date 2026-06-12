import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";
import Hero from "./_components/Hero";
import PricingSection from "./_components/PricingSection";
import FAQ from "./_components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PricingSection />
      <FAQ />
    </main>
  );
}
