"use client";

import { GOOGLE_REVIEWS_URL } from "@/src/common/GoogleReviews/GoogleReviewsRating";
import { generateMainWhatsappLink } from "@/src/utils/helpers";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ReviewCard } from "./ReviewCard";
import { CustomCarousel } from "@/src/common/CustomCarousel/CustomCarousel";

export interface IHomePageReviewsProps {}

export const HomePageReviews = () => {
  return (
    <Box>
      <Stack gap={8}>
        <Container>
          <Stack>
            <Typography
              textAlign={{ xs: "center", md: "left" }}
              variant="overline"
              color="primary"
            >
              Clientes felizes, avaliações reais:
            </Typography>

            <Typography textAlign={{ xs: "center", md: "left" }} variant="h2">
              Descubra o que <strong>estão dizendo sobre nós</strong> no Google!
            </Typography>
          </Stack>
        </Container>

        <Container>
          <CustomCarousel
            dataSet={reviews}
            getSlide={(data) => <ReviewCard review={data} />}
            slideGap={2}
          />
        </Container>

        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
            gap={1}
          >
            <Button
              variant="contained"
              LinkComponent="a"
              href={generateMainWhatsappLink()}
            >
              Contrate agora
            </Button>

            <Button
              variant="outlined"
              onClick={() => window.open(GOOGLE_REVIEWS_URL, "_blank")}
            >
              Ver mais
            </Button>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
};

export interface IReview {
  avatar: string;
  name: string;
  stars: number;
  text: string;
}

const reviews: IReview[] = [
  {
    avatar: "",
    name: "Raimunda Nonata de Souza Ribeiro",
    stars: 5,
    text: `O rapaz que me atendeu se chama Luiz Ilmar.
É uma maravilha de pessoa, muito honesto e tudo que foi combinado ele cumpriu à risca.
Excelente consultor.
Indico com confiança!
Obrigada e parabéns Luiz pela educação e a forma carinhosa como trata os seus clientes.`,
  },
  {
    avatar: "",
    name: "Basilio Meira",
    stars: 5,
    text: "Luiz Ilmar é de total confiança! Durante todo o processo do empréstimo consignado, me orientava em todo tempo, em tudo quanto devia fazer. Não tenho palavras para expressar a gratidão à ele pela cordialidade, caráter e disposição em ajudar. Cumpriu muito bem seu papel e ganhou mais um amigo que sou eu! Vou ter o prazer em repassar à minha família e amigos o nome e o WhatsApp dele. Finalizou melhor que eu mesmo esperava. Fiquei surpreso e grato à ele, ao ver o valor depositado na minha conta! Esse eu indico sem medo de errar! Parabéns meu amigo Luiz Ilmar!!!",
  },
  {
    avatar: "",
    name: "vandir junior",
    stars: 5,
    text: "Kauê pereira, muito obrigado seu atendimento foi muito bom excelente profissional de sua pessoa, tou muito agradecido muito obrigado msm, gostei muito pelo o seu esforço q deu resultado na minha proposta obrigado Kauê pereira nota 10 pra vc 👍🏻",
  },
  {
    avatar: "",
    name: "Ana Fernandes",
    stars: 5,
    text: "Fui muito bem atendida a todo momento. Primeiramente pelo Gabriel,um rapaz sensacional, e agora na continuação do atendimento pelo João, que também foi maravilhoso. Meu agradecimento",
  },
  {
    avatar: "",
    name: "Marlene Guerreira",
    stars: 5,
    text: "As vezes não temos margem mas, o consultor kaue Pereira foi tão prestativo, educado e atencioso que eu nem me importei de não ter margem neste momento, muito obrigado a GS Consig e em especial ao kaue pelo carinhoso atendimento.",
  },
];
