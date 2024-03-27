"use client";

import { services } from "@/src/pages/ProductsPage/services";
import { Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";

export interface IHomePageServicesTextAndButtonsProps {}

export const HomePageServicesTextAndButtons = () => {
  return (
    <Stack gap={4}>
      <Stack gap={2}>
        <Typography variant="h2" color="primary" maxWidth="20ch">
          Contrate agora mesmo no conforto de sua casa
        </Typography>

        <Typography>
          Chega de filas e burocracia. <br />
          <br />
          Na GS Consig você garante as melhores taxas e o melhor: contrata na
          hora, pelo celular
        </Typography>
      </Stack>

      <Stack flexWrap="wrap" direction="row" gap={1}>
        {services.map((service) => (
          <Chip
            key={service.name}
            label={service.name.toUpperCase()}
            variant="outlined"
            color="primary"
            size="small"
            component={Link}
            href={`/produtos/${service.slug}`}
            onClick={() => {}}
          />
        ))}
      </Stack>
    </Stack>
  );
};
