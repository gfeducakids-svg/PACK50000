import { Brush, Zap, ShieldCheck, Trophy, Sparkles, Rocket } from "lucide-react";

const benefits = [
  {
    icon: <Brush size={28} className="text-primary" />,
    title: "Não exige conhecimento técnico",
    description: "Basta arrastar, soltar no seu editor preferido e imprimir.",
  },
  {
    icon: <Rocket size={28} className="text-primary" />,
    title: "Substitui meses de criação",
    description: "É o atalho visual para você focar no que importa: vender.",
  },
  {
    icon: <Trophy size={28} className="text-primary" />,
    title: "Domine o mercado",
    description: "Com artes de alta qualidade, você se torna a referência na sua cidade.",
  },
  {
    icon: <Sparkles size={28} className="text-primary" />,
    title: "Custo-benefício imbatível",
    description: "Cada arte custaria caro, mas o pack hoje sai por apenas R$19,90.",
  },
];

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mais do que artes, uma ferramenta para o seu sucesso.
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Benefícios que transformam seu negócio da água para o vinho.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-10 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="grid gap-4">
              <div className="flex items-center gap-4">
                {benefit.icon}
                <h3 className="text-lg font-bold">{benefit.title}</h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
