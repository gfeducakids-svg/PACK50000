'use client';
import { Benefits } from "@/components/landing/Benefits";
import { Cta } from "@/components/landing/Cta";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Guarantee } from "@/components/landing/Guarantee";
import { Hero } from "@/components/landing/Hero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { SocialProof } from "@/components/landing/SocialProof";
import { WhatYouGet } from "@/components/landing/WhatYouGet";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <Hero />
          <ProblemSolution />
          <WhatYouGet />
          <Benefits />
          <Cta />
          <SocialProof />
          <Guarantee />
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}
