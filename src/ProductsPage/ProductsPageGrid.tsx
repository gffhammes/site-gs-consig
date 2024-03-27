import { Box, Container, Stack } from "@mui/material";
import { ProductsPageTitle } from "./ProductsPageTitle";
import { services } from "../ServicesPage/services";
import { ProductsPageProductCard } from "./ProductsPageProductCard";

export interface IProductsPageGridProps {}

export const ProductsPageGrid = (props: IProductsPageGridProps) => {
  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
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
