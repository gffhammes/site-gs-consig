import { generateMainWhatsappLink } from "@/src/utils/helpers";
import { Box, Stack, Typography } from "@mui/material";

export interface IHomePageStepByStepStepperProps {}

export const HomePageStepByStepStepper = () => {
  return (
    <Stack width="fit-content" sx={{ gridArea: "stepper" }}>
      {steps.map((step, index) => {
        const isLastStep = index === steps.length - 1;

        return (
          <Box
            key={index}
            display="grid"
            width="fit-content"
            gridTemplateAreas={`
            'index title'
            'line  description'
            `}
            gridTemplateColumns="min-content auto"
            alignItems="center"
            columnGap={2}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                gridArea: "index",
                backgroundColor: "primary.main",
                height: 25,
                width: 25,
                borderRadius: 25,
              }}
            >
              <Typography color="white">{index + 1}</Typography>
            </Stack>

            <Typography fontWeight="800" sx={{ gridArea: "title" }}>
              {step.title}
            </Typography>

            <Typography
              maxWidth="30ch"
              sx={{
                gridArea: "description",
                pt: 1,
                pb: isLastStep ? 0 : 8,
                a: {
                  color: "primary.main",
                  textDecoration: "underline",
                },
              }}
              dangerouslySetInnerHTML={{ __html: step.description }}
            />

            <Stack
              alignItems="center"
              sx={{ gridArea: "line", height: "100%" }}
            >
              {!isLastStep && (
                <Box
                  sx={{
                    height: "100%",
                    width: "1px",
                    backgroundColor: "#c6c6c6",
                  }}
                />
              )}
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};

export interface IStep {
  title: string;
  description: string;
}

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
