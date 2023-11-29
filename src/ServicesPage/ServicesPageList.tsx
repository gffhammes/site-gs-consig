import {
  Box,
  Container,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { CustomImage } from "../common/CustomImage";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import { services } from "./services";

export interface IServicesPageListProps {}

export const ServicesPageList = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
        gap={6}
        width="100%"
        justifyItems="center"
      >
        {services.map((service, index) => (
          <ListItemButton
            disableGutters
            component={Link}
            href={`/produtos/${service.slug}`}
            key={index}
            sx={{
              px: 1,
              mx: -1,
              py: 1,
              my: -1,
              borderRadius: 3,
              width: "100%",
              maxWidth: "26rem",
            }}
          >
            <Box
              display="grid"
              gridTemplateAreas={`
        'image  content'
        'none   button'
        `}
              gridTemplateColumns="min-content auto"
              gridTemplateRows="auto auto"
              alignItems="center"
              columnGap={2}
              width="100%"
            >
              <CustomImage
                src={service.thumbUrl}
                alt={service.name}
                height="5rem"
                width="5rem"
                sx={{ gridArea: "image", borderRadius: 2 }}
              />

              <Stack gap={1} gridArea="content">
                <Typography variant="h3">
                  {service.name.toUpperCase()}
                </Typography>

                <Typography
                  sx={{
                    width: "100%",
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    overflow: "hidden",
                  }}
                >
                  {service.description}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ gridArea: "button" }}
              >
                <Typography color="primary" fontWeight="bold" fontSize={12}>
                  SAIBA MAIS
                </Typography>

                <EastIcon color="primary" fontSize="small" />
              </Stack>
            </Box>
          </ListItemButton>
        ))}
      </Box>
    </Container>
  );
};
