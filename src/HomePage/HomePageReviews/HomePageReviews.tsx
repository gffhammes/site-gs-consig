import { Box, Container, Typography } from "@mui/material";

export interface IHomePageReviewsProps {}

export const HomePageReviews = (props: IHomePageReviewsProps) => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 16 }}>
      <Container>
        <Typography variant="h2" color="primary" maxWidth="14ch">
          Lorem ipsum dolor sit amet
        </Typography>
      </Container>
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
    name: "Edinaldo Mariano",
    stars: 5,
    text: "Sempre recebendo constantes ligações de instituições financeiras, prometendo reduzir minha taxa...",
  },
  {
    avatar: "",
    name: "Edinaldo Mariano",
    stars: 5,
    text: "Sempre recebendo constantes ligações de instituições financeiras, prometendo reduzir minha taxa...",
  },
  {
    avatar: "",
    name: "Edinaldo Mariano",
    stars: 5,
    text: "Sempre recebendo constantes ligações de instituições financeiras, prometendo reduzir minha taxa...",
  },
  {
    avatar: "",
    name: "Edinaldo Mariano",
    stars: 5,
    text: "Sempre recebendo constantes ligações de instituições financeiras, prometendo reduzir minha taxa...",
  },
  {
    avatar: "",
    name: "Edinaldo Mariano",
    stars: 5,
    text: "Sempre recebendo constantes ligações de instituições financeiras, prometendo reduzir minha taxa...",
  },
];
