"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, ShieldCheck, CreditCard, RefreshCw } from "lucide-react";

export function Cta() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 59,
    seconds: 59,
  });
  const [downloads, setDownloads] = useState(437);

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

  const handleScrollToCta = () => {
    const elem = document.getElementById('cta-section');
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <section
      id="cta-section"
      className="w-full py-8 md:py-12 lg:py-16 bg-primary/5 border-t border-b border-primary/10"
    >
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="w-full max-w-2xl mx-auto space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-base text-primary font-bold animate-pulse-slow shadow-lg border border-primary/20">
            Oferta Relâmpago
          </div>

          <div className="text-left bg-background/80 backdrop-blur-sm p-6 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">50.000 Artes customizáveis com formatos variados contendo:</h3>
            <ul className="space-y-2 text-muted-foreground text-left">
                <li>🦸 Heróis e vilões que nunca saem de moda</li>
                <li>🎬 Filmes, animes e séries de sucesso</li>
                <li>🎮 Games que marcaram gerações</li>
                <li>❤️ Desenhos animados infantis e adultos</li>
                <li>🐾 Pets que conquistam corações</li>
                <li>🚗 Carros populares streetwear</li>
                <li>🏆 Futebol – craques eternizados</li>
                <li>👑 Princesas lindas e deslumbrantes</li>
                <li>✨ Artes cristãs exclusivas e inspiradoras</li>
                <li>🎉 Datas comemorativas para diversas ocasiões e MUITO mais!</li>
            </ul>
            <p className="mt-4 text-muted-foreground"><strong>Mockups</strong> para camisetas, canecas, quadros e diversos outros produtos personalizados.</p>
            <p className="mt-2 text-muted-foreground">Para <strong>Sublimação, DTF, DTG e Silk Screen</strong>, o pacote reúne Mais de 20 temas diferentes com os estilos mais procurados do mercado.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="text-3xl sm:text-4xl text-destructive line-through">DE R$97,00</span> por apenas <span className="text-primary">R$19,90</span>
            </h2>
            <p className="font-semibold text-xs text-primary/80">MENOS DE 1 CENTAVO POR ARTE!</p>
            <p className="text-sm text-muted-foreground">Pagamento Único / Acesso Vitalício</p>
          </div>

          <Button
            size="lg"
            variant="secondary"
            className="w-full text-lg h-16"
            onClick={handleScrollToCta}
          >
            QUERO O PACK AGORA <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Gift className="w-4 h-4 text-primary" />
            <span>Últimos {500 - downloads} downloads com bônus!</span>
          </div>
          
          <div className="space-y-4 mt-8">
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              A oferta termina em:
              </p>
              <div className="flex items-center justify-center gap-4 text-4xl font-mono font-bold tracking-tighter text-primary">
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm shadow-lg border">
                      <span className="text-4xl">{formatTime(timeLeft.hours)}</span>
                      <span className="text-xs font-sans font-medium tracking-normal text-muted-foreground">Horas</span>
                  </div>
                  <span className="text-3xl text-muted-foreground">:</span>
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm shadow-lg border">
                      <span className="text-4xl">{formatTime(timeLeft.minutes)}</span>
                      <span className="text-xs font-sans font-medium tracking-normal text-muted-foreground">Min</span>
                  </div>
                  <span className="text-3xl text-muted-foreground">:</span>
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm shadow-lg border">
                      <span className="text-4xl">{formatTime(timeLeft.seconds)}</span>
                      <span className="text-xs font-sans font-medium tracking-normal text-muted-foreground">Seg</span>
                  </div>
              </div>
          </div>
        </div>


        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Compra Segura via SSL</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="w-5 h-5 text-primary" />
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="w-5 h-5 text-primary" />
            <span>Garantia de 7 Dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
