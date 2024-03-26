"use client";

import { Box, Container, Stack, useScrollTrigger } from "@mui/material";
import { CustomImage } from "../CustomImage";
import Logo from "../../../public/logo-gsconsig-horizontal.png";
import Link from "next/link";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import { NavigationMenu } from "./NavigationMenu";
import { CircularButton } from "../CircularButton/CircularButton";
import { generateMainWhatsappLink } from "@/src/utils/helpers";

export interface IHeaderProps {}

export const Header = () => {
  const { md } = useBreakpoint();
  const whatsappLink = generateMainWhatsappLink();

  return (
    <Box
      sx={{ width: "100%", position: "fixed", top: 0, zIndex: 9999 }}
      component="header"
    >
      <Container sx={{ pt: 2 }}>
        <Box
          sx={{
            backgroundColor: "rgb(80 80 80 / 50%)",
            borderRadius: 999,
            backdropFilter: "blur(10px)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ py: 1, px: 2 }}
          >
            <Link href="/">
              <CustomImage
                src={Logo.src}
                alt="Logo GS Consig"
                width={md ? "14rem" : "10rem"}
                height={md ? "3rem" : "2rem"}
                objectPosition="left"
                sx={{
                  transition: ".3s ease all",
                }}
              />
            </Link>

            <Stack direction="row" alignItems="center" gap={2}>
              <NavigationMenu direction="row" color="white" />

              <CircularButton
                variant="contained"
                LinkComponent="a"
                href={whatsappLink}
              >
                Entre em contato
              </CircularButton>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
