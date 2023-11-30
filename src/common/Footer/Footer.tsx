import { Box, Container, Divider, Stack } from "@mui/material";
import { FooterLogoAndSocial } from "./FooterLogoAndSocial";
import { FooterContact } from "./FooterContact";
import { FooterSiteMap } from "./FooterSiteMap";
import { FooterText } from "./FooterText";

export interface IFooterProps {}

export const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#F4F4F4", py: 10 }}>
      <Container>
        <Stack gap={4}>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              sm: "1fr 1fr",
              md: "auto auto auto",
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
              "logo contact siteMap"
            `,
            }}
            gap={{ xs: 8, md: 20 }}
            width={{ xs: "fit-content", md: "100%" }}
            marginX={{ xs: "auto", md: "unset" }}
          >
            <FooterLogoAndSocial />

            <FooterContact />

            <FooterSiteMap />
          </Box>

          <Divider />

          <FooterText />
        </Stack>
      </Container>
    </Box>
  );
};
