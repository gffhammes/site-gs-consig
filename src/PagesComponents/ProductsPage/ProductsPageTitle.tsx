import { Box, Typography } from "@mui/material";

export interface IProductsPageTitleProps {}

export const ProductsPageTitle = () => {
  return (
    <Box sx={{ p: { xs: 0, md: 4 } }}>
      <Typography
        component="h1"
        fontSize={{ xs: 32, md: 50 }}
        sx={{
          "& > strong": {
            color: "primary.main",
          },
        }}
      >
        Conheça nossos <strong>produtos.</strong>
      </Typography>
    </Box>
  );
};
