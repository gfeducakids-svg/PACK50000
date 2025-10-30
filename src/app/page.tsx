import { Benefits } from "@/components/landing/Benefits";
import { Cta } from "@/components/landing/Cta";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Mechanism } from "@/components/landing/Mechanism";
import { Objections } from "@/components/landing/Objections";
import { ProgressBar } from "@/components/landing/ProgressBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <ProgressBar />
        <div className="pt-20">
          <Hero />
          <Objections />
          <Mechanism />
          <Benefits />
          <Cta />
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}
