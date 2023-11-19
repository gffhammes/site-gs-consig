import { IconProps, Stack } from "@mui/material";
import { CustomImage } from "../CustomImage";
import { JSXElementConstructor } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface IFooterLogoAndSocialProps {}

export const FooterLogoAndSocial = () => {
  return (
    <Stack width="fit-content" alignItems="center" sx={{ gridArea: "logo" }}>
      <CustomImage src="" alt="GS Consig" height="10rem" width="10rem" />

      <Stack direction="row" gap={1}>
        {socials.map((social, index) => (
          <Stack
            key={index}
            component="a"
            href={social.targetUrl}
            target="_blank"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: "#e5e5e5",
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
          >
            <social.Icon />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export interface ISocial {
  Icon: JSXElementConstructor<IconProps<SvgIconComponent>>;
  targetUrl: string;
  label: string;
}

const socials: ISocial[] = [
  { label: "Instagram", targetUrl: "", Icon: InstagramIcon },
  { label: "Facebook", targetUrl: "", Icon: FacebookIcon },
  { label: "WhatsApp", targetUrl: "", Icon: WhatsAppIcon },
  { label: "LinkedIn", targetUrl: "", Icon: LinkedInIcon },
];
