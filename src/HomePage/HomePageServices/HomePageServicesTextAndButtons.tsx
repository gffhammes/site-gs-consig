import { services } from "@/app/produtos/page";
import { Chip, Stack, Typography } from "@mui/material";

export interface IHomePageServicesTextAndButtonsProps {}

export const HomePageServicesTextAndButtons = () => {
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
            key={service.name}
            label={service.name.toUpperCase()}
            variant="outlined"
            color="primary"
            size="small"
          />
        ))}
      </Stack>
    </Stack>
  );
};
