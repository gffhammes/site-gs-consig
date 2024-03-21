"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { CustomImage } from "../CustomImage";
import { CustomCarousel } from "../CustomCarousel/CustomCarousel";

export interface IBanksSectionProps {}

export const BanksSection = () => {
  return (
    <Container>
      <Stack alignItems="center" direction="row" gap={8}>
        <Typography variant="h2" fontSize={64} color="primary">
          Bancos
          <br />
          parceiros
        </Typography>

        <Container>
          <Box width="100%">
            <CustomCarousel
              dataSet={banks}
              slideGap={4}
              showDots
              options={{
                skipSnaps: true,
                align: "start",
              }}
              getSlide={(bank) => (
                <CustomImage
                  src={bank.logo}
                  alt={bank.name}
                  height="4.5rem"
                  width="5rem"
                  sx={{
                    flex: "0 0 10rem",
                    filter: "saturate(0) opacity(.75)",
                    transition: ".3s ease filter",
                    "&:hover": {
                      filter: "saturate(1) opacity(1)",
                    },
                  }}
                />
              )}
            />
          </Box>
        </Container>
      </Stack>
    </Container>
  );
};

export interface IBank {
  logo: string;
  name: string;
}

const banksBasePath = "/bancos";

const banks: IBank[] = [
  { logo: `${banksBasePath}/banrisul.png`, name: "Banrisul" },
  { logo: `${banksBasePath}/bmg.svg`, name: "BMG" },
  { logo: `${banksBasePath}/crefaz.png`, name: "Crefaz" },
  { logo: `${banksBasePath}/daycoval.webp`, name: "Daycoval" },
  { logo: `${banksBasePath}/itau.png`, name: "Itaú" },
  { logo: `${banksBasePath}/Logo_C6_Bank.png`, name: "C6" },
  { logo: `${banksBasePath}/ole.png`, name: "Banco Olé" },
  { logo: `${banksBasePath}/pagbank.png`, name: "Pagbank" },
];
