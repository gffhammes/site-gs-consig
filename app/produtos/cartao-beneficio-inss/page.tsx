import { Box, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { IconTitleTextSection } from "@/src/Services/IconTitleTextSection";
import { ProductH1 } from "@/src/Services/ProductH1";
import { CustomImage } from "@/src/common/CustomImage";
import { StepByStepSection } from "@/src/Services/StepByStepSection";
import { CARTAO_BENEFICIO_INSS } from "@/src/ServicesPage/services";
import { MAIN_WHATSAPP, generateWhatsappLink } from "@/src/utils/helpers";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import PhonelinkSetupOutlinedIcon from "@mui/icons-material/PhonelinkSetupOutlined";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";

export default function Page() {
  const whatsappLink = generateWhatsappLink(
    MAIN_WHATSAPP,
    `Olá, vim pelo site e gostaria de uma simulação de ${CARTAO_BENEFICIO_INSS.name}`
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
              caption={CARTAO_BENEFICIO_INSS.name}
              title="Desfrute da Liberdade com o Cartão Benefício INSS!"
              subtitle={`O Cartão Benefício INSS oferece liberdade e comodidade para aposentados. Gerencie seus recursos de maneira simples e eficiente.`}
              buttonLink={whatsappLink}
              target="_blank"
            />
          </Box>

          <CustomImage
            src={CARTAO_BENEFICIO_INSS.thumbUrl}
            alt={CARTAO_BENEFICIO_INSS.name}
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
            src={CARTAO_BENEFICIO_INSS.thumbUrl}
            alt={CARTAO_BENEFICIO_INSS.name}
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
                icon: MonetizationOnOutlinedIcon,
                title: "Sem Conta Bancária, Mais Facilidade",
                text: "Utilize seu cartão sem a exigência de conta bancária, simplificando suas transações e proporcionando mais autonomia.",
              },
              {
                icon: ShareLocationOutlinedIcon,
                title: "Saques e Pagamentos em Qualquer Lugar",
                text: "Efetue saques e realize pagamentos em diversos estabelecimentos por todo o Brasil, garantindo conveniência onde quer que esteja.",
              },
              {
                icon: PhonelinkSetupOutlinedIcon,
                title: "Controle na Ponta dos Dedos",
                text: "Gerencie seus gastos de forma conveniente e segura através do aplicativo exclusivo do cartão.",
              },
            ]}
          />
        </Box>
      </Stack>

      <StepByStepSection
        steps={[
          {
            image: "/celular-para-idoso-boas-opcoes-1024x682.jpg",
            text: "Solicite Seu Cartão Benefício em Minutos",
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

      <ServiceSimulator product={CARTAO_BENEFICIO_INSS.name} />

      <Container maxWidth="md">
        <Stack gap={4}>
          <Typography variant="h2" color="primary">
            Perguntas frequentes
          </Typography>

          <FaqAccordion
            items={[
              {
                question:
                  "Quais documentos são necessários para solicitar o Cartão Benefício INSS?",
                answer:
                  "O processo é fácil! Basta ter RG, CPF e comprovante de residência. Estamos aqui para te guiar durante todo o processo.",
              },
              {
                question:
                  "Posso utilizar o Cartão Benefício em compras online?",
                answer:
                  "Sim, o cartão é aceito em compras online, proporcionando mais conveniência nas suas transações.",
              },
              {
                question:
                  "Existe limite de saques diários com o Cartão Benefício?",
                answer:
                  "O cartão possui um limite diário para saques, oferecendo segurança e controle financeiro.",
              },
            ]}
          />
        </Stack>
      </Container>
    </Stack>
  );
}
