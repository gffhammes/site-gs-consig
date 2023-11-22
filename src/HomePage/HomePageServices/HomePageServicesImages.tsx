import { CustomImage } from "@/src/common/CustomImage";
import { Box } from "@mui/material";

export interface IHomePageServicesImagesProps {}

export const HomePageServicesImages = (props: IHomePageServicesImagesProps) => {
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
        src="https://picsum.photos/1001"
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
        src="https://picsum.photos/1000"
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
