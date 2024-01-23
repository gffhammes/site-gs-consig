import { ServicesPageList } from "@/src/ServicesPage/ServicesPageList";
import { ServicesPageTitle } from "@/src/ServicesPage/ServicesPageTitle";
import { BanksSection } from "@/src/common/BanksSection/BanksSection";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos | GS Consig",
  description:
    "Explore nossa variedade de produtos financeiros sob medida para suas necessidades em Balneário Camboriú. Oferecemos opções de crédito acessíveis e transparentes, avaliadas como as melhores na região. Descubra soluções financeiras confiáveis e simples que se encaixam perfeitamente no seu perfil. Garanta tranquilidade financeira conosco - conheça nossos produtos agora!",
};

export default function Produtos() {
  return (
    <Stack gap={{ xs: 16, md: 20 }} sx={{ pt: 4, pb: 16 }}>
      <Stack gap={{ xs: 8, sm: 16 }}>
        <ServicesPageTitle />

        <ServicesPageList />
      </Stack>

      <InterestRateSection />

      <BanksSection />
    </Stack>
  );
}
