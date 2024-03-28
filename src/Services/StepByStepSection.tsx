"use client";

import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { CustomCarousel } from "../common/CustomCarousel/CustomCarousel";
import { CustomImage } from "../common/CustomImage";
import { useBreakpoint } from "../hooks/useBreakpoint";

export interface IStep {
  text: string;
  image: string;
}

export interface IStepByStepSectionProps {
  steps: IStep[];
}

export const StepByStepSection = ({ steps }: IStepByStepSectionProps) => {
  const { md } = useBreakpoint();

  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 16 }}>
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
    </Box>
  );
};
