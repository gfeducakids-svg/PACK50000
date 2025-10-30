import { ArtIcon } from "./icons/ArtIcon";
import { SpeedIcon } from "./icons/SpeedIcon";
import { SalesIcon } from "./icons/SalesIcon";
import { MarketIcon } from "./icons/MarketIcon";

const benefits = [
  {
    icon: <ArtIcon />,
    title: "Não exige conhecimento técnico",
    description: "Basta arrastar e imprimir.",
  },
  {
    icon: <SpeedIcon />,
    title: "Substitui meses de criação",
    description: "É o atalho visual para vender mais rápido.",
  },
  {
    icon: <MarketIcon />,
    title: "Domine o mercado",
    description: "Seja a referência em artes da sua cidade.",
  },
  {
    icon: <SalesIcon />,
    title: "Custo-benefício imbatível",
    description: "Cada arte custaria caro, mas o pack hoje sai por R$19,90.",
  },
];

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mais do que artes, uma ferramenta para o seu sucesso.
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Benefícios que transformam
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="grid gap-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center">
                {benefit.icon}
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">{benefit.title}</h3>
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
