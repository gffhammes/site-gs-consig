import { BanksSection } from "@/src/common/BanksSection/BanksSection";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { PageBannerImage } from "@/src/common/PageBannerImage/PageBannerImage";
import { Stack } from "@mui/material";
import { Metadata } from "next";
import Image from "../../public/imagem10.jpeg";
import { ProductsPageGrid } from "@/src/ProductsPage/ProductsPageGrid";

export const metadata: Metadata = {
  title: "Produtos | GS Consig",
  description:
    "Explore nossa variedade de produtos financeiros sob medida para suas necessidades em Balneário Camboriú. Oferecemos opções de crédito acessíveis e transparentes, avaliadas como as melhores na região. Descubra soluções financeiras confiáveis e simples que se encaixam perfeitamente no seu perfil. Garanta tranquilidade financeira conosco - conheça nossos produtos agora!",
};

export default function Produtos() {
  return (
    <Stack gap={16} sx={{ pb: 16 }}>
      <PageBannerImage imageSrc={Image.src} />

      <ProductsPageGrid />

      <InterestRateSection wrapperSx={{ backgroundColor: "#f4f4f4", py: 16 }} />

      <BanksSection />
    </Stack>
  );
}
