"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CustomCarousel } from "../common/CustomCarousel/CustomCarousel";
import { CustomImage } from "../common/CustomImage";
import { useBreakpoint } from "../hooks/useBreakpoint";

export interface IPortabilidadeInssStepByStepProps {}

export const PortabilidadeInssStepByStep = () => {
  const { md } = useBreakpoint();

  return (
    <Container disableGutters>
      <Stack alignItems="center" width="100%" gap={4}>
        <Typography variant="h2" color="primary">
          Como funciona
        </Typography>

        <Box sx={{ width: { xs: "100%" } }}>
          <CustomCarousel
            dataSet={steps}
            options={{ align: "center" }}
            showDots
            getSlide={(slideData, index) => {
              return (
                <Box
                  sx={{
                    flex: "0 0 100%",
                    flexBasis: { xs: "100%", md: "calc(100% / 3)" },
                    p: 2,
                  }}
                >
                  <Paper
                    variant="outlined"
                    sx={{ borderRadius: 4, maxWidth: "18rem", mx: "auto" }}
                  >
                    <Stack gap={4} sx={{ px: 2, py: 4 }} alignItems="center">
                      <Typography
                        fontSize={12}
                        color="primary"
                        textAlign="center"
                      >
                        PASSO {index + 1}
                      </Typography>

                      <Box sx={{ position: "relative" }}>
                        <CustomImage
                          src={slideData.image}
                          alt={slideData.text}
                          height="10rem"
                          width="10rem"
                          objectFit="cover"
                          sx={{
                            borderRadius: "10rem",
                          }}
                        />

                        {index < steps.length - 1 && !md && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: "50%",
                              right: 0,
                              width: "100vw",
                              borderTop: "5px dashed #c6c6c6",
                              transform: "translateX(100%)",
                            }}
                          />
                        )}
                      </Box>

                      <Typography fontSize={20} textAlign="center">
                        {slideData.text}
                      </Typography>
                    </Stack>
                  </Paper>
                </Box>
              );
            }}
          />
        </Box>

        {/* <Button variant="contained" sx={{ width: "fit-content" }}>
          SIMULE AGORA
        </Button> */}
      </Stack>
    </Container>
  );
};

const steps = [
  {
    image: "/celular-para-idoso-boas-opcoes-1024x682.jpg",
    text: "Solicite uma simulação gratuita",
  },
  {
    image: "/size_960_16_9_idosos-aposentadoria1.webp",
    text: "Compare as condições e taxas",
  },
  {
    image:
      "/close-up-of-senior-couple-showing-piggy-bank-to-save-money-elderly-couple-holding-piggy-bank-for-investment-and-future-planning-concept-happy-retired-couple-holding-piggy-bank-together-at-home.jpg",
    text: "Autorize a portabilidade e economize!",
  },
];
