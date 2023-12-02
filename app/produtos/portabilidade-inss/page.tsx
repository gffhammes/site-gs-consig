import { CustomImage } from "@/src/common/CustomImage";
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
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { FaqAccordion } from "@/src/common/FaqAccordion/FaqAccordion";

export default function Page() {
  return (
    <Stack gap={{ xs: 16, md: 20 }} sx={{ pt: 4, pb: 16 }}>
      <Container>
        <Stack gap={4}>
          <Stack>
            <Typography variant="caption">PORTABILIDADE INSS</Typography>

            <Typography variant="h1" color="primary">
              Transforme seu consignado em economia!
            </Typography>
          </Stack>

          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius nulla eleifend.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ width: "fit-content" }}
          >
            SIMULE AGORA
          </Button>
        </Stack>
      </Container>

      <Stack>
        <Stack
          width="100%"
          alignItems="flex-end"
          sx={{ background: "linear-gradient(0deg, #f4f4f4 50%, white 50%)" }}
        >
          <CustomImage
            src="https://picsum.photos/1001"
            alt="portabilidade-inss"
            height="15rem"
            width="15rem"
            sx={{
              borderRadius: "1rem 0 0 1rem",
            }}
          />
        </Stack>

        <Container
          sx={{
            backgroundColor: "#f4f4f4",
            py: 16,
          }}
        >
          <Stack gap={8} alignItems="center">
            <Stack gap={6}>
              {advantages.map((advantage, index) => (
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
                  <advantage.icon
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
                    {advantage.title}
                  </Typography>
                  <Typography sx={{ gridArea: "text" }}>
                    {advantage.text}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Button variant="contained" sx={{ width: "fit-content" }}>
              SIMULE AGORA
            </Button>
          </Stack>
        </Container>
      </Stack>

      <Container>
        <Stack alignItems="center" gap={4}>
          <Typography variant="h2" color="primary">
            Como funciona
          </Typography>

          <Button variant="contained" sx={{ width: "fit-content" }}>
            SIMULE AGORA
          </Button>
        </Stack>
      </Container>

      <Container sx={{ backgroundColor: "#F4F4F4", py: 16 }}>reviews</Container>

      {/* <Container>simulador</Container> */}

      <Container>
        <Stack gap={4}>
          <Typography variant="h2" color="primary">
            Perguntas frequentes
          </Typography>

          <FaqAccordion
            items={[
              {
                question: "O que é portabilidade de crédito consignado?",
                answer:
                  "A portabilidade de crédito consignado é quando você transfere seu empréstimo de um banco ou instituição financeira para outro, mantendo as mesmas condições, como taxa de juros e prazo de pagamento. É uma maneira de buscar melhores opções sem precisar pagar mais.",
              },
              {
                question: "Quais os benefícios de fazer a portabilidade?",
                answer:
                  "Os benefícios da portabilidade incluem a possibilidade de economizar dinheiro com taxas de juros mais baixas, reduzir o valor das parcelas mensais e melhorar suas finanças pessoais. Você pode encontrar ofertas mais vantajosas e flexíveis em outro lugar.",
              },
              {
                question: "Como saber se é vantajoso fazer a portabilidade?",
                answer:
                  "Para saber se a portabilidade é vantajosa, compare as condições do seu empréstimo atual com as ofertas de outras instituições. Se a nova oferta tiver taxas de juros mais baixas e melhores condições de pagamento, provavelmente é vantajoso fazer a portabilidade. Lembre-se de considerar as taxas e os custos envolvidos na transferência.",
              },
            ]}
          />
        </Stack>
      </Container>
    </Stack>
  );
}

interface IAdvantage {
  icon: JSXElementConstructor<IconProps<SvgIconComponent>>;
  title: string;
  text: string;
}

const advantages: IAdvantage[] = [
  {
    icon: SavingsOutlinedIcon,
    title: "Taxas mais baixas",
    text: "Reduza os juros do seu empréstimo!",
  },
  {
    icon: TagFacesOutlinedIcon,
    title: "Facilidade e comodidade",
    text: "Processo rápido e sem burocracia.",
  },
  {
    icon: SupportAgentIcon,
    title: "Atendimento personalizado",
    text: "Equipe especializada para te auxiliar.",
  },
];
