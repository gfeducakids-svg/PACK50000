'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Folder, Flame, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const categories = [
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Heróis e Filmes",
    description: "Marvel, DC, Star Wars, He-Man, Power Rangers, Street Fighter",
    quote: "Os campeões de vendas em qualquer loja de personalizados.",
    tag: {
      text: "Mais vendidas",
      icon: <Flame className="w-3 h-3 mr-1" />,
      variant: "destructive",
    },
    images: [
        'https://i.imgur.com/CoVJncG.png',
        'https://i.imgur.com/Ujau1ep.png',
        'https://i.imgur.com/hblBVZu.png',
        'https://i.imgur.com/YRoqE9z.png',
        'https://i.imgur.com/wJZAirN.png',
        'https://i.imgur.com/bfqLVCC.png',
        'https://i.imgur.com/zDt2zkN.png',
        'https://i.imgur.com/N13eQih.png',
        'https://i.imgur.com/y5nr9j4.png',
        'https://i.imgur.com/pZZsN4o.png',
        'https://i.imgur.com/e6PVUEO.png',
        'https://i.imgur.com/amV8hPu.png'
    ],
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Desenhos e Nostalgia",
    description: "Bob Esponja, Tom & Jerry, Simpsons, Flintstones, Meninas Superpoderosas",
    quote: "Sucesso garantido entre crianças e adultos nostálgicos.",
    tag: {
      text: "Favorita",
      icon: <Star className="w-3 h-3 mr-1" />,
      variant: "secondary",
    },
    images: [
      'https://i.imgur.com/DNblik0.png',
      'https://i.imgur.com/hxzkWdS.png',
      'https://i.imgur.com/mHAazcy.png',
      'https://i.imgur.com/2SzgvIW.png',
      'https://i.imgur.com/D0f8R5o.png',
      'https://i.imgur.com/Y2pLyZt.png',
      'https://i.imgur.com/DVTL7Ys.png',
      'https://i.imgur.com/0do8y9r.png',
      'https://i.imgur.com/ptkj9F3.png'
    ],
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Datas Especiais",
    description: "Feliz Natal, Dia das Mães, Páscoa, Aniversários",
    quote: "Pronto para vender o ano todo.",
    images: PlaceHolderImages.filter(img => img.id.startsWith('special-dates-')).map(img => img.imageUrl),
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Cristão e Religioso",
    description: "Temas evangélicos e inspiracionais",
    quote: "Artes que tocam o coração e vendem com propósito.",
    images: PlaceHolderImages.filter(img => img.id.startsWith('christian-')).map(img => img.imageUrl),
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Pets e Gatinho",
    description: "Gatinhos, cachorros, pets engraçados",
    quote: "A linha mais fofa e viral do pack.",
    images: PlaceHolderImages.filter(img => img.id.startsWith('pets-')).map(img => img.imageUrl),
  },
    {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Futebol e Sertanejo",
    description: "Clubes, ídolos e temas populares",
    quote: "Perfeito para quem vende para torcedores e fãs de música.",
    images: PlaceHolderImages.filter(img => img.id.startsWith('sports-')).map(img => img.imageUrl),
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Mockups Prontos",
    description: "Canecas, camisetas, quadros e squeezes",
    quote: "Use para exibir suas artes como se já estivessem prontas à venda.",
    images: PlaceHolderImages.filter(img => img.id.startsWith('mockups-')).map(img => img.imageUrl),
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Frases e Tipografia",
    description: "Lettering, frases motivacionais, citações divertidas",
    quote: "Designs versáteis para qualquer produto.",
    images: PlaceHolderImages.filter(img => img.id.startsWith('typography-')).map(img => img.imageUrl),
  },
];


function CategoryCard({ category }: { category: (typeof categories)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="flex flex-col text-left overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="flex-row items-start gap-4 space-y-0 pt-4">
        {category.icon}
        <div className="flex-1">
          <CardTitle className="text-lg">{category.title}</CardTitle>
          {category.tag && (
            <Badge variant={category.tag.variant as any} className="mt-1 text-xs">
              {category.tag.icon}
              {category.tag.text}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
          <p className="text-sm font-italic text-foreground/80 border-l-2 border-primary pl-3">“{category.quote}”</p>
        </div>
        <div className="relative mt-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {category.images.map((img, i) => (
                <CarouselItem key={i}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={img}
                      alt={`${category.title} example ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <CarouselPrevious variant="ghost" className="text-white bg-black/30 hover:bg-black/50 hover:text-white" />
              <CarouselNext variant="ghost" className="text-white bg-black/30 hover:bg-black/50 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
}


export function WhatYouGet() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Oque você recebe dentro do Pack:
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Tudo organizado em pastas temáticas, prontas para baixar e usar — são mais de 20 categorias com artes campeãs de venda!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
