import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Folder, Flame, Star } from "lucide-react";

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
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Datas Especiais",
    description: "Feliz Natal, Dia das Mães, Páscoa, Aniversários",
    quote: "Pronto para vender o ano todo.",
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Cristão e Religioso",
    description: "Temas evangélicos e inspiracionais",
    quote: "Artes que tocam o coração e vendem com propósito.",
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Pets e Gatinho",
    description: "Gatinhos, cachorros, pets engraçados",
    quote: "A linha mais fofa e viral do pack.",
  },
    {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Futebol e Sertanejo",
    description: "Clubes, ídolos e temas populares",
    quote: "Perfeito para quem vende para torcedores e fãs de música.",
  },
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Mockups Prontos",
    description: "Canecas, camisetas, quadros e squeezes",
    quote: "Use para exibir suas artes como se já estivessem prontas à venda.",
  },
    // Adding one more to make it a grid of 8
  {
    icon: <Folder className="w-8 h-8 text-primary" />,
    title: "Frases e Tipografia",
    description: "Lettering, frases motivacionais, citações divertidas",
    quote: "Designs versáteis para qualquer produto.",
  },
];

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
            <Card key={index} className="flex flex-col text-left">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
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
                <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                <p className="text-sm font-italic text-foreground/80 border-l-2 border-primary pl-3">“{category.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
