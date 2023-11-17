import { Stack, Typography } from "@mui/material";
import { IBenefit } from "./HomePageBenefitsList";

export interface IHomePageBenefitsListItemProps {
  benefit: IBenefit;
}

export const HomePageBenefitsListItem = ({
  benefit,
}: IHomePageBenefitsListItemProps) => {
  return (
    <Stack direction={{ xs: "row", md: "column" }} gap={1}>
      <benefit.Icon fontSize="large" color="primary" />

      <Stack
        gap={0.5}
        sx={{ maxWidth: { xs: "21ch", sm: "25ch" }, width: "100%" }}
      >
        <Typography color="primary" fontWeight="bold" lineHeight={1}>
          {benefit.title}
        </Typography>

        <Typography>{benefit.text}</Typography>
      </Stack>
    </Stack>
  );
};
