"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { IStep, Stepper } from "../../common/Stepper/Stepper";

export interface IStepByStepSectionProps {
  steps: IStep[];
}

export const StepByStepSection = ({ steps }: IStepByStepSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 16 }}>
      <Container>
        <Stack alignItems="center" width="100%" gap={8}>
          <Typography variant="h2">Como funciona</Typography>

          <Stepper steps={steps} titleMaxWidth="18ch" />
        </Stack>
      </Container>
    </Box>
  );
};
