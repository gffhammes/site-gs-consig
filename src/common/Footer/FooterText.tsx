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
    domain: "gsconsig.online",
    companyName: "PAMELA MAIVORME GAUDENCIO 07967615905",
    message: `A PAMELA MAIVORME GAUDENCIO 07967615905, CNPJ 44.442.570/0001-07, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.online
📞 Telefone: (11) 93175-0294`,
  },
  {
    domain: "inss.chat",
    companyName: "LUIZA BARCIA KONZGEN 12090011955",
    message: `A LUIZA BARCIA KONZGEN 12090011955, CNPJ 45.988.436/0001-79, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@inss.chat
📞 Telefone: (11) 97728-0195`,
  },
  {
    domain: "gsconsig.store",
    companyName: "JORDANA HERICA DE VASCONCELOS QUEIROZ",
    message: `A JORDANA HERICA DE VASCONCELOS QUEIROZ, CNPJ 29.944.305/0001-33, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.store
📞 Telefone: (11) 93016-0010`,
  },
  {
    domain: "gsconsig.site",
    companyName: "JOHNATA RAPHAEL MATOS DOS ANJOS",
    message: `A JOHNATA RAPHAEL MATOS DOS ANJOS, CNPJ 47.256.266/0001-63,  localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.site
📞 Telefone: (11) 96135-1317`,
  },
  {
    domain: "gsconsig.com.br",
    companyName: "GS Consig",
    message: `A GS Consig, THEYLLOR CLENIO SCHNEIDER SERVICOS, CNPJ 43.049.629/0001-39, localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.`,
  },
  {
    domain: "gsconsig.shop",
    companyName: "GABRIEL RODRIGUES DE MEDEIROS 09170543933",
    message: `A GABRIEL RODRIGUES DE MEDEIROS 09170543933, CNPJ 46.545.261/0001-98,  localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.shop
📞 Telefone: (11) 93004-2782`,
  },
  {
    domain: "gsconsig.info",
    companyName: "FELIPE RIBEIRO 11638741913",
    message: `A FELIPE RIBEIRO 11638741913, CNPJ 43.507.325/0001-78,  localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.info
📞 Telefone: (11) 93804-3497

`,
  },
  {
    domain: "fgts.chat",
    companyName: "EASY PAY LTDA",
    message: `A EASY PAY LTDA, CNPJ 43.506.622/0001-07, localizada à Rua Guaparim, nº 130, Apto 604 Bloco 4, Bairro Tabuleiro (Monte Alegre), CEP 88348-077 – Camboriú/SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@fgts.chat
📞 Telefone: (11) 93804-2021`,
  },
  {
    domain: "gsconsig.click",
    companyName: "DJALMA RAMOS DA SILVA JUNIOR 85864695564",
    message: `A DJALMA RAMOS DA SILVA JUNIOR 85864695564, CNPJ 42.578.957/0001-60,  localizada à Rodovia BR-101, Av. Marginal Oeste, Km 131 CEP 88349-175 - Monte Alegre, Camboriú - SC, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.

Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.click
📞 Telefone: (47) 99756-5998`,
  },
  {
    domain: "consiggs.com.br",
    companyName: "GS NEGOCIACOES E INTERMEDIACOES LTDA",
    message: `A GS NEGOCIACOES E INTERMEDIACOES LTDA, CNPJ 41.104.493/0001-97, localizada à Quadra QNM 34 Area Especial 1, 01 Sala 2007, Taguatinga Norte, Brasília - DF, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.

Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.

Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.

📧 E-mail: contato@consiggs.com.br
📞 Telefone: (47) 99652-0662`,
  },
  {
    domain: "gsconsig.blog",
    companyName: "GS INIMA BRASIL LTDA",
    message: `A GS INIMA BRASIL LTDA, CNPJ 08.905.300/0001-21, localizada à Rua Joaquim Floriano, 913, Conj 61, Itaim Bibi, São Paulo - SP, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.blog
📞 Telefone: (47) 99687-1755`,
  },
  {
    domain: "gsconsig.cloud",
    companyName: "GS COMERCIO DE EQUIPAMENTOS E SERVICOS LTDA",
    message: `A GS COMERCIO DE EQUIPAMENTOS E SERVICOS LTDA, CNPJ 41.979.895/0001-35, localizada à Rua Principal, 100, Centro, São Paulo - SP, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.cloud
📞 Telefone: (11) 93804-0497`,
  },
  {
    domain: "gsconsig.fun",
    companyName: "GS TRANSPORTES E SERVICOS LTDA",
    message: `A GS TRANSPORTES E SERVICOS LTDA, CNPJ 23.814.427/0001-29, localizada à Avenida Principal, 200, Centro, Rio de Janeiro - RJ, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.fun
📞 Telefone: (11) 93014-7751`,
  },
  {
    domain: "gsconsig.space",
    companyName: "GS SERVICOS LTDA",
    message: `A GS SERVICOS LTDA, CNPJ 07.027.523/0001-70, localizada à Avenida Principal, 300, Centro, São Paulo - SP, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsig.space
📞 Telefone: (11) 93804-3055`,
  },
  {
    domain: "gsconsigbrasil.cloud",
    companyName: "GS TECNOLOGIA DA INFORMACAO LTDA",
    message: `A GS TECNOLOGIA DA INFORMACAO LTDA, CNPJ 04.928.389/0001-90, localizada à Rua Professor Xandinho, 75, Campo Grande - MS, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigbrasil.cloud
📞 Telefone: (11) 93804-2021`,
  },
  {
    domain: "gsconsigbrasil.com.br",
    companyName: "GS CONSULTORIA EM NEGOCIOS IMOBILIARIO LTDA",
    message: `A GS CONSULTORIA EM NEGOCIOS IMOBILIARIO LTDA, CNPJ 46.501.632/0001-30, localizada à Avenida Governador Pedro de Toledo, 596, Bonfim, Campinas - SP, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigbrasil.com.br
📞 Telefone: (11) 93008-0130`,
  },
  {
    domain: "gsconsigbrasil.online",
    companyName: "GS CONSULTORIA E EQUIPAMENTO DE AUTOMACAO COMERCIAL LTDA ME",
    message: `A GS CONSULTORIA E EQUIPAMENTO DE AUTOMACAO COMERCIAL LTDA ME, CNPJ 17.458.4797670085/0001-53, localizada à Avenida Ministro Salgado Filho, 1395, Soteco, Vila Velha - ES, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigbrasil.online
📞 Telefone: (47) 99756-5998`,
  },
  {
    domain: "gsconsigbrasil.shop",
    companyName: "BIO GS CONSULTORIA AMBIENTAL LTDA",
    message: `A BIO GS CONSULTORIA AMBIENTAL LTDA, CNPJ 27.254.415/0001-48, localizada à Rua Laureano Garcia, 2-45, Sala 2, Distrito Industrial Marcus Vinicius Feliz Machado, Bauru - SP, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigbrasil.shop
📞 Telefone: (12) 98300-0089`,
  },
  {
    domain: "gsconsigbrasil.site",
    companyName: "GS CONSULTORIA E TREINAMENTO ONLINE - LTDA",
    message: `A GS CONSULTORIA E TREINAMENTO ONLINE - LTDA, CNPJ 36.094.587/0001-92, localizada à Rua Principe Humberto, 112, Conj 44, Centro, São Bernardo do Campo - SP, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigbrasil.site
📞 Telefone: (47) 99611-0991`,
  },
  {
    domain: "gsconsigbrasil.space",
    companyName: "GS CONSULTORIA E ASSESSORIA LTDA",
    message: `A GS CONSULTORIA E ASSESSORIA LTDA, CNPJ 40.690.296/0001-34, localizada à Rua Casemiro Reis, 330, Nova Russia, Ponta Grossa - PR, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigbrasil.space
📞 Telefone: (11) 93018-0627`,
  },
  {
    domain: "gsconsigbrasil.store",
    companyName: "GS CONSULTORIA E DESENVOLVIMENTO LTDA",
    message: `A GS CONSULTORIA E DESENVOLVIMENTO LTDA, CNPJ 26.681.831/0001-60, localizada à Rua do Prado, 35, Santa Cruz, Rio de Janeiro - RJ, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigbrasil.store
📞 Telefone: (11) 94405-2157`,
  },
  {
    domain: "gsconsigcredito.shop",
    companyName: "GS CONSULTORIA EMPRESARIAL E TRIBUTARIA LTDA",
    message: `A GS CONSULTORIA EMPRESARIAL E TRIBUTARIA LTDA, CNPJ 08.811.405/0001-11, localizada à Avenida Principal, 500, Centro, São Paulo - SP, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigcredito.shop
📞 Telefone: (11) 93804-3281`,
  },
  {
    domain: "gsconsigdigital.shop",
    companyName: "GS CONSULTORIA IMOBILIARIA LTDA",
    message: `A GS CONSULTORIA IMOBILIARIA LTDA, CNPJ 26.827.706/0001-15, localizada à Avenida Principal, 600, Centro, Recife - PE, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsigdigital.shop
📞 Telefone: (11) 93804-0138`,
  },
  {
    domain: "gsconsignado.com.br",
    companyName: "GS PARTICIPACOES LTDA",
    message: `A GS PARTICIPACOES LTDA, CNPJ 24.412.332/0001-41, localizada à Rua T 31, 830, Quadra02 Lote 06/08 Sala 05, Setor Sol Nascente, Goiânia - GO, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsignado.com.br
📞 Telefone: (11) 93804-2188`,
  },
  {
    domain: "gsconsignados.com.br",
    companyName: "GS PARTICIPACOES LTDA",
    message: `A GS PARTICIPACOES LTDA, CNPJ 39.443.872/0001-60, localizada à Avenida Principal, 700, Centro, São Paulo - SP, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gsconsignados.com.br
📞 Telefone: (11) 93804-3456`,
  },
  {
    domain: "inss.chat",
    companyName: "GS PARTICIPACOES LTDA",
    message: `A GS PARTICIPACOES LTDA, CNPJ 12.440.022/0001-51, localizada à Avenida Principal, 4797670085, Centro, Rio de Janeiro - RJ, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@inss.chat
📞 Telefone: (11) 93804-2941`,
  },
  {
    domain: "inss.chat",
    companyName: "GS PARTICIPACOES LTDA",
    message: `A GS PARTICIPACOES LTDA, CNPJ 12.440.022/0001-51, localizada à Avenida Principal, 4797670085, Centro, Rio de Janeiro - RJ, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.
Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.
Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@inss.chat
📞 Telefone: (11) 93804-2941`,
  },
  {
    domain: "gscon.shop",
    companyName: "GS PARTICIPACOES LTDA",
    message: `A GS PARTICIPACOES LTDA, CNPJ 12.440.022/0001-51, localizada à Avenida Principal, 4797670085, Centro, Rio de Janeiro - RJ, atua como correspondente bancário de instituições financeiras, atividade regulada pelo Banco Central do Brasil, nos termos da Resolução nº 4.935, de 29 de Julho de 2021.


Os valores mencionados podem variar a partir das condições no momento da contratação.
Valorizamos a privacidade dos nossos visitantes. Não armazenamos nem coletamos nenhum dado pessoal dos usuários através deste site. Qualquer informação fornecida por você através de formulários ou interações com o site não será retida ou utilizada para qualquer outro fim além da comunicação direta entre você e nós.


Se tiver alguma dúvida ou preocupação sobre a privacidade dos seus dados ao utilizar este site, sinta-se à vontade para nos contatar.
📧 E-mail: contato@gscon.shop
📞 Telefone: (11) 93804-2941`,
  },
];
