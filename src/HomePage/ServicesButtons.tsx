import { Container, Paper, Stack, Typography } from "@mui/material";
import { services } from "../ServicesPage/services";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { ArrowButton } from "../common/ArrowButton/ArrowButton";

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

              <ArrowButton href={`/produtos/${service.slug}`} />
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};
