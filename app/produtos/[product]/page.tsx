import { Box, Container, Stack, Typography } from "@mui/material";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";
import { IconTitleTextSection } from "@/src/Services/IconTitleTextSection";
import { ProductH1 } from "@/src/Services/ProductH1";
import { CustomImage } from "@/src/common/CustomImage";
import { StepByStepSection } from "@/src/Services/StepByStepSection";
import { ServiceSimulator } from "@/src/Services/ServiceSimulator";
import { Metadata } from "next";
import { services } from "@/src/PagesComponents/ProductsPage/services";
import { redirect } from "next/navigation";

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
      <Stack>
        <Box sx={{ backgroundColor: "#f4f4f4", py: 16 }}>
          <Container>
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "1fr 2fr" }}
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

              <Box
                display="grid"
                gridTemplateColumns="1fr 2fr 1.5fr"
                gridTemplateRows="1fr 2fr 1fr 2fr 1fr"
                gridTemplateAreas={`
                  'nothing1   image1  nothing2'
                  'image2     image1  nothing2'
                  'image2     image1  image3'
                  'nothing3   image1  image3'
                  'nothing3   image1  nothing4'
                `}
                sx={{ transform: "translateX(50px)" }}
              >
                <CustomImage
                  src={product.thumbUrl}
                  alt="portabilidade-inss"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    borderRadius: "1rem",
                    gridArea: "image2",
                    transform: "translateX(30px)",
                    zIndex: 999,
                  }}
                />

                <CustomImage
                  src={product.thumbUrl}
                  alt="portabilidade-inss"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    borderRadius: "1rem",
                    gridArea: "image1",
                  }}
                />

                <CustomImage
                  src={product.thumbUrl}
                  alt="portabilidade-inss"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    borderRadius: "1rem",
                    gridArea: "image3",
                    transform: "translateX(-50px)",
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Stack>

      <IconTitleTextSection
        buttonLink="#simulador"
        items={product.iconTextItens}
      />

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
