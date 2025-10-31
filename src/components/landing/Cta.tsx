"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, DownloadCloud, Gift } from "lucide-react";

export function Cta() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 59,
    seconds: 59,
  });
  const [downloads, setDownloads] = useState(437);
  const [isSparkling, setIsSparkling] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    const downloadTimer = setInterval(() => {
      setDownloads((prev) =>
        Math.min(prev + Math.floor(Math.random() * 3) + 1, 500)
      );
    }, 3500);

    return () => {
      clearInterval(timer);
      clearInterval(downloadTimer);
    };
  }, []);

  const handleButtonClick = () => {
    setIsSparkling(true);
    setTimeout(() => setIsSparkling(false), 500);
    // Add purchase logic here
  };

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section
      id="cta-section"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
    >
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            Oferta Relâmpago
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Acesso vitalício ao Pack por apenas <span className="text-primary">R$ 19,90</span>
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Aproveite o preço promocional e garanta seus bônus exclusivos. A oferta termina em:
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-4xl font-mono font-bold tracking-tighter bg-background p-4 rounded-lg border">
            <div className="flex flex-col items-center">
              <span className="text-primary">{formatTime(timeLeft.hours)}</span>
              <span className="text-xs font-sans tracking-normal text-muted-foreground">Horas</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span className="text-primary">{formatTime(timeLeft.minutes)}</span>
              <span className="text-xs font-sans tracking-normal text-muted-foreground">Min</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span className="text-primary">{formatTime(timeLeft.seconds)}</span>
              <span className="text-xs font-sans tracking-normal text-muted-foreground">Seg</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto space-y-4">
          <Button
            size="lg"
            className={`w-full text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-105 animate-pulse-slow ${
              isSparkling ? "animate-sparkle-on-click" : ""
            }`}
            onClick={handleButtonClick}
          >
            QUERO O PACK AGORA <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
           <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Gift className="w-4 h-4 text-primary" />
            <span>Últimos {500 - downloads} downloads com bônus!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
