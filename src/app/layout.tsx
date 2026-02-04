import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PagSoftware - Financiamento para Software B2B",
  description: "Compre software B2B parcelado e fornecedores recebam à vista. Taxa de 2,5% a.m.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'android-chrome-192x192',
      url: '/android-chrome-192x192.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}