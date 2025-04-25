import { Typography } from "@mui/material";
import { headers } from "next/headers";

export interface IFooterTextProps {}

export const FooterText = () => {
  const headersList = headers();
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

export async function getServerSideProps(context: any) {
  const host = context.req.headers.host || "";
  const domain = host.replace(/^www\./, ""); // remove www se necessário

  const match = domainMessages.find((item) => domain.includes(item.domain));

  return {
    props: {
      footerMessage: match?.message || "Bem-vindo!",
    },
  };
}
// utils/domainMessages.ts
export const domainMessages: { domain: string; message: string }[] = [
  {
    domain: "gsconsig.com.br",
    message: `A GS Consig, THEYLLOR CLENIO SCHNEIDER SERVICOS, CNPJ 43.049.629/0001-39, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.`,
  },
  {
    domain: "gsconsig.store",
    message: `A JORDANA HERICA DE VASCONCELOS QUEIROZ, CNPJ 29.944.305/0001-33, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.store
📞 Telefone: (11) 93016-0010`,
  },
  {
    domain: "gsconsig.site",
    message: `A JOHNATA RAPHAEL MATOS DOS ANJOS, CNPJ 47.256.266/0001-63,  localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.site
📞 Telefone: (11) 96135-1317`,
  },
];

const text = `A GS Consig, THEYLLOR CLENIO SCHNEIDER SERVICOS, CNPJ 43.049.629/0001-39, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.`;
