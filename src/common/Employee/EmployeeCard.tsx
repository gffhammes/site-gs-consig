"use client";

import { Avatar, Chip, Paper, Stack, SxProps, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IEmployee } from "@/src/types/employees";
import { generateWhatsappLink } from "@/src/utils/helpers";

export interface IEmployeeCardProps extends IEmployee {
  paperSx?: SxProps;
}

export const EmployeeCard = ({
  avatar,
  name,
  products,
  whatsapp,
  paperSx,
}: IEmployeeCardProps) => {
  const whatsappLink = generateWhatsappLink(
    whatsapp,
    `Olá, ${name}! Vim pelo site e gostaria de mais informações sobre os serviços da GS CONSIG!`
  );

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 8,
        ...paperSx,
      }}
    >
      <Stack gap={4} height="100%" justifyContent="space-between">
        <Stack gap={2}>
          <Avatar
            src={avatar}
            alt={name}
            variant="rounded"
            sx={{ height: "5rem", width: "5rem", borderRadius: "1rem" }}
          />

          <Typography fontSize={24}>{name}</Typography>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {products.map((product) => (
              <Chip
                key={product}
                label={product.toUpperCase()}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: 12,
                  height: 20,
                }}
              />
            ))}
          </Stack>
        </Stack>

        <Chip
          label="FALE COMIGO"
          component="a"
          href={whatsappLink}
          target="_blank"
          icon={<WhatsAppIcon fontSize="small" />}
          color="primary"
          sx={{ width: "fit-content" }}
          onClick={() => {}}
        />
      </Stack>
    </Paper>
  );
};
