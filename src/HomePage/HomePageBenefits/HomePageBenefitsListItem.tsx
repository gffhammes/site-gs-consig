import { Box, Stack, Typography } from "@mui/material";
import { IBenefit } from "./HomePageBenefitsList";

export interface IHomePageBenefitsListItemProps {
  benefit: IBenefit;
}

export const HomePageBenefitsListItem = ({
  benefit,
}: IHomePageBenefitsListItemProps) => {
  return (
    <Stack direction={{ xs: "row", md: "column" }} gap={1}>
      <Box fontSize={64}>
        <benefit.Icon fontSize="inherit" color="primary" />
      </Box>

      <Stack gap={1} sx={{ width: "100%" }}>
        <Typography
          color="primary"
          fontWeight="bold"
          fontSize={20}
          lineHeight={1}
        >
          {benefit.title}
        </Typography>

        <Typography>{benefit.text}</Typography>
      </Stack>
    </Stack>
  );
};
