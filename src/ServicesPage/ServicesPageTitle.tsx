import { Container, Stack, Typography } from "@mui/material";

export interface IServicesPageTitleProps {}

export const ServicesPageTitle = () => {
  return (
    <Container>
      <Stack alignItems="center" gap={4}>
        <Typography
          variant="h1"
          color="primary"
          width="100%"
          textAlign={{ sm: "center" }}
        >
          Conheça nossos produtos
        </Typography>

        <Typography
          fontSize={20}
          textAlign={{ sm: "center" }}
          width="100%"
          maxWidth={{ sm: "36ch" }}
        >
          As melhores taxas do mercado e atendimento diferenciado
        </Typography>
      </Stack>
    </Container>
  );
};
