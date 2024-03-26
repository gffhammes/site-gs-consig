import { Typography } from "@mui/material";

export interface IFooterTextProps {}

export const FooterText = () => {
  return (
    <Typography whiteSpace="pre-wrap" color="white">
      {text}
    </Typography>
  );
};

const text = `A GS Consig, CNPJ 43.049.629/0001-39, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021. 

Os valores mencionados podem variar a partir das condições no momento da contratação.`;
