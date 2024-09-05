import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import { Header } from "@/src/common/Header/Header";
import { SplashScreen } from "@/src/common/SplashScreen";
import { Footer } from "@/src/common/Footer/Footer";
import { WhatsAppFloatingButton } from "@/src/common/WhatsAppFloatingButton";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

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

      <GoogleTagManager gtmId="AW-16685295513" />

      <body className={roboto.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <SplashScreen />

          <Header />

          {children}

          <WhatsAppFloatingButton />

          <Footer />
        </ThemeRegistry>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '538397215325977');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=538397215325977&ev=PageView&noscript=1"
          />
        </noscript>
      </body>

      <GoogleAnalytics gaId="G-VCNV518NYK" />
    </html>
  );
}
