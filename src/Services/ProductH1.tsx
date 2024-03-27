import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

export interface IProductH1Props {
  caption: string;
  title: string;
  subtitle: string;
  buttonLink: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ProductH1 = ({
  title,
  subtitle,
  caption,
  buttonLink,
  target,
}: IProductH1Props) => {
  return (
    <Stack gap={4} alignItems="flex-start">
      <Stack>
        <Typography variant="caption" textTransform="uppercase">
          {caption}
        </Typography>

        <Typography variant="h1" color="primary">
          {title}
        </Typography>
      </Stack>

      <Typography whiteSpace="pre-wrap">{subtitle}</Typography>

      <Button
        LinkComponent={Link}
        href={buttonLink}
        target={target}
        variant="contained"
        size="large"
      >
        SIMULE AGORA
      </Button>
    </Stack>
  );
};
