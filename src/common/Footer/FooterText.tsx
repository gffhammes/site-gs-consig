import { Typography } from "@mui/material";
import { headers } from "next/headers";

export interface IFooterTextProps {}

export const FooterText = async () => {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const domain = host.replace(/^www\./, "");

  const match = domainMessages.find((item) => domain.includes(item.domain));
  const message = match?.message || domainMessages[0].message;

  return (
    <Typography whiteSpace="pre-wrap" color="white">
      {message}
    </Typography>
  );
};

export const domainMessages: {
  domain: string;
  message: string;
  companyName: string;
}[] = [
  {
    domain: "gsconsig.com.br",
    companyName: "GS Consig",
    message: `A GS Consig, THEYLLOR CLENIO SCHNEIDER SERVICOS, CNPJ 43.049.629/0001-39, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.`,
  },
  {
    domain: "gsconsig.com.br",
    companyName: "GS Consig",
    message: `A GS Consig, THEYLLOR CLENIO SCHNEIDER SERVICOS, CNPJ 43.049.629/0001-39, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.`,
  },
];
