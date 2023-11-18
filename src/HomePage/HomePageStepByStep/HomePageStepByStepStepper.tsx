import { Box, Stack, Typography } from "@mui/material";

export interface IHomePageStepByStepStepperProps {}

export const HomePageStepByStepStepper = (
  props: IHomePageStepByStepStepperProps
) => {
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
              sx={{ gridArea: "description", pt: 1, pb: isLastStep ? 0 : 4 }}
            >
              {step.description}
            </Typography>

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

const steps: IStep[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nulla eleifend.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nulla eleifend.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nulla eleifend.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius nulla eleifend.",
  },
];
