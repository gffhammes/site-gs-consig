import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { IHomeBanner } from "../types/strapi";

export interface IBannerProps {
  banners: IHomeBanner[];
}

export const Banner = ({ banners }: IBannerProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${banners[0].foto.data.attributes.formats.large.url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Stack height="100%" width="100%" justifyContent="center" gap={4}>
          <Paper
            elevation={10}
            sx={{ width: "fit-content", p: 4, borderRadius: 4 }}
          >
            <Stack gap={4}>
              <Typography color="primary" variant="h1" maxWidth="16ch">
                {banners[0].texto}
              </Typography>

              <Button
                size="large"
                variant="contained"
                sx={{
                  width: "fit-content",
                }}
              >
                {banners[0].botao.texto}
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};
