import { SvgIconComponent } from "@mui/icons-material";
import { Box, Button, IconProps, Stack, Typography } from "@mui/material";
import { JSXElementConstructor } from "react";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export interface IPortabilidadeInssVantagensProps {}

export const PortabilidadeInssVantagens = (
  props: IPortabilidadeInssVantagensProps
) => {
  return (
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
            <Typography sx={{ gridArea: "text" }}>{advantage.text}</Typography>
          </Box>
        ))}
      </Stack>

      <Button variant="contained" sx={{ width: "fit-content" }}>
        SIMULE AGORA
      </Button>
    </Stack>
  );
};
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
