import { Box, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

export interface IInterestRateChartProps {}

export const InterestRateChart = (props: IInterestRateChartProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${interestRateChartItems.length}, 1fr)`}
      gridTemplateRows="1fr 1fr"
      gridTemplateAreas={`
      "chart0 chart1 chart2 chart3"
      "label0 label1 label2 label3"
      `}
      rowGap={1}
    >
      {interestRateChartItems.map((chartItem, index) => {
        return (
          <Fragment key={index}>
            <Box sx={{ gridArea: `chart${index}`, alignSelf: "flex-end" }}>
              <Stack
                gap={1}
                sx={{ px: 0.5, borderBottom: "1px solid #e5e5e5" }}
              >
                <Typography
                  textAlign="center"
                  fontSize={chartItem.highlight ? 12 : 10}
                  fontWeight={chartItem.highlight ? "bold" : "normal"}
                  color={chartItem.highlight ? "primary" : "normal"}
                >
                  {chartItem.value}%
                </Typography>

                <Box
                  sx={{
                    height: `calc(${chartItem.value} * .15rem)`,
                    width: "100%",
                    backgroundColor: chartItem.highlight
                      ? "primary.main"
                      : "#e5e5e5",
                    borderRadius: ".5rem .5rem 0 0",
                  }}
                />
              </Stack>
            </Box>

            <Typography
              textAlign="center"
              fontSize={8}
              fontWeight={chartItem.highlight ? "bold" : "normal"}
              color={chartItem.highlight ? "primary" : "normal"}
              sx={{ gridArea: `label${index}` }}
            >
              {chartItem.label}
            </Typography>
          </Fragment>
        );
      })}
    </Box>
  );
};

export interface IInterestRateChartItem {
  label: string;
  value: number;
  highlight?: boolean;
}

const interestRateChartItems: IInterestRateChartItem[] = [
  {
    label: "GS Consig",
    value: 20,
    highlight: true,
  },
  { label: "Concorrente1", value: 45 },
  { label: "Concorrente2", value: 50 },
  { label: "Concorrente3", value: 56 },
];
