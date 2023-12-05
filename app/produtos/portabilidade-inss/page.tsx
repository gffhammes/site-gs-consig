import { Box, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { PortabilidadeInssVantagens } from "@/src/Services/PortabilidadeInssVantagens";
import { ProductH1 } from "@/src/Services/ProductH1";
import { CustomImage } from "@/src/common/CustomImage";
import { PortabilidadeInssStepByStep } from "@/src/Services/PortabilidadeInssStepByStep";
import { SERVICO_PORTABILIDADE } from "@/src/ServicesPage/services";

export default function Page() {
  return (
    <Stack gap={{ xs: 16, md: 20 }} sx={{ pt: 4, pb: 16 }}>
      <Container maxWidth="md">
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
          gap={8}
        >
          <Box sx={{ py: "1rem" }}>
            <ProductH1
              caption="PORTABILIDADE INSS"
              title="Transforme seu consignado em economia!"
              subtitle="Diminua o valor da sua parcela e tenha dinheiro para viver! Conheça
              agora mesmo nossas condições especiais para te dar mais qualidade de
              vida"
            />
          </Box>

          <CustomImage
            src={SERVICO_PORTABILIDADE.thumbUrl}
            alt="portabilidade-inss"
            height="100%"
            width="100%"
            objectFit="cover"
            sx={{
              display: { xs: "none", sm: "block" },
              borderRadius: "1rem",
            }}
          />
        </Box>
      </Container>

      <Stack>
        <Stack
          width="100%"
          alignItems="flex-end"
          sx={{
            background: "linear-gradient(0deg, #f4f4f4 50%, white 50%)",
            display: { xs: "flex", sm: "none" },
          }}
        >
          <CustomImage
            src={SERVICO_PORTABILIDADE.thumbUrl}
            alt="portabilidade-inss"
            height="15rem"
            width="15rem"
            objectFit="cover"
            sx={{
              borderRadius: "1rem 0 0 1rem",
            }}
          />
        </Stack>

        <Box
          sx={{
            backgroundColor: "#f4f4f4",
            py: 16,
          }}
        >
          <Container>
            <PortabilidadeInssVantagens />
          </Container>
        </Box>
      </Stack>

      <PortabilidadeInssStepByStep />

      <Box sx={{ backgroundColor: "#F4F4F4", py: 16 }}>
        <Container>reviews</Container>
      </Box>

      {/* <Container>simulador</Container> */}

      <Container maxWidth="md">
        <Stack gap={4}>
          <Typography variant="h2" color="primary">
            Perguntas frequentes
          </Typography>

          <FaqAccordion
            items={[
              {
                question: "O que é portabilidade de crédito consignado?",
                answer:
                  "A portabilidade de crédito consignado é quando você transfere seu empréstimo de um banco ou instituição financeira para outro, mantendo as mesmas condições, como taxa de juros e prazo de pagamento. É uma maneira de buscar melhores opções sem precisar pagar mais.",
              },
              {
                question: "Quais os benefícios de fazer a portabilidade?",
                answer:
                  "Os benefícios da portabilidade incluem a possibilidade de economizar dinheiro com taxas de juros mais baixas, reduzir o valor das parcelas mensais e melhorar suas finanças pessoais. Você pode encontrar ofertas mais vantajosas e flexíveis em outro lugar.",
              },
              {
                question: "Como saber se é vantajoso fazer a portabilidade?",
                answer:
                  "Para saber se a portabilidade é vantajosa, compare as condições do seu empréstimo atual com as ofertas de outras instituições. Se a nova oferta tiver taxas de juros mais baixas e melhores condições de pagamento, provavelmente é vantajoso fazer a portabilidade. Lembre-se de considerar as taxas e os custos envolvidos na transferência.",
              },
            ]}
          />
        </Stack>
      </Container>
    </Stack>
  );
}
