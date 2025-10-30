"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              O Pack Secreto de 50MIL Artes Para Sublimação que os estúdios utilizam para vender 3x mais
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              artes profissionais prontas para uso e edição por apenas{" "}
              <span className="font-bold text-secondary">R$ 19,90</span>.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto lg:mx-0">
              Pare de perder horas criando artes — cole, personalize e venda com o
              Sistema Express Design 3C.
            </p>
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
