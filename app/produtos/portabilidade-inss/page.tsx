import { Box, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { IconTitleTextSection } from "@/src/Services/IconTitleTextSection";
import { ProductH1 } from "@/src/Services/ProductH1";
import { CustomImage } from "@/src/common/CustomImage";
import { StepByStepSection } from "@/src/Services/StepByStepSection";
import { SERVICO_PORTABILIDADE } from "@/src/ServicesPage/services";
import { PortabilidadeInssSimulator } from "@/src/Services/PortabilidadeInssSimulator";

import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

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
              caption={SERVICO_PORTABILIDADE.name}
              title="Transforme seu consignado em economia!"
              subtitle="Diminua o valor da sua parcela e tenha dinheiro para viver! Conheça
              agora mesmo nossas condições especiais para te dar mais qualidade de
              vida"
              buttonLink="#simulador"
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
          <IconTitleTextSection
            buttonLink="#simulador"
            items={[
              {
                icon: SavingsOutlinedIcon,
                title: "Taxas mais baixas",
                text: "Reduza os juros do seu empréstimo!",
              },
              {
                icon: TagFacesOutlinedIcon,
                title: "Facilidade e comodidade",
                text: "Processo rápido e sem burocracia.",
              },
              {
                icon: SupportAgentIcon,
                title: "Atendimento personalizado",
                text: "Equipe especializada para te auxiliar.",
              },
            ]}
          />
        </Box>
      </Stack>

      <StepByStepSection
        steps={[
          {
            image: "/celular-para-idoso-boas-opcoes-1024x682.jpg",
            text: "Solicite uma simulação gratuita",
          },
          {
            image: "/size_960_16_9_idosos-aposentadoria1.webp",
            text: "Compare as condições e taxas",
          },
          {
            image:
              "/close-up-of-senior-couple-showing-piggy-bank-to-save-money-elderly-couple-holding-piggy-bank-for-investment-and-future-planning-concept-happy-retired-couple-holding-piggy-bank-together-at-home.jpg",
            text: "Autorize a portabilidade e economize!",
          },
        ]}
      />

      <PortabilidadeInssSimulator />

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
