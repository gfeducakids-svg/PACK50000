"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, DownloadCloud } from "lucide-react";

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
      className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Oferta Relâmpago!
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
            Acesso vitalício ao Pack 50 MIL Artes por apenas{" "}
            <span className="font-bold text-accent">R$ 19,90</span>.
          </p>
          <p className="font-semibold text-lg">
            Últimos {500 - downloads} downloads com bônus!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-4xl font-mono font-bold tracking-tighter bg-background/10 p-4 rounded-lg">
            <div className="flex flex-col items-center">
              <span>{formatTime(timeLeft.hours)}</span>
              <span className="text-xs font-sans tracking-normal">Horas</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>{formatTime(timeLeft.minutes)}</span>
              <span className="text-xs font-sans tracking-normal">Min</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span>{formatTime(timeLeft.seconds)}</span>
              <span className="text-xs font-sans tracking-normal">Seg</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/90 bg-background/10 p-3 rounded-lg">
            <DownloadCloud className="w-5 h-5 animate-pulse" />
            <span>{downloads} downloads ativos</span>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Button
            size="lg"
            className={`w-full text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl transition-transform duration-200 hover:scale-105 animate-pulse-orange ${
              isSparkling ? "animate-sparkle-on-click" : ""
            }`}
            onClick={handleButtonClick}
          >
            QUERO O PACK AGORA <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
