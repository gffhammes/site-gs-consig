import { Box, Button, Container, Stack } from "@mui/material";
import { HomePageBenefitsList } from "./HomePageBenefitsList";
import { generateMainWhatsappLink } from "@/src/utils/helpers";

export interface IHomePageBenefitsProps {}

export const HomePageBenefits = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Stack gap={8} alignItems="center">
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
