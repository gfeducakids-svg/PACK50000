import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Sua Satisfação ou seu Dinheiro de Volta
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Nós acreditamos tanto na qualidade do nosso produto que oferecemos 7 Dias para você testar e se por acaso não gostar, pode pedir reembolso sem questionamento, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}
