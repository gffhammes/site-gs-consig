"use client";

import { Box, Container, Stack, useScrollTrigger } from "@mui/material";
import { CustomImage } from "../CustomImage";
import Logo from "../../../public/logo-gs-consig.png";
import { MobileSidebar } from "./MobileSidebar";
import Link from "next/link";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import { NavigationMenu } from "./NavigationMenu";

export interface IHeaderProps {}

export const Header = () => {
  const { md } = useBreakpoint();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: trigger ? "white" : "rgba(255, 255, 255, 0.5)",
        borderBottom: trigger ? "1px solid #cdcdcd" : "none",
        transition: ".3s ease all",
        zIndex: 9999,
        py: trigger ? 1 : 2,
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">
            <CustomImage
              src={Logo.src}
              alt="Logo GS Consig"
              width={trigger ? "2rem" : "3.5rem"}
              height={trigger ? "2rem" : "3.5rem"}
              objectPosition="left"
              sx={{
                transition: ".3s ease all",
              }}
            />
          </Link>

          {md ? <NavigationMenu direction="row" /> : <MobileSidebar />}
        </Stack>
      </Container>
    </Box>
  );
};
