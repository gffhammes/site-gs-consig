import { SvgIconComponent } from "@mui/icons-material";
import { Box, IconProps } from "@mui/material";
import { JSXElementConstructor } from "react";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";
import { HomePageBenefitsListItem } from "./HomePageBenefitsListItem";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

export interface IHomePageBenefitsListProps {}

export const HomePageBenefitsList = () => {
  return (
    <Box
      display="grid"
      gridTemplateRows={{
        xs: "repeat(3, 1fr)",
        md: "repeat(1, 1fr)",
      }}
      gridTemplateColumns={{
        xs: "repeat(1, auto)",
        md: "repeat(3, 1fr)",
      }}
      justifyContent="center"
      gap={8}
    >
      {benefits.map((benefit, index) => (
        <HomePageBenefitsListItem key={index} benefit={benefit} />
      ))}
    </Box>
  );
};

export interface IBenefit {
  Icon: JSXElementConstructor<IconProps<SvgIconComponent>>;
  title: string;
  text: string;
}

const benefits: IBenefit[] = [
  {
    Icon: HourglassDisabledIcon,
    title: "Contratação fácil e sem espera",
    text: "Nosso processo sem burocracia garante dinheiro na sua mão em até 24h",
  },
  {
    Icon: SupportAgentIcon,
    title: "Atendimento personalizado",
    text: "Cada um de nossos consultores é treinado para te atender de maneira única",
  },
  {
    Icon: SavingsOutlinedIcon,
    title: "Economia para seus sonhos",
    text: "Vamos encontrar as melhores condições para você conquistar seus objetivos",
  },
];
