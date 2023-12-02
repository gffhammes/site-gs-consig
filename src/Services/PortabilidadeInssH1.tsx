import { Button, Stack, Typography } from "@mui/material";

export interface IPortabilidadeInssH1Props {}

export const PortabilidadeInssH1 = (props: IPortabilidadeInssH1Props) => {
  return (
    <Stack gap={4}>
      <Stack>
        <Typography variant="caption">PORTABILIDADE INSS</Typography>

        <Typography variant="h1" color="primary">
          Transforme seu consignado em economia!
        </Typography>
      </Stack>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius
        nulla eleifend.
      </Typography>

      <Button variant="contained" size="large" sx={{ width: "fit-content" }}>
        SIMULE AGORA
      </Button>
    </Stack>
  );
};
