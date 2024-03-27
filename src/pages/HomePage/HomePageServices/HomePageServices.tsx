import { Box, Container, Stack } from "@mui/material";
import { HomePageServicesImages } from "./HomePageServicesImages";
import { HomePageServicesTextAndButtons } from "./HomePageServicesTextAndButtons";

export interface IHomePageServicesProps {}

export const HomePageServices = () => {
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
