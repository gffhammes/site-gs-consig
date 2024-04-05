import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export interface INavigationMenuProps {
  onClick?: () => void;
  direction?: "row" | "column";
  color?: string;
}

export const NavigationMenu = ({
  direction,
  onClick,
  color,
}: INavigationMenuProps) => {
  const pagesToShow = pages.filter((page) => !page.hideOnHeader);

  return (
    <Stack gap={4} direction={direction} component="nav">
      {pagesToShow.map((page, index) => (
        <Link key={index} href={page.route} onClick={onClick}>
          <Typography color={color}>{page.title}</Typography>
        </Link>
      ))}
    </Stack>
  );
};

export interface IPage {
  route: string;
  title: string;
  hideOnHeader?: boolean;
}

export const pages: IPage[] = [
  {
    route: "/",
    title: "Home",
    hideOnHeader: true,
  },
  {
    route: "/produtos",
    title: "Produtos",
  },
  {
    route: "/especialistas",
    title: "Especialistas",
  },
  // {
  //   route: "/blog",
  //   title: "Blog",
  // },
  // {
  //   route: "/contato",
  //   title: "Contato",
  // },
];
