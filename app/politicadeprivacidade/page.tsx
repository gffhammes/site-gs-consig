import { domainMessages } from "@/src/common/Footer/FooterText";
import { Box, Container, Stack, Typography } from "@mui/material";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const domain = host.replace(/^www\./, "");

  const match = domainMessages.find((item) => domain.includes(item.domain));
  const companyName = match?.companyName || domainMessages[0].companyName;

  return (
    <main>
      <Stack gap={{ xs: 16, md: 20 }} sx={{ pb: 16 }}>
        <Box></Box>

        <Container>
          <Typography variant="h2" sx={{ pb: 2 }}>
            Política de privacidade
          </Typography>

          <Typography>
            A sua privacidade é importante para nós. É política do {companyName}{" "}
            respeitar a sua privacidade em relação a qualquer informação sua que
            possamos coletar no site <Link href="/">{companyName}</Link>, e
            outros sites que possuímos e operamos.
          </Typography>

          <Typography>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </Typography>

          <Typography>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis ​​para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </Typography>

          <Typography>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </Typography>

          <Typography>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade
          </Typography>

          <Typography>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </Typography>

          <Typography>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contacto connosco.
          </Typography>

          <Typography variant="h3" sx={{ py: 2 }}>
            Compromisso do Usuário
          </Typography>

          <Typography>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o {companyName} oferece no site e com caráter
            enunciativo, mas não limitativo:
          </Typography>

          <ul>
            <li>
              <Typography>
                A) Não se envolver em atividades que sejam ilegais ou contrárias
                à boa fé a à ordem pública;
              </Typography>
            </li>
            <li>
              <Typography>
                B) Não difundir propaganda ou conteúdo de natureza racista,
                xenofóbica,{" "}
              </Typography>
              <Typography>
                <a href="https://pixbetoficial.br.com">pixbet</a>
              </Typography>
              <Typography>
                {" "}
                ou azar, qualquer tipo de pornografia ilegal, de apologia ao
                terrorismo ou contra os direitos humanos;
              </Typography>
            </li>
            <li>
              <Typography>
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos
                (softwares) do {companyName}, de seus fornecedores ou terceiros,
                para introduzir ou disseminar vírus informáticos ou quaisquer
                outros sistemas de hardware ou software que sejam capazes de
                causar danos anteriormente mencionados.
              </Typography>
            </li>
          </ul>

          <Typography variant="h3" sx={{ py: 2 }}>
            Mais informações
          </Typography>

          <Typography>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </Typography>

          <Typography>
            Esta política é efetiva a partir de&nbsp;26 de Setembro 2024
          </Typography>
        </Container>
      </Stack>
    </main>
  );
}
