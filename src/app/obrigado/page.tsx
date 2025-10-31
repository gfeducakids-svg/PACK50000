'use client';

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Download, AlertTriangle } from "lucide-react";

const deliverables = [
    { name: "Parte 1 (Artes + Mockups para produção)", url: "https://drive.google.com/drive/folders/1Xbo60SLjQXuwQCOLg6dosb7_orHQM3sO?usp=sharing" },
    { name: "Parte 2", url: "https://drive.google.com/drive/folders/1FnHXGQaRx_SZ_INomPiW-D4bdf0aBwqe?usp=sharing" },
    { name: "Parte 3", url: "https://drive.google.com/drive/folders/111D_si1GNSnO5D4tL-Pl8-5KcVTxy4C6?usp=sharing" },
    { name: "Parte 4", url: "https://drive.google.com/drive/folders/1KhgFFW-_UFEsbgJouRg8x78C2a6MTInd?usp=sharing" },
    { name: "Parte 5", url: "https://drive.google.com/drive/folders/1k8uJqotv9EXbD35P2kka5yL7O0GtSZS1?usp=sharing" },
    { name: "Parte 6", url: "https://drive.google.com/drive/folders/16P2zKuj2s89wQhMP9NuUedpXBgtJzRSq?usp=sharing" },
    { name: "Parte 7", url: "https://drive.google.com/drive/folders/1g9cyMZ2cEpaoIMmh5rf94tOCnkTRJy0b?usp=sharing" },
];

export default function ObrigadoPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <main className="flex-1">
                <div className="w-full max-w-4xl mx-auto py-12 md:py-20 px-4 md:px-6">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Sua compra foi um sucesso!</h1>
                        <p className="text-lg text-muted-foreground">
                            Olá, muito obrigado por adquirir o pack de artes do Express Design 3C! Estamos muito felizes em ter você a bordo. Prepare-se para elevar o nível dos seus produtos personalizados.
                        </p>
                    </div>

                    <Alert variant="destructive" className="my-8 bg-destructive/5 border-destructive/20 text-destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle className="font-bold text-destructive">AVISO IMPORTANTE</AlertTitle>
                        <AlertDescription className="text-destructive/80">
                            Ao realizar o download, serão gerados arquivos <strong>.rar</strong> para descompactar. Certifique-se de extrair todos os arquivos um por um, caso contrário pode faltar conteúdo nas pastas.
                        </AlertDescription>
                    </Alert>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center">Acesse seu material</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {deliverables.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className="w-full h-14 text-base justify-between"
                                    >
                                        {item.name}
                                        <Download className="h-5 w-5" />
                                    </Button>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center text-sm text-muted-foreground">
                        <p>Em caso de dúvidas ou problemas, entre em contato com nosso suporte.</p>
                        <p>© 2025 Express Design 3C. Todos os direitos reservados.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}