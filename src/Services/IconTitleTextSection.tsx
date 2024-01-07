import { SvgIconComponent } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconProps,
  Stack,
  Typography,
} from "@mui/material";
import { JSXElementConstructor } from "react";

export interface IIconTitleTextSectionProps {
  items: IIconTitleText[];
}

export const IconTitleTextSection = ({ items }: IIconTitleTextSectionProps) => {
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

        <Button variant="contained" sx={{ width: "fit-content" }}>
          SIMULE AGORA
        </Button>
      </Stack>
    </Container>
  );
};

export interface IIconTitleText {
  icon: JSXElementConstructor<IconProps<SvgIconComponent>>;
  title: string;
  text: string;
}
