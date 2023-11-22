import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { HomePageBenefitsList } from "./HomePageBenefitsList";

export interface IHomePageBenefitsProps {}

export const HomePageBenefits = () => {
  return (
    <Box>
      <Container>
        <Stack gap={8} alignItems="center">
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

          <Button sx={{ width: "fit-content" }} variant="contained">
            Lorem ipsum
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
