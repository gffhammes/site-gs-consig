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

          <CustomImage
            src={product.thumbUrl}
            alt={product.name}
            width="100%"
            aspectRatio="1.3 / 1"
            sx={{ transform: { xs: "translateY(75px)", md: "none" } }}
          />
        </Box>
      </Container>
    </Box>
  );
};
