"use client";

import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              O Pack Secreto de 50MIL Artes Para Sublimação
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Pare de perder horas criando artes! Com nosso pack, você tem artes profissionais prontas para usar e editar, por um preço inacreditável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a href="#cta-section" onClick={handleScroll}>
                <RainbowButton>
                  QUERO O PACK AGORA <ArrowRight className="ml-2 h-5 w-5" />
                </RainbowButton>
               </a>
               <a href="#what-you-get-section" onClick={handleScroll}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver o que está incluído <Sparkles className="ml-2 h-5 w-5" />
                </Button>
               </a>
            </div>
          </div>
          <div className="relative animate-float flex items-center justify-center">
            <Image
              src="https://i.imgur.com/Y2urF41.png"
              alt="Pack de artes para sublimação"
              data-ai-hint="product mockup"
              width={800}
              height={600}
              className="mx-auto aspect-auto overflow-hidden rounded-xl object-contain shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
