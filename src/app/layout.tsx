import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { GradientBackground } from "@/components/ui/gradient-background";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-headline",
});

export const metadata: Metadata = {
  title: "Express Design 3C",
  description: "O PACK secreto que OS estúdios usam para vender 3x mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${montserrat.variable} font-body antialiased`}
      >
        <GradientBackground />
        <div className="relative z-10">{children}</div>
        <Toaster />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
      </body>
    </html>
  );
}
