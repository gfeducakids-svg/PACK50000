import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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
  {
    question: "Posso acessar de qualquer dispositivo?",
    answer:
      "Sim, o acesso é vitalício e pode ser feito de qualquer dispositivo com internet. Basta fazer login na sua conta para baixar as artes quando e onde quiser.",
  },
];

export function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Tirando todas as suas dúvidas para você comprar com 100% de
            segurança.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
