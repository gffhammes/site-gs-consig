import { Box, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { IconTitleTextSection } from "@/src/Services/IconTitleTextSection";
import { ProductH1 } from "@/src/Services/ProductH1";
import { CustomImage } from "@/src/common/CustomImage";
import { StepByStepSection } from "@/src/Services/StepByStepSection";
import { SERVICO_CREDITO_NOVO } from "@/src/pages/ProductsPage/services";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import { MAIN_WHATSAPP, generateWhatsappLink } from "@/src/utils/helpers";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crédito Novo INSS | GS Consig",
  description:
    "Obtenha seu crédito novo INSS com facilidade em Balneário Camboriú. Conosco, você tem acesso a soluções financeiras personalizadas, especialmente criadas para beneficiários do INSS. Simplificamos o processo para garantir que você tenha uma experiência tranquila. Descubra como iniciar uma nova fase financeira conosco - solicite seu crédito novo INSS hoje!",
};

export default function Page() {
  const whatsappLink = generateWhatsappLink(
    MAIN_WHATSAPP,
    `Olá, vim pelo site e gostaria de uma simulação de ${SERVICO_CREDITO_NOVO.name}`
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
              caption={SERVICO_CREDITO_NOVO.name}
              title="Você merece uma vida financeira mais tranquila!"
              subtitle={`O Crédito Novo INSS é a sua porta de entrada para um mundo de possibilidades financeiras.
              
Com taxas competitivas, prazos flexíveis e um processo rápido e descomplicado, estamos aqui para atender às suas necessidades financeiras.`}
              buttonLink={whatsappLink}
              target="_blank"
            />
          </Box>

          <CustomImage
            src={SERVICO_CREDITO_NOVO.thumbUrl}
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
            src={SERVICO_CREDITO_NOVO.thumbUrl}
            alt={SERVICO_CREDITO_NOVO.name}
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
                icon: ThumbUpAltOutlinedIcon,
                title: "Dinheiro Rápido e Sem Complicações",
                text: "Descomplicamos o processo. Conseguir crédito é fácil e rápido, sem papelada complicada.",
              },
              {
                icon: SavingsOutlinedIcon,
                title: "Juros Baixos e Tudo às Claras",
                text: "Mantemos as coisas simples e justas. Oferecemos taxas de juros baixas e sem surpresas escondidas.",
              },
              {
                icon: TagFacesOutlinedIcon,
                title: "Você é Único, Assim Como Nosso Atendimento",
                text: "Entendemos você. Nossa equipe está pronta para ajudar de forma personalizada, tornando o processo amigável e tranquilo.",
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

      <ServiceSimulator product={SERVICO_CREDITO_NOVO.name} />

      <Container maxWidth="md">
        <Stack gap={4}>
          <Typography variant="h2" color="primary">
            Perguntas frequentes
          </Typography>

          <FaqAccordion
            items={[
              {
                question:
                  "Quais documentos são necessários para solicitar o empréstimo?",
                answer:
                  "Você precisará apenas de documentos simples, como RG, CPF e comprovante de residência. Não se preocupe, nossa equipe está pronta para te ajudar durante todo o processo.",
              },
              {
                question:
                  "Quanto tempo leva para o dinheiro ser depositado na minha conta?",
                answer:
                  "Após a aprovação, o dinheiro é depositado rapidinho na sua conta. Fazemos o máximo para tornar esse processo o mais ágil possível. Estamos sempre aqui para te manter informado!",
              },
              {
                question:
                  "Quem está elegível para contratar o Crédito Novo INSS e como posso usar o dinheiro?",
                answer:
                  "Todas as pessoas aposentadas pelo INSS estão elegíveis para contratar. Quanto ao uso do dinheiro, a escolha é sua! Pode ser usado para realizar sonhos, quitar dívidas, fazer melhorias em casa ou até mesmo para emergências. Estamos aqui para ajudar você a conquistar seus objetivos!",
              },
            ]}
          />
        </Stack>
      </Container>
    </Stack>
  );
}
