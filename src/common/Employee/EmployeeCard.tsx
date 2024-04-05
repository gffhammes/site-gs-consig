"use client";

import {
  Avatar,
  Button,
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
import Link from "next/link";

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
    `Olá! Vim pelo site e gostaria de mais informações sobre os serviços da GS CONSIG!`
  );

  return (
    <Stack sx={paperSx} alignItems="center" height="100%">
      <Avatar
        src={avatar}
        alt={name}
        variant="rounded"
        sx={{
          height: "8rem",
          width: "8rem",
          borderRadius: "2rem",
          mb: -8,
        }}
      />

      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 8,
          overflow: "visible",
          width: "100%",
          height: "15rem",
          pt: 11,
        }}
      >
        <Stack
          gap={3}
          height="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack gap={1}>
            <Typography fontSize={24} textAlign="center">
              {name}
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
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

          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            LinkComponent={Link}
            href={whatsappLink}
          >
            FALE COMIGO
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};
