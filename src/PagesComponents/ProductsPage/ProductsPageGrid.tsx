import { Box, Container } from "@mui/material";
import { ProductsPageTitle } from "./ProductsPageTitle";
import { services } from "./services";
import { ProductsPageProductCard } from "./ProductsPageProductCard";

export interface IProductsPageGridProps {}

export const ProductsPageGrid = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gridTemplateRows: { xs: "auto", md: "1fr 1fr" },
          gap: 4,
          alignItems: "center",
        }}
      >
        <ProductsPageTitle />

        {services.map((service) => (
          <ProductsPageProductCard key={service.name} service={service} />
        ))}
      </Box>
    </Container>
  );
};
