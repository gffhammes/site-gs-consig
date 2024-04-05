import { Box, Container, Divider, Stack } from "@mui/material";
import { FooterLogoAndSocial } from "./FooterLogoAndSocial";
import { FooterContact } from "./FooterContact";
import { FooterSiteMap } from "./FooterSiteMap";
import { FooterText } from "./FooterText";

export interface IFooterProps {}

export const Footer = () => {
  return (
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
  );
};
