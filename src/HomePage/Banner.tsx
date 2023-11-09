"use client";

import { Box, Typography } from "@mui/material";
import { IHomeBanner } from "../types/strapi";

export interface IBannerProps {
  banners: IHomeBanner[];
}

export const Banner = ({ banners }: IBannerProps) => {
  console.log(banners);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        // backgroundColor: "red",
        backgroundImage: `url(${banners[0].foto.data.attributes.formats.large.url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Typography>{banners[0].texto}</Typography>
    </Box>
  );
};
