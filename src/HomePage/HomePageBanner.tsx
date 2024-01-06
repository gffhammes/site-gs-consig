"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { CustomImage } from "../common/CustomImage";
import { GoogleReviewsRating } from "../common/GoogleReviews/GoogleReviewsRating";
import { useBreakpoint } from "../hooks/useBreakpoint";

export const HomePageBanner = () => {
  const { sm } = useBreakpoint();

  if (sm) {
    return (
      <Box sx={{ overflow: "hidden" }}>
        <Container>
          <Stack direction="row" alignItems="center">
            <Stack alignItems="flex-start" gap={4} sx={{ flex: "0 0 50%" }}>
              <Stack alignItems="flex-start">
                <Typography variant="caption">{banners[0].product}</Typography>

                <Typography variant="h1" color="primary" maxWidth="17ch">
                  {banners[0].h1}
                </Typography>
              </Stack>

              <Button
                size="large"
                variant="contained"
                sx={{
                  width: "fit-content",
                }}
                LinkComponent={Link}
                href={banners[0].targetPage}
              >
                {banners[0].buttonText}
              </Button>
            </Stack>

            <Box
              sx={{
                width: "100%",
                overflow: "visible",
                p: 2,
                ml: 4,
                backgroundColor: "#f4f4f4",
                borderRadius: 8,
                minWidth: "100vw",
              }}
            >
              <Box
                display="grid"
                gridTemplateAreas={`
                "image1 image2"
                "image1 image3"
                "rating image3"
              `}
                gridTemplateColumns="300px 300px"
                gridTemplateRows="150px 150px auto"
                gap={1}
                sx={{ overflow: "visible" }}
              >
                <Paper
                  variant="outlined"
                  sx={{ gridArea: "rating", p: 2, borderRadius: 4 }}
                >
                  <GoogleReviewsRating />
                </Paper>

                <CustomImage
                  src={banners[0].image1}
                  alt="GS Consig"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  objectPosition="right"
                  sx={{ borderRadius: 4, gridArea: "image1" }}
                />

                <CustomImage
                  src={banners[0].image2}
                  alt="GS Consig"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  sx={{ borderRadius: 4, gridArea: "image2" }}
                />

                <CustomImage
                  src={banners[0].image3}
                  alt="GS Consig"
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  sx={{ borderRadius: 4, gridArea: "image3" }}
                />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Container>
        <Stack alignItems="center" gap={4}>
          <Stack alignItems="center">
            <Typography variant="caption" textAlign="center">
              {banners[0].product}
            </Typography>

            <Typography
              variant="h1"
              color="primary"
              maxWidth="16ch"
              textAlign="center"
            >
              {banners[0].h1}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            sx={{
              width: "fit-content",
            }}
            LinkComponent={Link}
            href={banners[0].targetPage}
          >
            {banners[0].buttonText}
          </Button>

          <CustomImage
            src={banners[0].image1}
            alt="GS Consig"
            aspectRatio="1.5 / 1"
            width="100%"
            objectFit="cover"
            sx={{ borderRadius: 2 }}
          />

          <GoogleReviewsRating />
        </Stack>
      </Container>
    </Box>
  );
};

export interface IBannerItem {
  image1: string;
  image2: string;
  image3: string;
  h1: string;
  buttonText: string;
  product: string;
  targetPage: string;
}

export const banners: IBannerItem[] = [
  {
    h1: "Diminua o valor da sua parcela e ganhe dinheiro de volta!",
    buttonText: "Simular agora",
    image1: "/banner-home1.webp",
    image2: "/banner-home.webp",
    image3: "/banner-home2.webp",
    product: "PORTABILIDADE INSS",
    targetPage: "produtos/portabilidade-inss",
  },
];
