"use client";

import { Avatar, Chip, Paper, Stack, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export interface IEmployeeCardProps extends IEmployee {}

export const EmployeeCard = ({
  avatar,
  name,
  product,
  whatsapp,
}: IEmployeeCardProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 8,
        flexBasis: "16rem",
        flexShrink: 0,
      }}
    >
      <Stack gap={4}>
        <Avatar src={avatar} alt={name} />

        <Stack gap={1}>
          <Typography fontSize={12} color="#a5a5a5">
            {product.toUpperCase()}
          </Typography>

          <Typography fontSize={24}>{name}</Typography>
        </Stack>

        <Chip
          label="FALE COMIGO"
          size="small"
          icon={<WhatsAppIcon fontSize="small" />}
          color="primary"
          sx={{ width: "fit-content" }}
          onClick={() => {
            console.log("teste");
          }}
        />
      </Stack>
    </Paper>
  );
};

export interface IEmployee {
  avatar: string;
  name: string;
  product: string;
  whatsapp: string;
}
