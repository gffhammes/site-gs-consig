import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { HomePageStepByStepStepper } from "./HomePageStepByStepStepper";
import { generateMainWhatsappLink } from "@/src/utils/helpers";

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
          gap={8}
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
              Veja como é facil contratar nossos serviços
            </Typography>

            <Button
              sx={{
                width: "fit-content",
              }}
              variant="contained"
              LinkComponent="a"
              href={generateMainWhatsappLink()}
              target="_blank"
            >
              CONTRATAR AGORA
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
            Veja como é facil contratar nossos serviços
          </Typography>

          <Button
            sx={{
              gridArea: "button",
              width: "fit-content",
              display: { md: "none" },
            }}
            variant="contained"
          >
            CONTRATAR AGORA
          </Button>

          <HomePageStepByStepStepper />
        </Box>
      </Container>
    </Box>
  );
};
