import { Typography } from "@mui/material";
import { FooterCustomMenu } from "./FooterCustomMenu";
import Link from "next/link";
import { pages } from "../Header/NavigationMenu";

export interface IFooterSiteMapProps {}

export const FooterSiteMap = () => {
  return (
    <FooterCustomMenu
      title="Mapa do site"
      sx={{ gridArea: "siteMap" }}
      itemsData={pages}
      getItem={(page) => {
        return (
          <Link href={page.route} style={{ width: "fit-content" }}>
            <Typography>{page.title}</Typography>
          </Link>
        );
      }}
    />
  );
};
