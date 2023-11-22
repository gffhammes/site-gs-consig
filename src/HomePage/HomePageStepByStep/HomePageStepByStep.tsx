import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { HomePageStepByStepStepper } from "./HomePageStepByStepStepper";

export interface IHomePageStepByStepProps {}

export const HomePageStepByStep = () => {
  return (
    <Box>
      <Container>
        <Box
          display="grid"
          gridTemplateAreas={{
            xs: `
            'title'
            'stepper'
            'button'
            `,

            md: `
            'titleAndButton  stepper'
            'titleAndButton stepper'
            'none stepper'
            `,
          }}
          gap={4}
          width="fit-content"
          marginX="auto"
        >
          <Stack
            gap={4}
            sx={{
              gridArea: "titleAndButton",
              position: "sticky",
              top: 200,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography variant="h2" color="primary" maxWidth="13ch">
              Lorem ipsum dolor sit amet
            </Typography>

            <Button
              sx={{
                width: "fit-content",
              }}
              variant="contained"
            >
              Lorem ipsum
            </Button>
          </Stack>

          <Typography
            sx={{
              gridArea: "title",
              display: { md: "none" },
            }}
            variant="h2"
            color="primary"
            maxWidth="13ch"
          >
            Lorem ipsum dolor sit amet
          </Typography>

          <Button
            sx={{
              gridArea: "button",
              width: "fit-content",
              display: { md: "none" },
            }}
            variant="contained"
          >
            Lorem ipsum
          </Button>

          <HomePageStepByStepStepper />
        </Box>
      </Container>
    </Box>
  );
};
