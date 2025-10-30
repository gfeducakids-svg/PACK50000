"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Hero() {
  const coverImage = PlaceHolderImages.find((img) => img.id === "pack-cover");
  const carouselImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("theme-")
  );

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              O PACK secreto que OS estúdios usam para vender 3x mais
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              — e agora pode ser seu por apenas{" "}
              <span className="font-bold text-secondary">R$ 19,90</span>.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto lg:mx-0">
              Pare de perder horas criando artes — cole, personalize e venda com o
              Sistema Express Design 3C.
            </p>
          </div>
          <div className="relative animate-float">
            <div className="relative">
              {coverImage && (
                <Image
                  src={coverImage.imageUrl}
                  alt={coverImage.description}
                  data-ai-hint={coverImage.imageHint}
                  width={800}
                  height={600}
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover shadow-2xl"
                  priority
                />
              )}
            </div>
            <div className="absolute -bottom-16 w-full px-8">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {carouselImages.map((image) => (
                    <CarouselItem
                      key={image.id}
                      className="basis-1/3 md:basis-1/4"
                    >
                      <div className="p-1">
                        <Card className="overflow-hidden shadow-lg">
                          <CardContent className="p-0">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              width={400}
                              height={300}
                              className="aspect-square object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
