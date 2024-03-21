import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { InterestRateChart } from "./InterestRateChart";
import { generateMainWhatsappLink } from "@/src/utils/helpers";
import EastIcon from "@mui/icons-material/East";

export interface IInterestRateSectionProps {}

export const InterestRateSection = () => {
  return (
    <Box>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={8}
          alignItems="center"
          justifyContent="center"
        >
          <InterestRateChart />

          <Stack gap={4} alignItems="flex-start">
            <Stack gap={2}>
              <Typography variant="h2" color="primary">
                As melhores taxas do mercado
              </Typography>

              <Typography maxWidth="26rem">
                Nossa equipe de especialistas está sempre em busca dos melhores
                produtos para te oferecer as menores taxas
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
        </Stack>
      </Container>
    </Box>
  );
};
