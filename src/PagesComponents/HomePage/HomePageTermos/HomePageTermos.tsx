import { Box, Container, Stack, Typography } from "@mui/material";
import { PageBannerImage } from "@/src/common/PageBannerImage/PageBannerImage";
import BannerImage from "@/public/banner-especialistas.webp"; // Substitua pelo caminho correto da imagem

export const HomePageTermos = () => {
  return (
    <Box>
      {/* Adicionar o Banner no Topo */}
      <PageBannerImage imageSrc={BannerImage.src} />

      <Box sx={{ py: 8 }}>
        <Container>
          <Stack gap={4}>
            <Typography variant="h1" textAlign="center" gutterBottom>
              Termos de Uso e Serviço da GS Consig
            </Typography>

            <Typography variant="body1" paragraph>
              Seja Bem-Vindo ao site da GS Consig. Antes de explorar tudo o que
              temos a oferecer, é importante que você entenda e concorde com
              algumas regras básicas que regem o uso do nosso site
              www.gsconsig.com.br, e qualquer outro serviço digital que nós
              oferecemos, como lojas e plataformas de e-commerce.
            </Typography>

            <Typography variant="body1" paragraph>
              Ao usar nosso site e serviços, você automaticamente concorda em
              seguir as regras que estabelecemos aqui. Caso não concorde com
              algo, por favor, considere não usar nossos serviços. É muito
              importante para nós que você se sinta seguro e informado a todo
              momento.
            </Typography>

            <Typography variant="h3" gutterBottom>
              1. Aceitando os Termos
            </Typography>
            <Typography variant="body1" paragraph>
              Ao navegar e usar o site da GS Consig, você concorda
              automaticamente com nossas regras e condições. Estamos sempre
              procurando melhorar, então esses termos podem mudar de vez em
              quando. Se fizermos alterações significativas, vamos postar as
              atualizações aqui no site. Continuar usando o site após essas
              mudanças significa que você aceita os novos termos.
            </Typography>

            <Typography variant="h3" gutterBottom>
              2. Como Usar o Nosso Site
            </Typography>
            <Typography variant="body1" paragraph>
              A maior parte do nosso site está aberta para você sem a
              necessidade de cadastro. No entanto, algumas seções especiais
              podem exigir que você crie uma conta. Pedimos que você seja
              honesto ao fornecer suas informações e que mantenha sua senha e
              login seguros. Se decidir compartilhar algum conteúdo conosco,
              como comentários, por favor, faça-o de maneira respeitosa e dentro
              da lei.
            </Typography>

            <Typography variant="h3" gutterBottom>
              3. Sua Privacidade
            </Typography>
            <Typography variant="body1" paragraph>
              Na GS Consig, a privacidade é um valor essencial. Ao interagir com
              nosso site, você aceita nossa Política de Privacidade, que detalha
              nossa abordagem responsável e conforme às leis para o manejo dos
              seus dados pessoais. Nosso compromisso é com a transparência e a
              segurança: explicamos como coletamos, usamos e protegemos suas
              informações, garantindo sua privacidade e oferecendo controle
              sobre seus dados.
            </Typography>

            <Typography variant="h3" gutterBottom>
              4. Direitos de Conteúdo
            </Typography>
            <Typography variant="body1" paragraph>
              O conteúdo disponível no site da GS Consig, incluindo, mas não se
              limitando a, textos, imagens, ilustrações, designs, ícones,
              fotografias, programas de computador, videoclipes e áudios,
              constitui propriedade intelectual protegida tanto pela legislação
              nacional quanto por tratados internacionais sobre direitos
              autorais e propriedade industrial.
            </Typography>

            <Typography variant="h3" gutterBottom>
              5. Cookies e Mais
            </Typography>
            <Typography variant="body1" paragraph>
              Utilizamos cookies para melhorar sua experiência, coletando
              informações anônimas durante sua visita, como suas preferências de
              idioma, duração da visita, páginas acessadas, e outras estatísticas
              de uso. Esses dados nos ajudam a personalizar seu conteúdo,
              otimizar a navegação, melhorar continuamente o site em design e
              funcionalidade, e garantir sua segurança online.
            </Typography>

            <Typography variant="h3" gutterBottom>
              6. Explorando Links Externos
            </Typography>
            <Typography variant="body1" paragraph>
              Nosso site pode incluir links para sites externos que achamos que
              podem ser do seu interesse. Note que não temos controle sobre
              esses sites externos e, portanto, não somos responsáveis pelo seu
              conteúdo ou políticas.
            </Typography>

            <Typography variant="h3" gutterBottom>
              7. Mudanças e Atualizações
            </Typography>
            <Typography variant="body1" paragraph>
              A evolução é parte de como operamos, o que significa que estes
              Termos de Uso podem passar por atualizações para refletir melhor
              as mudanças em nossos serviços ou na legislação.
            </Typography>

            <Typography variant="h3" gutterBottom>
              Dúvidas ou Comentários?
            </Typography>
            <Typography variant="body1" paragraph>
              Se tiver dúvidas sobre estes termos, não hesite em nos contatar
              através do e-mail contato@gsconsig.com.br.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePageTermos;
