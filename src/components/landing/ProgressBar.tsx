"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressBar() {
  const [progress, setProgress] = useState(13); // Start with a non-zero value

  useEffect(() => {
    const handleScroll = () => {
      const cta = document.getElementById("cta-section");
      if (!cta) return;

      const ctaPosition = cta.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (ctaPosition < windowHeight) {
        // When CTA is in view, animate to 100%
        setProgress(100);
      } else {
        const totalHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        // Cap progress at 99% before the CTA is visible
        const currentProgress = (scrollPosition / totalHeight) * 90;
        setProgress(Math.min(13 + currentProgress, 99));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 left-0 w-full z-50 p-4 bg-background/90 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0 text-center order-2 sm:order-1">
          <p className="font-headline text-sm font-bold text-primary whitespace-nowrap">
            Você está a 1 clique de liberar 50.000 artes
          </p>
        </div>
        <Progress value={progress} className="h-3 w-full order-1 sm:order-2" />
      </div>
    </div>
  );
}
