import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import { Header } from "@/src/common/Header/Header";
import { SplashScreen } from "@/src/common/SplashScreen";
import { Footer } from "@/src/common/Footer/Footer";
import { WhatsAppFloatingButton } from "@/src/common/WhatsAppFloatingButton";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GS Consig",
  description: "Promotora de crédito mais bem avaliada de Balneário Camboriú",
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
    </html>
  );
}
