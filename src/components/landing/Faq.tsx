'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Preciso saber usar Photoshop ou Corel?",
    answer:
      "Não. O pack inclui artes em PNG com fundo transparente, prontas para imprimir e usar em qualquer editor, inclusive no celular.",
  },
  {
    question: "Funciona para quais produtos?",
    answer:
      "Funciona em qualquer produto personalizável: canecas, camisetas, chinelos, squeezes, azulejos, quadros e muito mais.",
  },
  {
    question: "Como recebo o acesso?",
    answer:
      "A entrega é 100% digital e imediata após a confirmação do pagamento. Você recebe acesso vitalício para baixar quando e onde quiser.",
  },
  {
    question: "Por que o preço é tão baixo?",
    answer:
      "O processo é totalmente automatizado e, por ser um produto digital, não temos custos com estoque ou frete. Repassamos essa economia para você!",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem uma garantia incondicional de 7 dias. Se não amar o conteúdo, basta pedir o reembolso e devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Posso usar em editor do celular?",
    answer:
      "Sim, os arquivos são em PNG com fundo transparente, compatíveis com a maioria dos editores de imagem para celular como Canva, PicsArt e outros.",
  },
  {
    question: "Posso revender as artes?",
    answer:
      "Não. A licença é para uso comercial em produtos físicos personalizados que você vende. A revenda dos arquivos digitais (as artes em si) é estritamente proibida.",
  },
  {
    question: "Serve para DTF e Silk Screen?",
    answer:
      "Sim! Todas as artes estão em alta resolução (300 DPI), o que garante a qualidade para impressão em DTF, Silk Screen, transfer e outras técnicas.",
  },
];

export function Faq() {

  const handleScrollToCta = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const elem = document.getElementById('cta-section');
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ainda tem dúvidas?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Tirando todas as suas dúvidas para você comprar com 100% de segurança.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/30 rounded-lg border-none px-6 py-2">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-16 text-center">
            <Button
              size="lg"
              className="text-lg font-bold"
              onClick={handleScrollToCta}
            >
              Estou pronto para comprar <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
      </div>
    </section>
  );
}
