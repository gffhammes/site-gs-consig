import { Container, Paper, Stack, Typography } from "@mui/material";
import { services } from "../ServicesPage/services";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

export interface IServicesButtonsProps {}

export const ServicesButtons = (props: IServicesButtonsProps) => {
  return (
    <Container sx={{ transform: "translateY(-50%)" }}>
      <Stack direction="row" width="100%" gap={2}>
        {services.map((service) => (
          <Paper key={service.name} elevation={5} sx={{ width: "100%", p: 2 }}>
            <Stack height="100%" gap={2} alignItems="flex-start">
              <Stack flexGrow={1} gap={1}>
                <service.Icon fontSize="large" color="primary" />

                <Typography
                  variant="h3"
                  textTransform="uppercase"
                  fontSize={16}
                >
                  {service.name}
                </Typography>

                <Typography fontSize={16}>{service.description}</Typography>
              </Stack>

              <Stack
                direction="row"
                color="primary.main"
                gap={1}
                component={Link}
                href={`/produtos/${service.slug}`}
              >
                <Typography variant="button" color="inherit">
                  SAIBA MAIS
                </Typography>

                <EastIcon color="inherit" />
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};
