import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
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
    <Container>
      <Stack gap={8} alignItems="center">
        <Stack gap={6} direction={{ xs: "column", md: "row" }}>
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
        >
          SIMULE AGORA
        </Button>
      </Stack>
    </Container>
  );
};
