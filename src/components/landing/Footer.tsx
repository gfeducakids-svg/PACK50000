import { ShieldCheck, CreditCard, RefreshCw } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-muted/40 py-8 border-t">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>Compra Segura via SSL</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="w-5 h-5 text-primary" />
            <span>Pagamento via PagSeguro</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="w-5 h-5 text-primary" />
            <span>Garantia de 7 Dias</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2025 Express Design 3C. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
