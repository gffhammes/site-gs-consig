import { Chip, Stack, Typography } from "@mui/material";

export interface IHomePageServicesTextAndButtonsProps {}

const services = [
  {
    label: "portabilidade inss",
  },
  {
    label: "credito novo inss",
  },
  {
    label: "consignado inss",
  },
  {
    label: "cartao consignado inss",
  },
  {
    label: "cartao beneficio inss",
  },
];

export const HomePageServicesTextAndButtons = (
  props: IHomePageServicesTextAndButtonsProps
) => {
  return (
    <Stack gap={4}>
      <Stack gap={2}>
        <Typography variant="h2" color="primary" maxWidth="14ch">
          Lorem ipsum dolor sit amet
        </Typography>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius
          nulla eleifend.
        </Typography>
      </Stack>

      <Stack flexWrap="wrap" direction="row" gap={1}>
        {services.map((service) => (
          <Chip
            key={service.label}
            label={service.label.toUpperCase()}
            variant="outlined"
            color="primary"
            size="small"
          />
        ))}
      </Stack>
    </Stack>
  );
};
