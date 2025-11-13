import { JSXElementConstructor } from "react";
import { FooterCustomMenu } from "./FooterCustomMenu";
import { IconProps, Stack, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  MAIN_WHATSAPP,
  formatPhoneNumberString,
  generateMainWhatsappLink,
} from "@/src/utils/helpers";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export interface IFooterContactProps {}

export const FooterContact = () => {
  return (
    <FooterCustomMenu
      title="Contato"
      sx={{ gridArea: "contact" }}
      itemsData={contactItems}
      getItem={(contact) => {
        return (
          <Stack
            direction="row"
            alignItems="center"
            component="a"
            href={contact.href}
            target="_blank"
            width="fit-content"
            gap={1}
            color="white"
          >
            <contact.Icon />

            <Typography color="inherit">{contact.text}</Typography>
          </Stack>
        );
      }}
    />
  );
};

export interface IContactItem {
  text: string;
  href: string;
  Icon: JSXElementConstructor<IconProps<SvgIconComponent>>;
}

const contactItems: IContactItem[] = [
  {
    Icon: WhatsAppIcon,
    text: formatPhoneNumberString(MAIN_WHATSAPP),
    href: generateMainWhatsappLink(),
  },
  {
    Icon: LocalPhoneIcon,
    text: "11 93008 0401",
    href: "tel: 11 93008 0401",
  },
];
