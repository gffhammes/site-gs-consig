import { ProductH1 } from "@/src/Services/ProductH1";
import { Box, Container } from "@mui/material";
import { CustomImage } from "@/src/common/CustomImage";
import { IService } from "../ProductsPage/services";

export interface IProductPageHeroProps {
  product: IService;
}

export const ProductPageHero = ({ product }: IProductPageHeroProps) => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", pt: 16, pb: { xs: 0, md: 16 } }}>
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 2fr" }}
          gap={{ xs: 2, md: 8 }}
          alignItems="center"
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
            height={{ xs: "20rem", md: "100%" }}
            sx={{
              transform: { xs: "translateY(50px)", md: "translateX(50px)" },
            }}
          >
            <CustomImage
              src={product.thumbUrl}
              alt="portabilidade-inss"
              height="100%"
              width="100%"
              objectFit="cover"
              sx={{
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
                borderRadius: "1rem",
                gridArea: "image3",
                transform: "translateX(-50px)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
