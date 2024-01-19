import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import { Header } from "@/src/common/Header/Header";
import { SplashScreen } from "@/src/common/SplashScreen";
import { Footer } from "@/src/common/Footer/Footer";
import { WhatsAppFloatingButton } from "@/src/common/WhatsAppFloatingButton";
import Script from "next/script";

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

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload" id="google-analytics">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
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
