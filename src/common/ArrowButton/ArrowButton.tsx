import { Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";

export interface IArrowButtonProps {
  href?: string;
}

export const ArrowButton = ({ href }: IArrowButtonProps) => {
  return (
    <Stack
      direction="row"
      color="primary.main"
      gap={1}
      component={href ? Link : "div"}
      href={href}
    >
      <Typography variant="button" color="inherit">
        SAIBA MAIS
      </Typography>

      <EastIcon color="inherit" />
    </Stack>
  );
};
