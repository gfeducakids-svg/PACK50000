"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, Pencil, Gem } from "lucide-react";

const steps = [
  {
    icon: <FileSearch className="w-12 h-12 text-primary" />,
    title: "Colete",
    description:
      "Colete a arte da sua preferência no seu google drive. Inclui Heróis,Séries,Cantores,Personagens",
  },
  {
    icon: <Pencil className="w-12 h-12 text-primary" />,
    title: "Customize",
    description: "Customize Cores,Nomes,Estampas FAÇA OQUE QUISER!",
  },
  {
    icon: <Gem className="w-12 h-12 text-primary" />,
    title: "Converta",
    description:
      "APROVEITE! Artes perfeitas que vendem rápido, sem depender de designer e economiza muito tempo!",
  },
];

export function Mechanism() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Sistema Express Design 3C
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Colete → Customize → Converta. Em 3 passos simples, você
              transforma ideias em lucro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {steps.map((step, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-4">
                    {step.icon}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
