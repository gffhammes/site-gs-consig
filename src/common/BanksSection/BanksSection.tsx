"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { CustomImage } from "../CustomImage";
import { CustomCarousel } from "../CustomCarousel/CustomCarousel";

export interface IBanksSectionProps {}

export const BanksSection = () => {
  return (
    <Box>
      <Stack alignItems="center" gap={4}>
        <Typography
          variant="h2"
          color="primary"
          maxWidth="13ch"
          textAlign="center"
        >
          Bancos parceiros
        </Typography>

        <Container>
          <Box width="100%">
            <CustomCarousel
              dataSet={banks}
              slideGap={2}
              showDots
              options={{
                skipSnaps: true,
                align: "start",
              }}
              getSlide={(bank) => (
                <CustomImage
                  src={bank.logo}
                  alt={bank.name}
                  height="3rem"
                  width="5rem"
                  sx={{
                    flex: "0 0 100%",
                    flexBasis: "calc(20% - 1rem)",
                    filter: "saturate(0)",
                  }}
                />
              )}
            />
          </Box>
        </Container>
      </Stack>
    </Box>
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
  { logo: `${banksBasePath}/logo-agibank.svg`, name: "Agibank" },
  { logo: `${banksBasePath}/ole.png`, name: "Banco Olé" },
  { logo: `${banksBasePath}/pagbank.png`, name: "Pagbank" },
];
