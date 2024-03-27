import { Box, Typography } from "@mui/material";

export interface IProductsPageTitleProps {}

export const ProductsPageTitle = (props: IProductsPageTitleProps) => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        component="h1"
        fontSize={50}
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
