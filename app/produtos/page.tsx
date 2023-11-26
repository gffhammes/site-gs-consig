import { ServicesPageList } from "@/src/ServicesPage/ServicesPageList";
import { InterestRateSection } from "@/src/common/InterestRateSection/InterestRateSection";
import { Container, Stack, Typography } from "@mui/material";

export default function Produtos() {
  return (
    <Stack gap={16} py={4}>
      <Stack gap={10}>
        <Container>
          <Typography variant="h1" color="primary">
            Conheça nossos produtos
          </Typography>
        </Container>

        <ServicesPageList />

        <InterestRateSection />
      </Stack>
    </Stack>
  );
}

export interface IService {
  name: string;
  description: string;
  thumbUrl: string;
  slug: string;
}

export const services: IService[] = [
  {
    name: "portabilidade inss",
    description: "Diminua sua taxa e ganhe dinheiro de volta",
    thumbUrl: "https://picsum.photos/1001",
    slug: "portabilidade-inss",
  },
  {
    name: "credito novo inss",
    description: "Condições especiais que só nós oferecemos",
    thumbUrl: "https://picsum.photos/1000",
    slug: "credito-novo-inss",
  },
  // {
  //   name: "consignado inss",
  // },
  // {
  //   name: "cartao consignado inss",
  // },
  // {
  //   name: "cartao beneficio inss",
  // },
];
