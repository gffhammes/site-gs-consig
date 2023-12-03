import { Box, Button, Container, Stack } from "@mui/material";
import { HomePageBenefitsList } from "./HomePageBenefitsList";

export interface IHomePageBenefitsProps {}

export const HomePageBenefits = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Stack gap={8} alignItems="center">
          {/* <Stack width="100%" alignItems="center" gap={2}>
            <Typography
              variant="h2"
              color="primary"
              maxWidth="25ch"
              textAlign="center"
            >
              Conheça nossos diferenciais
            </Typography>

            <Typography textAlign="center" maxWidth="33ch">
              Nossa missão é fazer com que você tenha mais dinheiro para
              realizar seus sonhos
            </Typography>
          </Stack> */}

          <HomePageBenefitsList />

          <Button sx={{ width: "fit-content" }} variant="contained">
            Contrate agora
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
