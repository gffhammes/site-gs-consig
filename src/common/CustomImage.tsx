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
}

export const CustomImage = ({
  height,
  width,
  alt,
  src,
  sx,
  objectFit = "contain",
  objectPosition,
}: ICustomImageProps) => {
  return (
    <Box
      sx={{ position: "relative", height, width, overflow: "hidden", ...sx }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit, objectPosition }} />
    </Box>
  );
};
