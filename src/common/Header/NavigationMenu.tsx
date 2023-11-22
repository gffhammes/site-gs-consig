import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export interface INavigationMenuProps {
  onClick?: () => void;
  direction?: "row" | "column";
}

export const NavigationMenu = ({
  direction,
  onClick,
}: INavigationMenuProps) => {
  return (
    <Stack gap={4} direction={direction} component="nav">
      {pages.map((page, index) => (
        <Link key={index} href={page.route} onClick={onClick}>
          <Typography>{page.title}</Typography>
        </Link>
      ))}
    </Stack>
  );
};

export interface IPage {
  route: string;
  title: string;
}

export const pages: IPage[] = [
  {
    route: "/produtos",
    title: "Produtos",
  },
  {
    route: "/especialistas",
    title: "Especialistas",
  },
  {
    route: "/blog",
    title: "Blog",
  },
  {
    route: "/contato",
    title: "Contato",
  },
];
