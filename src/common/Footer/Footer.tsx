import { Box, Container } from "@mui/material";
import { FooterLogoAndSocial } from "./FooterLogoAndSocial";
import { FooterContact } from "./FooterContact";
import { FooterSiteMap } from "./FooterSiteMap";

export interface IFooterProps {}

export const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#F4F4F4", py: 10 }}>
      <Container>
        <Box display="grid" gridTemplateColumns="1fr">
          <FooterLogoAndSocial />

          <FooterContact />

          <FooterSiteMap />
        </Box>
      </Container>
    </Box>
  );
};
