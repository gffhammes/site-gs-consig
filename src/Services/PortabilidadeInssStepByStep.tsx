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

export interface IPortabilidadeInssStepByStepProps {}

export const PortabilidadeInssStepByStep = (
  props: IPortabilidadeInssStepByStepProps
) => {
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

                      <Box>
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

        <Button variant="contained" sx={{ width: "fit-content" }}>
          SIMULE AGORA
        </Button>
      </Stack>
    </Container>
  );
};

const steps = [
  {
    image: "https://picsum.photos/1001",
    text: "Solicite uma simulação gratuita",
  },
  {
    image: "https://picsum.photos/1001",
    text: "Compare as condições e taxas",
  },
  {
    image: "https://picsum.photos/1001",
    text: "Autorize a portabilidade e economize!",
  },
];
