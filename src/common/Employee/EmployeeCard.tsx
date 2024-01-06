"use client";

import {
  Avatar,
  Chip,
  Divider,
  Paper,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
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
      <Stack gap={3} height="100%" justifyContent="space-between">
        <Avatar
          src={avatar}
          alt={name}
          variant="rounded"
          sx={{ height: "5rem", width: "5rem", borderRadius: "1rem" }}
        />

        <Stack gap={1}>
          <Typography fontSize={24}>{name}</Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            alignItems="center"
            divider={
              <Divider
                orientation="vertical"
                sx={{ height: ".7rem", borderColor: "#c0c0c0" }}
              />
            }
            gap={1}
          >
            {products.map((product) => (
              <Stack key={product}>
                <Typography fontSize={10} lineHeight={1}>
                  {product}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Chip
          label="FALE COMIGO"
          component="a"
          href={whatsappLink}
          target="_blank"
          icon={
            <Stack sx={{ fontSize: 18, pl: 0.5 }}>
              <WhatsAppIcon fontSize="inherit" />
            </Stack>
          }
          color="primary"
          sx={{ width: "fit-content", fontWeight: "bold" }}
          onClick={() => {}}
        />
      </Stack>
    </Paper>
  );
};
