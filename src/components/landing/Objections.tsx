import { CheckCircle2 } from "lucide-react";

const objections = [
  "Não precisa saber usar Photoshop ou Corel — tem artes em PNG prontas para imprimir.",
  "Funciona em qualquer produto: canecas, camisetas, chinelos, squeezes e mais.",
  "Entrega 100% digital e imediata — acesso vitalício.",
  "Preço baixo porque é automatizado e sem estoque físico.",
  "Garantia 7 dias: se não amar, devolvemos tudo.",
];

export function Objections() {
  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 items-center justify-center text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Chega de desculpas. É hora de vender.
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Quebramos todas as barreiras para você começar a lucrar com
              sublimação hoje mesmo.
            </p>
          </div>
          <div className="max-w-3xl mx-auto w-full">
            <ul className="grid gap-4 text-left">
              {objections.map((text, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
