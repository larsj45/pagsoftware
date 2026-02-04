import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PagSoftware - Financiamento para Software B2B",
  description: "Compre software B2B parcelado e fornecedores recebam à vista. Taxa de 2,5% a.m.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}