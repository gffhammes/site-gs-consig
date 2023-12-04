"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Color from "color";

// export interface IHomePageBannerProps {
//   banners: IHomeBanner[];
// }

export const HomePageBanner = () =>
  // { banners }: IHomePageBannerProps
  {
    const { palette } = useTheme();

    const transparentPrimary = Color(palette.primary.main).alpha(0.5).string();

    return (
      <Box
        sx={{
          height: "80vh",
          width: "100%",
          backgroundImage: `url(${banners[0].image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",

          ":before": {
            content: "''",
            height: "100%",
            width: "100%",
            top: 0,
            position: "absolute",
            background: `linear-gradient(90deg, ${transparentPrimary}, ${transparentPrimary} 50%, rgba(0, 0, 0, 0))`,
            mixBlendMode: "multiply",
          },

          ":after": {
            content: "''",
            height: "100%",
            width: "100%",
            top: 0,
            position: "absolute",
            background: `linear-gradient(90deg, ${transparentPrimary}, ${transparentPrimary} 50%, rgba(0, 0, 0, 0))`,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Stack
            height="100%"
            width="100%"
            justifyContent="center"
            gap={4}
            position="relative"
            zIndex={999}
          >
            <Stack gap={4}>
              <Stack>
                <Typography color="white" variant="caption">
                  {banners[0].product}
                </Typography>

                <Typography color="white" variant="h1" maxWidth="16ch">
                  {banners[0].h1}
                </Typography>
              </Stack>

              <Button
                size="large"
                variant="contained"
                sx={{
                  width: "fit-content",
                }}
              >
                {banners[0].buttonText}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  };

export interface IBannerItem {
  image: string;
  h1: string;
  buttonText: string;
  product: string;
}

export const banners: IBannerItem[] = [
  {
    h1: "Diminua o valor da sua parcela e ganhe até R$ 4 mil de volta!",
    buttonText: "Simular agora",
    image: "/banner-home.jpeg",
    product: "PORTABILIDADE INSS",
  },
];
