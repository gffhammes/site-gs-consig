import { Box, Container, Stack, Typography } from "@mui/material";
import { HomePageBenefitsList } from "./HomePageBenefitsList";

export interface IHomePageBenefitsProps {}

export const HomePageBenefits = (props: IHomePageBenefitsProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={8}>
          <Stack width="100%" alignItems="center" gap={2}>
            <Typography
              variant="h2"
              color="primary"
              maxWidth="14ch"
              textAlign="center"
            >
              Lorem ipsum dolor sit amet
            </Typography>

            <Typography textAlign="center" maxWidth="33ch">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              varius nulla eleifend.
            </Typography>
          </Stack>

          <HomePageBenefitsList />
        </Stack>
      </Container>
    </Box>
  );
};
