import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decisão: Não Sofrer Mais Por Amor — O Método que Quebra o Ciclo de Dependência Emocional",
  description:
    "Pare de se abandonar em nome de alguém. O guia estratégico com o Método D.E.C.I.S.Ã.O. para reprogramar seu comportamento afetivo e romper o ciclo de dependência emocional definitivamente.",
  openGraph: {
    title: "Decisão: Não Sofrer Mais Por Amor",
    description:
      "Você não sofre porque ama demais. Você sofre porque se abandona demais. Conheça o Método D.E.C.I.S.Ã.O.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${jakarta.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
