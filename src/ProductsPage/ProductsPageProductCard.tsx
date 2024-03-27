import { Box, Paper, Stack, Typography } from "@mui/material";
import { IService } from "../ServicesPage/services";
import { ArrowButton } from "../common/ArrowButton/ArrowButton";
import Link from "next/link";

export interface IProductsPageProductCardProps {
  service: IService;
}

export const ProductsPageProductCard = ({
  service,
}: IProductsPageProductCardProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{ borderRadius: 4, p: 4 }}
      component={Link}
      href={`/produtos/${service.slug}`}
    >
      <Stack gap={2}>
        <Box sx={{ fontSize: 48 }}>
          <service.Icon fontSize="inherit" color="primary" />
        </Box>

        <Stack gap={1}>
          <Typography textTransform="uppercase" fontWeight="bold" fontSize={20}>
            {service.name}
          </Typography>

          <Typography>{service.mainDescription}</Typography>
        </Stack>

        <ArrowButton />
      </Stack>
    </Paper>
  );
};
