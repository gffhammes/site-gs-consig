import { Box, Container } from "@mui/material";
import { FooterLogoAndSocial } from "./FooterLogoAndSocial";
import { FooterContact } from "./FooterContact";
import { FooterSiteMap } from "./FooterSiteMap";

export interface IFooterProps {}

export const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#F4F4F4", py: 10 }}>
      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
            md: "auto auto auto",
          }}
          justifyContent="flex-start"
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
        >
          <FooterLogoAndSocial />

          <FooterContact />

          <FooterSiteMap />
        </Box>
      </Container>
    </Box>
  );
};
