import { Stack } from "@mui/material";
import { Metadata } from "next";
import HomePageTermos from "@/src/PagesComponents/HomePage/HomePageTermos/HomePageTermos"; // Caminho corrigido
import { PageBannerImage } from "@/src/common/PageBannerImage/PageBannerImage"; // Caminho já corrigido anteriormente

const Image = "/banner-termos.webp"; // Imagem no public

export const metadata: Metadata = {
  title: "Termos de Uso | GS Consig",
  description:
    "Leia nossos Termos de Uso para entender as condições de uso de nossos serviços. A GS Consig valoriza a transparência e o compromisso com você.",
};

export default function Termos() {
  return (
    <Stack gap={{ xs: 8, md: 16 }} sx={{ pb: 16 }}>
      {/* Banner da Página */}
      <PageBannerImage imageSrc={Image} />

      {/* Conteúdo dos Termos */}
      <HomePageTermos />
    </Stack>
  );
}
