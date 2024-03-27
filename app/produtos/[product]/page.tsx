import { Box, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { IconTitleTextSection } from "@/src/Services/IconTitleTextSection";
import { ProductH1 } from "@/src/Services/ProductH1";
import { CustomImage } from "@/src/common/CustomImage";
import { StepByStepSection } from "@/src/Services/StepByStepSection";
import { MAIN_WHATSAPP, generateWhatsappLink } from "@/src/utils/helpers";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";
import { Metadata, ResolvingMetadata } from "next";
import { services } from "@/src/PagesComponents/ProductsPage/services";
import { redirect } from "next/navigation";

type Props = {
  params: { product: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = services.find((service) => {
    return service.slug === params.product;
  });

  return {
    title: product?.metaTitle,
    description: product?.metaDescription,
  };
}

export default function Page({ params }: Props) {
  const product = services.find((service) => {
    return service.slug === params.product;
  });

  if (!product) {
    redirect("/produtos");
  }

  const whatsappLink = generateWhatsappLink(
    MAIN_WHATSAPP,
    `Olá, vim pelo site e gostaria de uma simulação de ${product.name}`
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
              caption={product.name}
              title={product.pageH1}
              subtitle={product.pageSubtitle}
              buttonLink="#simulador"
            />
          </Box>

          <CustomImage
            src={product.thumbUrl}
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
            src={product.thumbUrl}
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
            items={product.iconTextItens}
          />
        </Box>
      </Stack>

      <StepByStepSection steps={product.steps} />

      <ServiceSimulator product={product.name} />

      <Container maxWidth="md">
        <Stack gap={4}>
          <Typography variant="h2" color="primary">
            Perguntas frequentes
          </Typography>

          <FaqAccordion items={product.faq} />
        </Stack>
      </Container>
    </Stack>
  );
}
