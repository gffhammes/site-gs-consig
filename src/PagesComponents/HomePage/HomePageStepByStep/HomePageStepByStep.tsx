"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { generateMainWhatsappLink } from "@/src/utils/helpers";
import { IStep, Stepper } from "@/src/common/Stepper/Stepper";

export interface IHomePageStepByStepProps {}

export const HomePageStepByStep = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 16 }}>
      <Container>
        <Stack alignItems="center" gap={8}>
          <Typography textAlign="center" variant="h2" maxWidth="21ch">
            Veja como é facil contratar nossos serviços
          </Typography>

          <Stepper steps={steps} />
        </Stack>
      </Container>
    </Box>
  );
};

export const steps: IStep[] = [
  {
    title: "Entre em contato ",
    description: `Chame algum de nossos consultores <a href='${generateMainWhatsappLink()}' target='_blank'>clicando aqui</a>`,
  },
  {
    title: "Informe seus dados",
    description:
      "Precisamos te conhecer para saber qual a melhor solução para você",
  },
  {
    title: "Avalie nossa proposta",
    description:
      "Compare nossas condições com a de nossos concorrentes e com a sua situação atual",
  },
  {
    title: "Finalize a contratação",
    description:
      "Agora falta apenas autorizar a operação e pronto! Você já está economizando rumo aos seus objetivos",
  },
];
