"use client";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Fragment, useMemo } from "react";

export interface IStep {
  title: string;
  description?: string;
}

export interface IStepperProps {
  steps: IStep[];
  titleMaxWidth?: string;
}

export const Stepper = ({ steps, titleMaxWidth }: IStepperProps) => {
  const { palette } = useTheme();

  const gridTemplateAreas = useMemo(() => {
    switch (steps.length) {
      case 3:
        return `
          "text1        number2     text3      "
          "connector1   number2     connector3 "
          "dot1         dot2        dot3       "
          "number1      connector2  number3    "
          "number1      text2       number3    "
        `;

      case 4:
        return `
          "text1        number2     text3       number4"
          "connector1   number2     connector3  number4"
          "dot1         dot2        dot3        dot4"
          "number1      connector2  number3     connector4"
          "number1      text2       number3     text4"  
        `;
    }
  }, [steps.length]);

  return (
    <Box sx={{ position: "relative" }} width="100%">
      <Box
        sx={{
          height: ".75rem",
          width: "100%",
          backgroundColor: "primary.main",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <Box
        display="grid"
        justifyItems="center"
        gridTemplateAreas={gridTemplateAreas}
        rowGap={1}
        gridTemplateRows="1fr min-content min-content min-content 1fr"
        gridTemplateColumns={`repeat(${steps.length}, 1fr)`}
        width="100%"
      >
        {steps.map((step, index) => {
          const isNumberBelowDot = index % 2 === 0;

          return (
            <Fragment key={step.title}>
              <Stack sx={{ gridArea: `text${index + 1}` }}>
                <Typography
                  textAlign="center"
                  fontSize={20}
                  color="primary"
                  maxWidth={titleMaxWidth}
                >
                  {step.title}
                </Typography>

                {step.description && (
                  <Typography
                    textAlign="center"
                    sx={{
                      "& > a": {
                        textDecoration: "underline",
                        color: "primary.main",
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />
                )}
              </Stack>

              <Stack
                alignItems="center"
                flexDirection={isNumberBelowDot ? "column" : "column-reverse"}
                sx={{ gridArea: `connector${index + 1}` }}
              >
                <Box
                  sx={{
                    height: ".75rem",
                    width: ".75rem",
                    borderRadius: ".75rem",
                    backgroundColor: "primary.main",
                  }}
                />
                <Box
                  sx={{
                    height: "5rem",
                    width: ".25rem",
                    backgroundColor: "primary.main",
                    transform: isNumberBelowDot
                      ? "translateY(-5%)"
                      : "translateY(5%)",
                  }}
                />
              </Stack>

              <Box
                sx={{
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "3rem",
                  backgroundColor: "primary.main",
                  gridArea: `dot${index + 1}`,
                }}
              />

              <Typography
                fontSize={96}
                color="transparent"
                sx={{
                  WebkitTextStroke: `2px ${palette.primary.main}`,
                  gridArea: `number${index + 1}`,
                  alignSelf: isNumberBelowDot ? "flex-start" : "flex-end",
                }}
              >
                {(index + 1).toLocaleString("pt-BR", {
                  minimumIntegerDigits: 2,
                })}
              </Typography>
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
};
