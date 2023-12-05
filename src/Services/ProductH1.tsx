import { Button, Stack, Typography } from "@mui/material";

export interface IProductH1Props {
  caption: string;
  title: string;
  subtitle: string;
}

export const ProductH1 = ({ title, subtitle, caption }: IProductH1Props) => {
  return (
    <Stack gap={4}>
      <Stack>
        <Typography variant="caption">{caption}</Typography>

        <Typography variant="h1" color="primary">
          {title}
        </Typography>
      </Stack>

      <Typography whiteSpace="pre-wrap">{subtitle}</Typography>

      <Button variant="contained" size="large" sx={{ width: "fit-content" }}>
        SIMULE AGORA
      </Button>
    </Stack>
  );
};
