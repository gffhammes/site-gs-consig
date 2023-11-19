import { SvgIconComponent } from "@mui/icons-material";
import { Box, IconProps } from "@mui/material";
import { JSXElementConstructor } from "react";
import HourglassDisabledIcon from "@mui/icons-material/HourglassDisabled";
import { HomePageBenefitsListItem } from "./HomePageBenefitsListItem";

export interface IHomePageBenefitsListProps {}

export const HomePageBenefitsList = () => {
  return (
    <Box
      display="grid"
      gridTemplateRows={{
        xs: "repeat(4, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(1, 1fr)",
      }}
      gridTemplateColumns={{
        xs: "repeat(1, auto)",
        sm: "repeat(2, auto)",
        md: "repeat(4, 1fr)",
      }}
      justifyContent="center"
      gap={4}
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
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Icon: HourglassDisabledIcon,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Icon: HourglassDisabledIcon,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Icon: HourglassDisabledIcon,
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
