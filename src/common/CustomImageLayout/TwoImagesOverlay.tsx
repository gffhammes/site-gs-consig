import { Box } from "@mui/material";
import { CustomImage } from "../CustomImage";

export interface ITwoImagesOverlayProps {
  image1Src: string;
  image2Src: string;
}

export const TwoImagesOverlay = ({
  image1Src,
  image2Src,
}: ITwoImagesOverlayProps) => {
  return (
    <Box
      display="grid"
      gridTemplateAreas={`
      "a b c"
      "d e f"
      "g h i"
      `}
      width="100%"
      gridTemplateRows="2fr 3fr 4fr"
      gridTemplateColumns="5fr 1fr 5fr"
      sx={{
        aspectRatio: "1.3 / 1",
      }}
    >
      <CustomImage
        src={image1Src}
        alt="image"
        width="100%"
        height="100%"
        objectFit="cover"
        sx={{
          gridColumnStart: "a",
          gridColumnEnd: "b",
          gridRowStart: "a",
          gridRowEnd: "d",
          borderRadius: 2,
          display: "flex",
        }}
      />

      <CustomImage
        src={image2Src}
        alt="image"
        width="100%"
        height="100%"
        objectFit="cover"
        sx={{
          gridColumnStart: "e",
          gridColumnEnd: "f",
          gridRowStart: "e",
          gridRowEnd: "h",
          borderRadius: 2,
          display: "flex",
        }}
      />
    </Box>
  );
};
