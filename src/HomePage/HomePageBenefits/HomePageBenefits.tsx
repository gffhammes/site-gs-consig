import { Box, Button, Container, Stack } from "@mui/material";
import { HomePageBenefitsList } from "./HomePageBenefitsList";
import { generateMainWhatsappLink } from "@/src/utils/helpers";

export interface IHomePageBenefitsProps {}

export const HomePageBenefits = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 20 }}>
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

          <Button
            sx={{ width: "fit-content" }}
            variant="contained"
            LinkComponent="a"
            href={generateMainWhatsappLink()}
            target="_blank"
          >
            Contrate agora
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
