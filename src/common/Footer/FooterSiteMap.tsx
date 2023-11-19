import { Typography } from "@mui/material";
import { FooterCustomMenu } from "./FooterCustomMenu";
import Link from "next/link";

export interface IFooterSiteMapProps {}

export const FooterSiteMap = () => {
  return (
    <FooterCustomMenu
      title="Mapa do site"
      sx={{ gridArea: "siteMap" }}
      itemsData={siteMapItems}
      getItem={(siteMapItem) => {
        return (
          <Link href={siteMapItem.target} style={{ width: "fit-content" }}>
            <Typography>{siteMapItem.label}</Typography>
          </Link>
        );
      }}
    />
  );
};

export interface ISiteMapItem {
  target: string;
  label: string;
}

const siteMapItems: ISiteMapItem[] = [
  { label: "Home", target: "/" },
  { label: "Produtos", target: "/" },
  { label: "Contato", target: "/" },
  { label: "Nossos especialistas", target: "/" },
  { label: "Blog", target: "/" },
];
