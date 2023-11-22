import { JSXElementConstructor } from "react";
import { FooterCustomMenu } from "./FooterCustomMenu";
import { IconProps, Stack, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
          >
            <contact.Icon />

            <Typography>{contact.text}</Typography>
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
    text: "(47) 9 9999-9999",
    href: "(47) 9 9999-9999",
  },
  {
    Icon: WhatsAppIcon,
    text: "(47) 9 9999-9999",
    href: "(47) 9 9999-9999",
  },
];
