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
                Lorem ipsum dolor sit amet
              </Typography>

              <Typography maxWidth="26rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                varius nulla eleifend.
              </Typography>
            </Stack>

            <Button variant="contained" sx={{ width: "fit-content" }}>
              lorem ipsum
            </Button>
          </Stack>

          <InterestRateChart />
        </Stack>
      </Container>
    </Box>
  );
};
