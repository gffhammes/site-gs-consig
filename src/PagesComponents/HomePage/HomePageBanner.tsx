import { Box, Button, Container, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { generateMainWhatsappLink } from "../../utils/helpers";

export interface IHomePageBannerProps {}

export const HomePageBanner = () => {
  return (
    <Box
      sx={{
        height: { xs: "50vh", md: "100vh" },
        backgroundImage: "url(/imagem-6.png)",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Stack
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="flex-start"
          gap={3}
          pt={8}
        >
          <Stack>
            <Typography textTransform="uppercase" color="primary">
              Portabilidade INSS
            </Typography>

            <Typography
              fontSize={{ xs: 32, md: 48 }}
              color="white"
              maxWidth="16ch"
            >
              Diminua o valor da sua parcela e ganhe dinheiro de volta!
            </Typography>
          </Stack>

          <Button
            variant="contained"
            endIcon={<EastIcon />}
            LinkComponent="a"
            href={generateMainWhatsappLink()}
          >
            SIMULAR AGORA
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
