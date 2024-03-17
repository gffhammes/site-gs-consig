import { Box, Container, Stack, Typography } from "@mui/material";
import { CustomImage } from "../CustomImage";
import { generateMainWhatsappLink } from "@/src/utils/helpers";

export interface ICTABannerProps {}

const whatsappLink = generateMainWhatsappLink();

export const CTABanner = (props: ICTABannerProps) => {
  return (
    <Box sx={{ background: "linear-gradient(#f4f4f4 50%,#fff 50%)" }}>
      <Container maxWidth="md">
        <a href={whatsappLink}>
          <Box sx={{ backgroundColor: "#202020", borderRadius: 4 }}>
            <Stack
              direction="row"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack sx={{ p: 2, pl: 4 }} gap={1}>
                <Typography color="primary" fontSize={32} lineHeight={1}>
                  Contrate agora mesmo no conforto de sua casa
                </Typography>

                <Typography color="white">
                  Chega de filas e burocracia. Na GS Consig você garante as
                  melhores taxas e o melhor: contrata na hora, pelo celular.
                </Typography>
              </Stack>

              <Stack height="12rem" justifyContent="flex-end">
                <Box>
                  <CustomImage
                    src="/imagem-4.png"
                    alt=""
                    height="17rem"
                    width="24rem"
                  />
                </Box>
              </Stack>
            </Stack>
          </Box>
        </a>
      </Container>
    </Box>
  );
};
