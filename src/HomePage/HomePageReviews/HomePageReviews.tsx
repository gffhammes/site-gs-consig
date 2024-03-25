"use client";

import { GOOGLE_REVIEWS_URL } from "@/src/common/GoogleReviews/GoogleReviewsRating";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import { generateMainWhatsappLink } from "@/src/utils/helpers";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ReviewCard } from "./ReviewCard";

export interface IHomePageReviewsProps {}

export const HomePageReviews = () => {
  const { md } = useBreakpoint();

  const reviewsToShow = reviews.slice(0, md ? 4 : 3);

  return (
    <Box sx={{ py: 16 }}>
      <Stack>
        <Container>
          <Stack>
            <Typography variant="overline" color="primary">
              Clientes felizes, avaliações reais:
            </Typography>

            <Typography variant="h2">
              Descubra o que <strong>estão dizendo sobre nós</strong> no Google!
            </Typography>
          </Stack>
        </Container>

        <Stack direction="row">
          {reviewsToShow.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </Stack>
      </Stack>

      {/* <Container maxWidth={md ? "md" : "xs"}>
        <Box
          rowGap={4}
          columnGap={8}
          display="grid"
          gridTemplateAreas={{
            xs: `
            "title"
            "reviews"
            "buttons"
            `,
            md: `
            "nothing    reviews"
            "title    reviews"
            "buttons  reviews"
            "none     reviews"
          `,
          }}
          gridTemplateRows={{
            xs: "auto auto auto",
            md: "auto min-content auto auto",
          }}
          gridTemplateColumns={{ xs: "1fr", md: "23rem auto" }}
        >
          <Typography variant="h2" color="primary" sx={{ gridArea: "title" }}>
            Clientes Felizes, Avaliações Reais: Descubra o que estão dizendo
            sobre nós no Google!
          </Typography>

          <Stack gap={4} gridArea="reviews">
            {reviewsToShow.map((review) => {
              return <ReviewCard key={review.name} review={review} />;
            })}
          </Stack>

          <Stack direction="row" gap={1} gridArea="buttons">
            <Button
              variant="contained"
              LinkComponent="a"
              href={generateMainWhatsappLink()}
              target="_blank"
            >
              CONTRATE AGORA
            </Button>

            <Button
              onClick={() => window.open(GOOGLE_REVIEWS_URL, "_blank")}
              variant="outlined"
            >
              ver mais
            </Button>
          </Stack>
        </Box>
      </Container> */}
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
