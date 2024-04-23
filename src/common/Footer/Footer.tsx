import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { FooterLogoAndSocial } from "./FooterLogoAndSocial";
import { FooterContact } from "./FooterContact";
import { FooterSiteMap } from "./FooterSiteMap";
import { FooterText } from "./FooterText";
import { CustomImage } from "../CustomImage";

export interface IFooterProps {}

export const Footer = () => {
  return (
    <>
      <Box component="footer" sx={{ backgroundColor: "#1e1e1e", py: 10 }}>
        <Container>
          <Stack gap={6}>
            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr auto auto",
              }}
              justifyContent={{ xs: "center", sm: "flex-start" }}
              gridTemplateAreas={{
                xs: `
              "logo"
              "contact"
              "siteMap"
            `,
                sm: `
              "logo     logo"
              "contact  siteMap"
            `,
                md: `
              "logo siteMap contact"
            `,
              }}
              gap={{ xs: 8, md: 20 }}
              width={{ xs: "fit-content", md: "100%" }}
              marginX={{ xs: "auto", md: "unset" }}
            >
              <FooterLogoAndSocial />

              <FooterSiteMap />

              <FooterContact />
            </Box>

            <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />

            <FooterText />
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 2, backgroundColor: "primary.main", color: "white" }}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="inherit">
              © {new Date().getFullYear()}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              component="a"
              href="https://www.guilhermehammes.com.br/"
              target="_blank"
            >
              <Typography color="inherit">Desenvolvido por</Typography>

              <CustomImage
                src="/Logo-gh.png"
                alt="Guilherme Hammes"
                height="2rem"
                width="4rem"
                sx={{ zIndex: 0 }}
              />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
