import { Box, Rating, Stack, Typography } from "@mui/material";
import { CustomImage } from "../CustomImage";

export const GOOGLE_RATING = 5;
export const GOOGLE_REVIEWS_QUANTITY = 1145;
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=gs+consig&oq=gs+consig&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAuGK8BGMcBGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgYIBRBFGEEyBggGEEUYPDIGCAcQRRg80gEIMjEzMmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x94d8cb129b349e6d:0xaa85615d9f9be56b,1,,,,";

export interface IGoogleReviewsRatingProps {}

export const GoogleReviewsRating = () => {
  return (
    <Box
      display="grid"
      gridTemplateAreas={`
        "logo title"
        "logo rating"
        "none see-more"
    `}
      gridTemplateColumns="min-content auto"
      gridTemplateRows="min-content min-content min-content"
      columnGap={1}
      rowGap={0.25}
    >
      <CustomImage
        src="/logo-google.png"
        alt="google"
        height="100%"
        width="2rem"
        sx={{ gridArea: "logo", alignSelf: "center" }}
      />

      <Box sx={{ gridArea: "title" }}>
        <Typography fontWeight="bold">Avaliações Google</Typography>
      </Box>

      <Stack
        direction="row"
        alignItems="flex-end"
        gap={0.5}
        sx={{ gridArea: "rating" }}
      >
        <Typography
          color="#faaf00"
          fontWeight="bold"
          fontSize={28}
          lineHeight={1}
        >
          {GOOGLE_RATING.toFixed(1)}
        </Typography>

        <Rating value={GOOGLE_RATING} readOnly size="large" />
      </Stack>

      <Typography
        sx={{
          gridArea: "see-more",
          textDecoration: "underline",
          width: "fit-content",
        }}
        variant="caption"
        component="a"
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
      >
        Veja as {GOOGLE_REVIEWS_QUANTITY.toLocaleString("pt-BR")} avaliações
      </Typography>
    </Box>
  );
};
