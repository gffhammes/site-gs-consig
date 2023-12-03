import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { InterestRateChart } from "./InterestRateChart";

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
          <Stack gap={4}>
            <Stack gap={2}>
              <Typography variant="h2" color="primary" maxWidth="14ch">
                As melhores taxas do mercado
              </Typography>

              <Typography maxWidth="26rem">
                Nossa equipe de especialistas está sempre em busca dos melhores
                produtos para te oferecer as menores taxas
              </Typography>
            </Stack>

            <Button variant="contained" sx={{ width: "fit-content" }}>
              Simular agora
            </Button>
          </Stack>

          <InterestRateChart />
        </Stack>
      </Container>
    </Box>
  );
};
