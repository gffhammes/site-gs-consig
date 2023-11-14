import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { IHomeBanner } from "../types/strapi";

export interface IBannerProps {
  banners: IHomeBanner[];
}

export const Banner = ({ banners }: IBannerProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${banners[0].foto.data.attributes.formats.large.url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Stack height="100%" width="100%" justifyContent="center">
          <Typography color="white" variant="h1">
            {banners[0].texto}
          </Typography>

          <Button variant="contained" sx={{ width: "fit-content" }}>
            {banners[0].botao.texto}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
