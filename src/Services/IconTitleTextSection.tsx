import { SvgIconComponent } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconProps,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, JSXElementConstructor } from "react";
import { IServiceIconTextItem } from "../PagesComponents/ProductsPage/services";

export interface IIconTitleTextSectionProps {
  items: IServiceIconTextItem[];
  buttonLink: string;
  target?: HTMLAttributeAnchorTarget;
}

export const IconTitleTextSection = ({
  items,
  buttonLink,
  target,
}: IIconTitleTextSectionProps) => {
  return (
    <Container maxWidth="xs">
      <Stack gap={8} alignItems="center">
        <Stack gap={6}>
          {items.map((item, index) => (
            <Box
              key={index}
              display="grid"
              gridTemplateAreas={`
                "icon title"
                "none text"
            `}
              gridTemplateColumns="min-content auto"
              gridTemplateRows="auto auto"
              alignItems="center"
              gap={1}
            >
              <item.icon
                color="primary"
                fontSize="large"
                sx={{ gridArea: "icon" }}
              />

              <Typography
                color="primary"
                fontWeight="bold"
                fontSize={20}
                sx={{ gridArea: "title" }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ gridArea: "text" }}>{item.text}</Typography>
            </Box>
          ))}
        </Stack>

        <Button
          LinkComponent={Link}
          href={buttonLink}
          target={target}
          variant="contained"
          sx={{ width: "fit-content" }}
        >
          SIMULE AGORA
        </Button>
      </Stack>
    </Container>
  );
};
