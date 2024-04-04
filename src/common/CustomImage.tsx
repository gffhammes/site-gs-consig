import { Box, SxProps } from "@mui/material";
import Image from "next/image";

export interface ICustomImageProps {
  height?: number | string;
  width?: number | string;
  src: string;
  alt: string;
  sx?: SxProps;
  objectFit?: "contain" | "cover";
  objectPosition?: string | "left";
  aspectRatio?: string;
}

export const CustomImage = ({
  height,
  width,
  alt,
  src,
  sx,
  objectFit = "contain",
  objectPosition,
  aspectRatio,
}: ICustomImageProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio,
        height,
        width,
        overflow: "hidden",
        ...sx,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit, objectPosition }}
        unoptimized={true}
      />
    </Box>
  );
};
