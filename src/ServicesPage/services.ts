import { SvgIconComponent } from "@mui/icons-material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { IconProps } from "@mui/material";
import { JSXElementConstructor } from "react";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

export interface IService {
  name: string;
  description: string;
  mainDescription: string;
  thumbUrl: string;
  slug: string;
  Icon: JSXElementConstructor<IconProps<SvgIconComponent>>;
}

export const SERVICO_PORTABILIDADE: IService = {
  name: "portabilidade inss",
  description: "Diminua sua taxa e ganhe dinheiro de volta",
  thumbUrl: "/portabilidade.jpg",
  slug: "portabilidade-inss",
  Icon: PublishedWithChangesIcon,
  mainDescription:
    "Diminua o valor da sua parcela e tenha dinheiro para viver! Conheça agora mesmo nossas condições especiais para te dar mais qualidade de vida",
};

export const SERVICO_CREDITO_NOVO: IService = {
  name: "crédito novo inss",
  description: "Condições especiais para realizar seus sonhos",
  thumbUrl: "/viagem-com-idosos-saiba-quais-sao-os-cuidados-essenciais-2.jpg",
  slug: "credito-novo-inss",
  Icon: PaidOutlinedIcon,
  mainDescription:
    "Você merece uma vida financeira mais tranquila! O Crédito Novo INSS é a sua porta de entrada para um mundo de possibilidades financeiras",
};

export const CONSIGNADO_INSS: IService = {
  name: "consignado inss",
  description: "Desconto em folha: Prático e sem estresse.",
  thumbUrl: "/formularios-de-preenchimento-de-homem-senior_236854-20110.jpg",
  slug: "consignado-inss",
  Icon: ReceiptLongOutlinedIcon,
  mainDescription:
    "O Consignado INSS é a chave para conquistar estabilidade financeira. Com condições especials, garantimos um processo simples e vantajoso para aposentados como você",
};

export const CARTAO_CONSIGNADO_INSS: IService = {
  name: "cartão consignado inss",
  description: "Praticidade e segurança para seu dia-a-dia",
  thumbUrl: "/Old-man-online-banking.png",
  slug: "cartao-consignado-inss",
  Icon: AddCardOutlinedIcon,
  mainDescription:
    "Nosso Cartão Consignado INSS oferece facilidade e praticidade para aposentados Controle suas despesas com um cartão feito para atender suas necessidades financeiras.",
};

export const CARTAO_BENEFICIO_INSS: IService = {
  name: "cartão benefício inss",
  description: "Tenha liberdade e descomplique seus benefícios",
  thumbUrl:
    "/mulher-idosa-sorrindo-para-a-camera-com-um-telefone-segurando-uma-oferta-de-cartao-de-credito-e-debito-comprando-online_146482-2722.avif",
  slug: "cartao-beneficio-inss",
  Icon: CardGiftcardOutlinedIcon,
  mainDescription:
    "O Cartão Beneficio INSS oferece liberdade e comodidade para aposentados. Gerencie seus recursos de maneira simples e eficiente.",
};

export const services: IService[] = [
  SERVICO_PORTABILIDADE,
  SERVICO_CREDITO_NOVO,
  CONSIGNADO_INSS,
  CARTAO_CONSIGNADO_INSS,
  CARTAO_BENEFICIO_INSS,
];
