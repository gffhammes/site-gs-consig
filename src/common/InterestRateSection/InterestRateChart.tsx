import { Box, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

export interface IInterestRateChartProps {}

export const InterestRateChart = () => {
  return (
    <Box
      maxWidth="26rem"
      width="100%"
      display="grid"
      gridTemplateColumns={`repeat(${interestRateChartItems.length}, 1fr)`}
      gridTemplateRows="1fr min-content"
      gridTemplateAreas={`
      "chart0 chart1 chart2 chart3"
      "label0 label1 label2 label3"
      `}
      rowGap={1}
    >
      {interestRateChartItems.map((chartItem, index) => {
        const barMultiplier = index === 0 ? 0.5 : 1.2;

        return (
          <Fragment key={index}>
            <Box sx={{ gridArea: `chart${index}`, alignSelf: "flex-end" }}>
              <Stack
                gap={1}
                sx={{ px: 0.5, borderBottom: "1px solid #e5e5e5" }}
              >
                <Typography
                  textAlign="center"
                  fontSize={
                    chartItem.highlight
                      ? { xs: 12, sm: 16, md: 20 }
                      : { xs: 10, sm: 12 }
                  }
                  fontWeight={chartItem.highlight ? "bold" : "normal"}
                  color={chartItem.highlight ? "primary" : "normal"}
                >
                  {chartItem.value}%
                </Typography>

                <Box
                  sx={{
                    height: `calc(${chartItem.value} * ${barMultiplier}rem)`,
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
              fontSize={{ xs: 8, sm: 10, md: 12 }}
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
    value: 1.38,
    highlight: true,
  },
  { label: "Outros consignados", value: 1.84 },
  { label: "Cheque especial", value: 8 },
  { label: "Cartão de crédito", value: 12 },
];
