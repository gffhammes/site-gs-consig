"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { IHomeBanner } from "../types/strapi";
import Color from "color";

export interface IHomePageBannerProps {
  banners: IHomeBanner[];
}

export const HomePageBanner = ({ banners }: IHomePageBannerProps) => {
  const { palette } = useTheme();

  const transparentPrimary = Color(palette.primary.main).alpha(0.5).string();

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${banners[0].foto.data.attributes.formats.large.url})`,
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
            <Typography color="white" variant="h1" maxWidth="16ch">
              {banners[0].texto}
            </Typography>

            <Button
              size="large"
              variant="contained"
              sx={{
                width: "fit-content",
              }}
            >
              {banners[0].botao.texto}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
