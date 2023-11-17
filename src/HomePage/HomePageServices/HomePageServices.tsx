import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CustomImage } from "../../common/CustomImage";
import { HomePageServicesImages } from "./HomePageServicesImages";
import { HomePageServicesTextAndButtons } from "./HomePageServicesTextAndButtons";

export interface IHomePageServicesProps {}

export const HomePageServices = (props: IHomePageServicesProps) => {
  return (
    <Box>
      <Container maxWidth="md">
        <Stack
          gap={8}
          sx={{
            flexDirection: { xs: "column", sm: "row-reverse" },
            alignItems: "center",
          }}
        >
          <HomePageServicesTextAndButtons />

          <HomePageServicesImages />
        </Stack>
      </Container>
    </Box>
  );
};
