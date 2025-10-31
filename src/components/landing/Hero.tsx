'use client';

import { Button } from "@/components/ui/button";
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
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl max-w-4xl">
            O pack com <span className="text-secondary">50.000 artes</span> que os estúdios <span className="text-muted-foreground">escondem</span> para continuar cobrando <span className="text-destructive">caro</span> de você.
          </h1>
          <div className="relative animate-float flex items-center justify-center w-full max-w-3xl">
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
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Pare de perder horas criando artes! Com nosso pack, você tem artes profissionais prontas para usar e editar, por um preço inacreditável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <a href="#what-you-get-section" onClick={handleScroll}>
              <Button size="lg" variant="default" className="text-lg h-14 px-10">
                Quero saber mais
              </Button>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
