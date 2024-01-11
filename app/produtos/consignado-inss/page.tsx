import { Box, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { IconTitleTextSection } from "@/src/Services/IconTitleTextSection";
import { ProductH1 } from "@/src/Services/ProductH1";
import { CustomImage } from "@/src/common/CustomImage";
import { StepByStepSection } from "@/src/Services/StepByStepSection";
import { CONSIGNADO_INSS } from "@/src/ServicesPage/services";
import { MAIN_WHATSAPP, generateWhatsappLink } from "@/src/utils/helpers";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";

export default function Page() {
  const whatsappLink = generateWhatsappLink(
    MAIN_WHATSAPP,
    `Olá, vim pelo site e gostaria de uma simulação de ${CONSIGNADO_INSS.name}`
  );

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
              caption={CONSIGNADO_INSS.name}
              title="Tenha Mais Controle com o Consignado INSS!"
              subtitle={`O Consignado INSS é a chave para conquistar estabilidade financeira. Com condições especiais, garantimos um processo simples e vantajoso para aposentados como você.`}
              buttonLink={whatsappLink}
              target="_blank"
            />
          </Box>

          <CustomImage
            src={CONSIGNADO_INSS.thumbUrl}
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
            src={CONSIGNADO_INSS.thumbUrl}
            alt={CONSIGNADO_INSS.name}
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
            buttonLink={whatsappLink}
            target="_blank"
            items={[
              {
                icon: ReceiptLongOutlinedIcon,
                title: "Pagamento sem Preocupações",
                text: "O valor das parcelas é descontado diretamente do seu benefício. Assim, você não precisa se preocupar com pagamentos atrasados.",
              },
              {
                icon: TaskAltOutlinedIcon,
                title: "Transparência em Cada Parcela",
                text: "Mantemos as taxas transparentes e competitivas, para que você tenha total clareza sobre os custos do seu empréstimo.",
              },
              {
                icon: TagFacesOutlinedIcon,
                title: "Processo Rápido e Descomplicado",
                text: "Descomplicamos o processo. Com poucos documentos, garantimos um processo rápido para que você receba o dinheiro quando mais precisa.",
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
            text: "Envie a documentação necessária",
          },
          {
            image:
              "/close-up-of-senior-couple-showing-piggy-bank-to-save-money-elderly-couple-holding-piggy-bank-for-investment-and-future-planning-concept-happy-retired-couple-holding-piggy-bank-together-at-home.jpg",
            text: "Receba o dinheiro na sua conta!",
          },
        ]}
      />

      <ServiceSimulator product={CONSIGNADO_INSS.name} />

      <Container maxWidth="md">
        <Stack gap={4}>
          <Typography variant="h2" color="primary">
            Perguntas frequentes
          </Typography>

          <FaqAccordion
            items={[
              {
                question:
                  "Quais documentos são necessários para solicitar o empréstimo consignado?",
                answer:
                  "O processo é fácil! Basta ter RG, CPF e comprovante de residência. Estamos aqui para te guiar durante todo o processo.",
              },
              {
                question:
                  "Como funciona o desconto em folha no consignado INSS?",
                answer:
                  "As parcelas são automaticamente descontadas do seu benefício do INSS, oferecendo praticidade e evitando preocupações com pagamento de contas.",
              },
              {
                question: "Posso quitar o empréstimo antecipadamente?",
                answer:
                  "Claro! Oferecemos a flexibilidade de quitar o empréstimo antes do prazo, sem taxas extras. Sua satisfação é nossa prioridade.",
              },
            ]}
          />
        </Stack>
      </Container>
    </Stack>
  );
}
