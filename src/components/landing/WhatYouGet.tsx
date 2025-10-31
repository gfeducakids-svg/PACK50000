'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Folder, Flame, Star, Download } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    title: "Cristão e Religioso",
    description: "Temas evangélicos e inspiracionais",
    quote: "Artes que tocam o coração e vendem com propósito.",
    images: [
      'https://i.imgur.com/yhVzkjU.png',
      'https://i.imgur.com/napRp2q.png',
      'https://i.imgur.com/KprxC0o.png',
      'https://i.imgur.com/YihtNfK.png',
      'https://i.imgur.com/aMmUzNZ.png',
      'https://i.imgur.com/CiyZG2Z.png',
      'https://i.imgur.com/c3533nh.png'
    ],
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Pets e Gatinho",
    description: "Gatinhos, cachorros, pets engraçados",
    quote: "A linha mais fofa e viral do pack.",
    images: [
      'https://i.imgur.com/y4EZwia.png',
      'https://i.imgur.com/OARwdcX.png',
      'https://i.imgur.com/1tsVTFe.png',
      'https://i.imgur.com/UreJwby.png',
      'https://i.imgur.com/aYoX9bd.png',
      'https://i.imgur.com/9R4XQw6.png',
      'https://i.imgur.com/XHJa4OY.png',
      'https://i.imgur.com/b6yA8mr.png',
      'https://i.imgur.com/zn5nMTa.png',
      'https://i.imgur.com/0tW748T.png',
      'https://i.imgur.com/dqWgEyT.png'
    ],
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Jogadores e Cantores de Sertanejo",
    description: "Artes de ídolos do futebol e da música sertaneja.",
    quote: "A paixão nacional em forma de arte.",
    images: [
      'https://i.imgur.com/GdCkZpo.png',
      'https://i.imgur.com/SEUjtT5.png',
      'https://i.imgur.com/dYBJSXP.png',
      'https://i.imgur.com/d7qIZqz.png',
      'https://i.imgur.com/K46sAIt.png',
      'https://i.imgur.com/7LIhnt9.png',
      'https://i.imgur.com/GndJbaV.png',
      'https://i.imgur.com/EMUvcSc.png',
      'https://i.imgur.com/4TYNPQ8.png'
    ],
  },
  {
    icon: <Download className="w-8 h-8 text-primary" />,
    title: "BÔNUS: Mockups Prontos",
    description: "Canecas, camisetas, quadros e muito mais. Use para exibir suas artes como se já estivessem prontas à venda.",
    quote: "Apresente seus produtos de forma profissional e venda mais.",
    images: [
        'https://images.unsplash.com/photo-1542556398-95fb5b9f9b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtdWclMjBtb2NrdXB8ZW58MHx8fHwxNzYxODQ0Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx0c2hpcnQlMjBtb2NrdXB8ZW58MHx8fHwxNzYxODQ0Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1567225477277-c8162eb4991d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZnJhbWUlMjBtb2NrdXB8ZW58MHx8fHwxNzYxODUzNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    tag: {
      text: "Bônus Exclusivo",
      icon: <Star className="w-3 h-3 mr-1" />,
      variant: "default",
    },
  },
];


function CategoryCard({ category }: { category: (typeof categories)[0] }) {

  return (
    <Card
      className="flex flex-col text-left overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl"
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
        {category.images && category.images.length > 0 && (
          <Carousel className="relative mt-auto pt-4" opts={{ loop: true }}>
            <CarouselContent>
              {category.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={image}
                      alt={`${category.title} example ${index + 1}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {category.images.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </>
            )}
          </Carousel>
        )}
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
            O que você recebe dentro do Pack:
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Tudo organizado em pastas temáticas, prontas para baixar e usar são mais de 20 categorias com artes campeãs de venda!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
