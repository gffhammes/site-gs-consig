import { Container, Paper, Stack, Typography } from "@mui/material";
import { services } from "../ProductsPage/services";
import { ArrowButton } from "../../common/ArrowButton/ArrowButton";

export interface IServicesButtonsProps {}

export const ServicesButtons = () => {
  return (
    <Container sx={{ transform: "translateY(-50px)" }}>
      <Stack
        direction="row"
        width="100%"
        gap={2}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        justifyContent="center"
      >
        {services.map((service) => (
          <Paper
            key={service.name}
            elevation={5}
            sx={{ width: { xs: "45%", md: "100%" }, p: 2 }}
          >
            <Stack height="100%" gap={2} alignItems="flex-start">
              <Stack flexGrow={1} gap={1}>
                <service.Icon
                  color="primary"
                  sx={{ fontSize: { xs: "24px", md: "32px" } }}
                />

                <Typography
                  variant="h3"
                  textTransform="uppercase"
                  fontSize={{ xs: 14, md: 16 }}
                >
                  {service.name}
                </Typography>

                <Typography fontSize={{ xs: 14, md: 16 }}>
                  {service.description}
                </Typography>
              </Stack>

              <ArrowButton href={`/produtos/${service.slug}`} />
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};
