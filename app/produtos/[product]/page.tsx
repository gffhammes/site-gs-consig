import { Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { IconTitleTextSection } from "@/src/Services/IconTitleTextSection";
import { StepByStepSection } from "@/src/PagesComponents/ProductPage/StepByStepSection";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";
import { Metadata } from "next";
import { services } from "@/src/PagesComponents/ProductsPage/services";
import { redirect } from "next/navigation";
import { ProductPageHero } from "@/src/PagesComponents/ProductPage/ProductPageHero";

type Props = {
  params: { product: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

  return (
    <Stack gap={{ xs: 16, md: 20 }} sx={{ pb: 16 }}>
      <Stack gap={{ xs: 20, md: 20 }}>
        <ProductPageHero product={product} />

        <IconTitleTextSection
          buttonLink="#simulador"
          items={product.iconTextItens}
        />
      </Stack>

      <Stack>
        <StepByStepSection steps={product.steps} />

        <ServiceSimulator product={product.name} />
      </Stack>

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
