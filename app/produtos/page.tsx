import { ServicesPageList } from "@/src/ServicesPage/ServicesPageList";
import { BanksSection } from "@/src/common/BanksSection/BanksSection";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { Container, Divider, Stack, Typography } from "@mui/material";

export default function Produtos() {
  return (
    <Stack gap={{ xs: 16, md: 20 }} sx={{ py: 16 }}>
      <Container>
        <Stack alignItems="center" gap={4}>
          <Typography variant="h1" color="primary" textAlign="center">
            Conheça nossos produtos
          </Typography>

          <Typography fontSize={20} textAlign="center" maxWidth="36ch">
            Trabalhamos com as melhores taxas do mercado e atendimento
            diferenciado. Selecione um produto e dê mais um passo
          </Typography>
        </Stack>
      </Container>

      <ServicesPageList />

      <Container maxWidth="sm">
        <Divider />
      </Container>

      <InterestRateSection />

      <BanksSection />
    </Stack>
  );
}
