import { Box, Button, Container, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { generateMainWhatsappLink } from "../utils/helpers";

export interface IHomePageBanner2Props {}

export const HomePageBanner2 = (props: IHomePageBanner2Props) => {
  return (
    <Box
      sx={{
        height: "100vh",
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
        >
          <Stack>
            <Typography textTransform="uppercase" color="primary">
              Portabilidade INSS
            </Typography>

            <Typography fontSize={48} color="white" maxWidth="16ch">
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
