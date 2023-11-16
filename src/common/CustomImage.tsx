import { Box, SxProps } from "@mui/material";
import Image from "next/image";

export interface ICustomImageProps {
  height?: number | string;
  width?: number | string;
  src: string;
  alt: string;
  sx?: SxProps;
}

export const CustomImage = ({
  height,
  width,
  alt,
  src,
  sx,
}: ICustomImageProps) => {
  return (
    <Box
      sx={{ position: "relative", height, width, overflow: "hidden", ...sx }}
    >
      <Image src={src} alt={alt} fill />
    </Box>
  );
};
