import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-body',
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
      <body className={`${font.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
