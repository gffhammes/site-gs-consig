import { SvgIconComponent } from "@mui/icons-material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { IconProps } from "@mui/material";
import { JSXElementConstructor } from "react";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import PhonelinkSetupOutlinedIcon from "@mui/icons-material/PhonelinkSetupOutlined";
import { IStep } from "@/src/common/Stepper/Stepper";

export interface IServiceIconTextItem {
  icon: JSXElementConstructor<IconProps<SvgIconComponent>>;
  title: string;
  text: string;
}

export interface IServiceFaqItem {
  question: string;
  answer: string;
}

export interface IService {
  name: string;
  description: string;
  mainDescription: string;
  thumbUrl: string;
  slug: string;
  Icon: JSXElementConstructor<IconProps<SvgIconComponent>>;
  pageH1: string;
  pageSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  iconTextItens: IServiceIconTextItem[];
  steps: IStep[];
  faq: IServiceFaqItem[];
}

export const SERVICO_PORTABILIDADE: IService = {
  name: "portabilidade inss",
  description: "Diminua sua taxa e ganhe dinheiro de volta",
  thumbUrl: "/portabilidade-inss.webp",
  slug: "portabilidade-inss",
  Icon: PublishedWithChangesIcon,
  mainDescription:
    "Diminua o valor da sua parcela e tenha dinheiro para viver! Conheça agora mesmo nossas condições especiais para te dar mais qualidade de vida",
  pageH1: "Transforme seu consignado em economia!",
  pageSubtitle:
    "Diminua o valor da sua parcela e tenha dinheiro para viver! Conheça agora mesmo nossas condições especiais para te dar mais qualidade de vida",
  metaTitle: "Portabilidade INSS | GS Consig",
  metaDescription:
    "Faça a portabilidade do seu benefício INSS com facilidade e segurança em Balneário Camboriú. Com nossa solução especializada, você pode transferir seu crédito de forma descomplicada. Aproveite condições exclusivas e benefícios feitos sob medida para a sua aposentadoria. Descubra como simplificar sua vida financeira agora!",
  iconTextItens: [
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
  ],
  steps: [
    {
      title: "Solicite uma simulação gratuita",
    },
    {
      title: "Compare as condições e taxas",
    },
    {
      title: "Autorize a portabilidade e economize!",
    },
  ],
  faq: [
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
  ],
};

export const SERVICO_CREDITO_NOVO: IService = {
  name: "crédito novo inss",
  description: "Condições especiais para realizar seus sonhos",
  thumbUrl: "/credito-novo-inss.webp",
  slug: "credito-novo-inss",
  Icon: PaidOutlinedIcon,
  mainDescription:
    "Você merece uma vida financeira mais tranquila! O Crédito Novo INSS é a sua porta de entrada para um mundo de possibilidades financeiras",
  pageH1: "Você merece uma vida financeira mais tranquila!",
  pageSubtitle: `O Crédito Novo INSS é a sua porta de entrada para um mundo de possibilidades financeiras.
              
Com taxas competitivas, prazos flexíveis e um processo rápido e descomplicado, estamos aqui para atender às suas necessidades financeiras.`,
  iconTextItens: [
    {
      icon: ThumbUpAltOutlinedIcon,
      title: "Dinheiro Rápido e Sem Complicações",
      text: "Descomplicamos o processo. Conseguir crédito é fácil e rápido, sem papelada complicada.",
    },
    {
      icon: SavingsOutlinedIcon,
      title: "Juros Baixos e Tudo às Claras",
      text: "Mantemos as coisas simples e justas. Oferecemos taxas de juros baixas e sem surpresas escondidas.",
    },
    {
      icon: TagFacesOutlinedIcon,
      title: "Você é Único, Assim Como Nosso Atendimento",
      text: "Entendemos você. Nossa equipe está pronta para ajudar de forma personalizada, tornando o processo amigável e tranquilo.",
    },
  ],
  steps: [
    {
      title: "Solicite uma simulação gratuita",
    },
    {
      title: "Envie a documentação necessária",
    },
    {
      title: "Receba o dinheiro na sua conta!",
    },
  ],
  faq: [
    {
      question: "Quais documentos são necessários para solicitar o empréstimo?",
      answer:
        "Você precisará apenas de documentos simples, como RG, CPF e comprovante de residência. Não se preocupe, nossa equipe está pronta para te ajudar durante todo o processo.",
    },
    {
      question:
        "Quanto tempo leva para o dinheiro ser depositado na minha conta?",
      answer:
        "Após a aprovação, o dinheiro é depositado rapidinho na sua conta. Fazemos o máximo para tornar esse processo o mais ágil possível. Estamos sempre aqui para te manter informado!",
    },
    {
      question:
        "Quem está elegível para contratar o Crédito Novo INSS e como posso usar o dinheiro?",
      answer:
        "Todas as pessoas aposentadas pelo INSS estão elegíveis para contratar. Quanto ao uso do dinheiro, a escolha é sua! Pode ser usado para realizar sonhos, quitar dívidas, fazer melhorias em casa ou até mesmo para emergências. Estamos aqui para ajudar você a conquistar seus objetivos!",
    },
  ],
  metaTitle: "Crédito Novo INSS | GS Consig",
  metaDescription:
    "Obtenha seu crédito novo INSS com facilidade em Balneário Camboriú. Conosco, você tem acesso a soluções financeiras personalizadas, especialmente criadas para beneficiários do INSS. Simplificamos o processo para garantir que você tenha uma experiência tranquila. Descubra como iniciar uma nova fase financeira conosco - solicite seu crédito novo INSS hoje!",
};

export const CONSIGNADO_INSS: IService = {
  name: "consignado inss",
  description: "Desconto em folha: Prático e sem estresse.",
  thumbUrl: "/consignado-inss.webp",
  slug: "consignado-inss",
  Icon: ReceiptLongOutlinedIcon,
  mainDescription:
    "O Consignado INSS é a chave para conquistar estabilidade financeira. Com condições especials, garantimos um processo simples e vantajoso para aposentados como você",

  metaTitle: "Consignado INSS | GS Consig",
  metaDescription:
    "Descubra as vantagens do empréstimo consignado INSS em Balneário Camboriú. Oferecemos condições especiais e facilidades exclusivas para aposentados e pensionistas. Conte com uma aprovação rápida e sem complicações. Garanta um empréstimo seguro e sob medida para suas necessidades - conheça nossas opções de consignado INSS agora!",

  pageH1: "Tenha Mais Controle com o Consignado INSS!",
  pageSubtitle: `O Consignado INSS é a chave para conquistar estabilidade financeira. Com condições especiais, garantimos um processo simples e vantajoso para aposentados como você.`,
  iconTextItens: [
    {
      icon: ReceiptLongOutlinedIcon,
      title: "Pagamento sem Preocupações",
      text: "O valor das parcelas é descontado diretamente do seu benefício. Assim, você não precisa se preocupar com pagamentos atrasados.",
    },
    {
      icon: TaskAltOutlinedIcon,
      title: "Transparência em Cada Parcela",
      text: "Mantemos as taxas transparentes e competitivas, para que você tenha total clareza sobre os custos do seu empréstimo.",
    },
    {
      icon: TagFacesOutlinedIcon,
      title: "Processo Rápido e Descomplicado",
      text: "Descomplicamos o processo. Com poucos documentos, garantimos um processo rápido para que você receba o dinheiro quando mais precisa.",
    },
  ],
  steps: [
    {
      title: "Solicite uma simulação gratuita",
    },
    {
      title: "Envie a documentação necessária",
    },
    {
      title: "Receba o dinheiro na sua conta!",
    },
  ],
  faq: [
    {
      question:
        "Quais documentos são necessários para solicitar o empréstimo consignado?",
      answer:
        "O processo é fácil! Basta ter RG, CPF e comprovante de residência. Estamos aqui para te guiar durante todo o processo.",
    },
    {
      question: "Como funciona o desconto em folha no consignado INSS?",
      answer:
        "As parcelas são automaticamente descontadas do seu benefício do INSS, oferecendo praticidade e evitando preocupações com pagamento de contas.",
    },
    {
      question: "Posso quitar o empréstimo antecipadamente?",
      answer:
        "Claro! Oferecemos a flexibilidade de quitar o empréstimo antes do prazo, sem taxas extras. Sua satisfação é nossa prioridade.",
    },
  ],
};

export const CARTAO_CONSIGNADO_INSS: IService = {
  name: "cartão consignado inss",
  description: "Praticidade e segurança para seu dia-a-dia",
  thumbUrl: "/cartao-consignado-inss.webp",
  slug: "cartao-consignado-inss",
  Icon: AddCardOutlinedIcon,
  mainDescription:
    "Nosso Cartão Consignado INSS oferece facilidade e praticidade para aposentados Controle suas despesas com um cartão feito para atender suas necessidades financeiras.",
  metaTitle: "Cartão Consignado INSS | GS Consig",
  metaDescription:
    "Tenha controle total das suas finanças com nosso Cartão Consignado INSS em Balneário Camboriú. Aproveite os benefícios exclusivos e a praticidade de descontos automáticos em sua folha de pagamento. Com taxas competitivas e aprovação rápida, nosso cartão oferece soluções financeiras sob medida para aposentados e pensionistas do INSS. Solicite seu Cartão Consignado agora e simplifique seu dia a dia!",
  pageH1: "Tenha Controle Total com o Cartão Consignado INSS!",
  pageSubtitle: `Nosso Cartão Consignado INSS oferece facilidade e praticidade para aposentados. Controle suas despesas com um cartão feito para atender suas necessidades financeiras.`,
  iconTextItens: [
    {
      icon: CreditCardOutlinedIcon,
      title: "Compra com Desconto Direto em Folha",
      text: "Faça compras com seu cartão e tenha o valor descontado diretamente no seu benefício, proporcionando controle e conveniência.",
    },
    {
      icon: TaskAltOutlinedIcon,
      title: "Sem Anuidade e Taxas Transparentes",
      text: "Oferecemos um cartão sem anuidade e com taxas transparentes. Sem surpresas, apenas vantagens financeiras.",
    },
    {
      icon: StorefrontOutlinedIcon,
      title: "Aceito em Milhares de Estabelecimentos",
      text: "Use seu cartão em diversos estabelecimentos, garantindo conveniência e acessibilidade em suas transações.",
    },
  ],
  steps: [
    {
      title: "Solicite Seu Cartão em Minutos",
    },
    {
      title: "Receba em Casa sem Complicações",
    },
    {
      title: "Ative e Comece a Usar",
    },
  ],
  faq: [
    {
      question:
        "Quais documentos são necessários para solicitar o Cartão Consignado INSS?",
      answer:
        "O processo é fácil! Basta ter RG, CPF e comprovante de residência. Estamos aqui para te guiar durante todo o processo.",
    },
    {
      question: "Como funciona o desconto em folha no Cartão Consignado INSS?",
      answer:
        "As despesas feitas com o cartão são descontadas diretamente do seu benefício do INSS, oferecendo praticidade e evitando preocupações com faturas.",
    },
    {
      question: "O Cartão Consignado INSS possui limite de crédito?",
      answer:
        "Sim, mas o limite é estabelecido com base na margem consignável do seu benefício, proporcionando um controle financeiro seguro.",
    },
  ],
};

export const CARTAO_BENEFICIO_INSS: IService = {
  name: "cartão benefício inss",
  description: "Tenha liberdade e descomplique seus benefícios",
  thumbUrl: "/cartao-beneficio-inss.webp",
  slug: "cartao-beneficio-inss",
  Icon: CardGiftcardOutlinedIcon,
  mainDescription:
    "O Cartão Beneficio INSS oferece liberdade e comodidade para aposentados. Gerencie seus recursos de maneira simples e eficiente.",
  metaTitle: "Cartão Benefício INSS | GS Consig",
  metaDescription:
    "Otimize seu acesso aos benefícios do INSS com nosso Cartão Benefício em Balneário Camboriú. Desfrute da praticidade de um cartão com descontos diretos em sua folha de pagamento. Com taxas competitivas e aprovação rápida, nosso cartão oferece soluções financeiras sob medida para aposentados e pensionistas. Solicite seu Cartão Benefício INSS agora e simplifique sua vida financeira!",
  pageH1: "Desfrute da Liberdade com o Cartão Benefício INSS!",
  pageSubtitle: `O Cartão Benefício INSS oferece liberdade e comodidade para aposentados. Gerencie seus recursos de maneira simples e eficiente.`,
  iconTextItens: [
    {
      icon: MonetizationOnOutlinedIcon,
      title: "Sem Conta Bancária, Mais Facilidade",
      text: "Utilize seu cartão sem a exigência de conta bancária, simplificando suas transações e proporcionando mais autonomia.",
    },
    {
      icon: ShareLocationOutlinedIcon,
      title: "Saques e Pagamentos em Qualquer Lugar",
      text: "Efetue saques e realize pagamentos em diversos estabelecimentos por todo o Brasil, garantindo conveniência onde quer que esteja.",
    },
    {
      icon: PhonelinkSetupOutlinedIcon,
      title: "Controle na Ponta dos Dedos",
      text: "Gerencie seus gastos de forma conveniente e segura através do aplicativo exclusivo do cartão.",
    },
  ],
  steps: [
    {
      title: "Solicite Seu Cartão Benefício em Minutos",
    },
    {
      title: "Receba em Casa sem Complicações",
    },
    {
      title: "Ative e Comece a Usar",
    },
  ],
  faq: [
    {
      question:
        "Quais documentos são necessários para solicitar o Cartão Benefício INSS?",
      answer:
        "O processo é fácil! Basta ter RG, CPF e comprovante de residência. Estamos aqui para te guiar durante todo o processo.",
    },
    {
      question: "Posso utilizar o Cartão Benefício em compras online?",
      answer:
        "Sim, o cartão é aceito em compras online, proporcionando mais conveniência nas suas transações.",
    },
    {
      question: "Existe limite de saques diários com o Cartão Benefício?",
      answer:
        "O cartão possui um limite diário para saques, oferecendo segurança e controle financeiro.",
    },
  ],
};

export const services: IService[] = [
  SERVICO_PORTABILIDADE,
  SERVICO_CREDITO_NOVO,
  CONSIGNADO_INSS,
  CARTAO_CONSIGNADO_INSS,
  CARTAO_BENEFICIO_INSS,
];
