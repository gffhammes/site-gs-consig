import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import { Footer } from "@/src/common/Footer/Footer";

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
      <body className={nunito.className}>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
