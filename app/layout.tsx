import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import { Header } from "@/src/common/Header/Header";
import { SplashScreen } from "@/src/common/SplashScreen";
import { Footer } from "@/src/common/Footer/Footer";
import { WhatsAppFloatingButton } from "@/src/common/WhatsAppFloatingButton";
import { GoogleAnalytics } from "@next/third-parties/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GS Consig",
  description:
    "Descubra a melhor promotora de crédito em Balneário Camboriú! Conosco, você encontra soluções financeiras feitas sob medida para você. Confie em nossa avaliação positiva e tenha acesso fácil e rápido ao crédito que você precisa. Simples, rápido e confiável - sua busca por crédito perfeito começa aqui!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />

        <meta
          name="google-site-verification"
          content="MiwgkR2Wdy0GS0qpeZE11KUmGPhWXH5EFwlXb8L4kxg"
        />
      </head>

      <body className={nunito.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <SplashScreen />

          <Header />

          {children}

          <WhatsAppFloatingButton />

          <Footer />
        </ThemeRegistry>
      </body>

      <GoogleAnalytics gaId="G-VCNV518NYK" />
    </html>
  );
}
