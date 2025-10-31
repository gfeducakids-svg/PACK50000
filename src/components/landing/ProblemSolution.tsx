import { AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Demora pra entregar e perde oportunidades?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Sem arte nova, o cliente não volta. E a culpa não é sua. A falta de material visual atraente e atualizado é um grande obstáculo para fechar vendas e fidelizar clientes.
            </p>
          </div>
          <div className="space-y-6 rounded-xl bg-primary/5 p-8 border border-primary/10 shadow-lg backdrop-blur-sm">
             <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Isso agora é passado.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Com mais de 50.000 artes prontas e separadas por temas campeões de venda, você vai vender todos os dias. Mas garanta agora, antes que saia do ar! Os grandes estúdios não gostam de ter seus segredos revelados.
            </p>
            <div className="flex items-start gap-4 rounded-md bg-background/80 p-4 border">
                <TrendingUp className="w-6 h-6 mt-1 text-primary"/>
                <p className="text-md font-medium text-foreground">
                    Este é o passo que transforma quem faz por hobby em quem vive de design e personalizados.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
