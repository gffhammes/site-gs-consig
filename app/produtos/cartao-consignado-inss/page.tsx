import { Box, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { IconTitleTextSection } from "@/src/Services/IconTitleTextSection";
import { ProductH1 } from "@/src/Services/ProductH1";
import { CustomImage } from "@/src/common/CustomImage";
import { StepByStepSection } from "@/src/Services/StepByStepSection";
import { CARTAO_CONSIGNADO_INSS } from "@/src/ServicesPage/services";
import { MAIN_WHATSAPP, generateWhatsappLink } from "@/src/utils/helpers";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";

export default function Page() {
  const whatsappLink = generateWhatsappLink(
    MAIN_WHATSAPP,
    `Olá, vim pelo site e gostaria de uma simulação de ${CARTAO_CONSIGNADO_INSS.name}`
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
              caption={CARTAO_CONSIGNADO_INSS.name}
              title="Tenha Controle Total com o Cartão Consignado INSS!"
              subtitle={`Nosso Cartão Consignado INSS oferece facilidade e praticidade para aposentados. Controle suas despesas com um cartão feito para atender suas necessidades financeiras.`}
              buttonLink={whatsappLink}
              target="_blank"
            />
          </Box>

          <CustomImage
            src={CARTAO_CONSIGNADO_INSS.thumbUrl}
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
            src={CARTAO_CONSIGNADO_INSS.thumbUrl}
            alt={CARTAO_CONSIGNADO_INSS.name}
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
                icon: CreditCardOutlinedIcon,
                title: "Compra com Desconto Direto em Folha",
                text: "Faça compras com seu cartão e tenha o valor descontado diretamente no seu benefício, proporcionando controle e conveniência.",
              },
              {
                icon: TaskAltOutlinedIcon,
                title: "Sem Anuidade e Taxas Transparentes",
                text: "Oferecemos um cartão sem anuidade e com taxas transparentes. Sem surpresas, apenas vantagens financeiras.",
              },
              {
                icon: StorefrontOutlinedIcon,
                title: "Aceito em Milhares de Estabelecimentos",
                text: "Use seu cartão em diversos estabelecimentos, garantindo conveniência e acessibilidade em suas transações.",
              },
            ]}
          />
        </Box>
      </Stack>
      <StepByStepSection
        steps={[
          {
            image: "/celular-para-idoso-boas-opcoes-1024x682.jpg",
            text: "Solicite Seu Cartão em Minutos",
          },
          {
            image:
              "/homem-senior-feliz-usando-o-touchpad-e-assinando-uma-entrega-do-correio.jpg",
            text: "Receba em Casa sem Complicações",
          },
          {
            image:
              "/cartao-beneficio-inss-para-aposentados-e-pensionistas.jpeg",
            text: "Ative e Comece a Usar",
          },
        ]}
      />

      <ServiceSimulator product={CARTAO_CONSIGNADO_INSS.name} />

      <Container maxWidth="md">
        <Stack gap={4}>
          <Typography variant="h2" color="primary">
            Perguntas frequentes
          </Typography>

          <FaqAccordion
            items={[
              {
                question:
                  "Quais documentos são necessários para solicitar o Cartão Consignado INSS?",
                answer:
                  "O processo é fácil! Basta ter RG, CPF e comprovante de residência. Estamos aqui para te guiar durante todo o processo.",
              },
              {
                question:
                  "Como funciona o desconto em folha no Cartão Consignado INSS?",
                answer:
                  "As despesas feitas com o cartão são descontadas diretamente do seu benefício do INSS, oferecendo praticidade e evitando preocupações com faturas.",
              },
              {
                question: "O Cartão Consignado INSS possui limite de crédito?",
                answer:
                  "Sim, mas o limite é estabelecido com base na margem consignável do seu benefício, proporcionando um controle financeiro seguro.",
              },
            ]}
          />
        </Stack>
      </Container>
    </Stack>
  );
}
