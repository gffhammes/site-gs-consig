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
        position: "sticky",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderBottom: trigger ? "1px solid #E5EAF2" : "1px solid white",
        backdropFilter: "blur(8px)",
        transition: ".5s ease all",
        zIndex: 9999,
        py: 1,
        overflowX: "hidden",
        overflowY: "visible",
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
              width="2rem"
              height="2rem"
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
