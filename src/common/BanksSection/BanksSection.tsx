"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { CustomImage } from "../CustomImage";
import { CustomCarousel } from "../CustomCarousel/CustomCarousel";

export interface IBanksSectionProps {}

export const BanksSection = (props: IBanksSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack alignItems="center" gap={4}>
          <Typography
            variant="h2"
            color="primary"
            maxWidth="13ch"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet
          </Typography>

          <CustomCarousel
            dataSet={banks}
            slideGap={2}
            getSlide={(bank) => (
              <CustomImage
                src={bank.logo}
                alt={bank.name}
                height="6rem"
                width="6rem"
              />
            )}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export interface IBank {
  logo: string;
  name: string;
}

const banks: IBank[] = [
  { logo: "https://picsum.photos/1001", name: "" },
  { logo: "https://picsum.photos/1001", name: "" },
  { logo: "https://picsum.photos/1001", name: "" },
  { logo: "https://picsum.photos/1001", name: "" },
];
