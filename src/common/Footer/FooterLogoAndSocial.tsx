import { IconProps, Stack } from "@mui/material";
import { CustomImage } from "../CustomImage";
import { JSXElementConstructor } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../../../public/logo-gs-consig.png";
import { generateMainWhatsappLink } from "@/src/utils/helpers";

export interface IFooterLogoAndSocialProps {}

export const FooterLogoAndSocial = () => {
  return (
    <Stack
      width="fit-content"
      alignItems="center"
      gap={4}
      sx={{ gridArea: "logo", width: "100%" }}
    >
      <CustomImage
        src={Logo.src}
        alt="Logo GS Consig"
        width="7rem"
        height="7rem"
      />

      <Stack direction="row" gap={1}>
        {socials.map((social, index) => (
          <Stack
            key={index}
            component="a"
            href={social.targetUrl}
            target="_blank"
            alignItems="center"
            justifyContent="center"
            aria-label={social.label}
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
  {
    label: "Instagram",
    targetUrl: "https://www.instagram.com/gsconsig/",
    Icon: InstagramIcon,
  },
  {
    label: "Facebook",
    targetUrl:
      "https://m.facebook.com/p/GS-Consig-Cr%C3%A9dito-Digital-100075539548027/",
    Icon: FacebookIcon,
  },
  {
    label: "WhatsApp",
    targetUrl: generateMainWhatsappLink(),
    Icon: WhatsAppIcon,
  },
  {
    label: "LinkedIn",
    targetUrl: "https://www.linkedin.com/in/gs-consig-b0aab8231/",
    Icon: LinkedInIcon,
  },
];
