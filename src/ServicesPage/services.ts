export interface IService {
  name: string;
  description: string;
  thumbUrl: string;
  slug: string;
}

export const SERVICO_PORTABILIDADE: IService = {
  name: "portabilidade inss",
  description: "Diminua sua taxa e ganhe dinheiro de volta",
  thumbUrl: "/portabilidade.jpg",
  slug: "portabilidade-inss",
};

export const SERVICO_CREDITO_NOVO: IService = {
  name: "crédito novo inss",
  description: "Condições especiais para realizar seus sonhos",
  thumbUrl: "/viagem-com-idosos-saiba-quais-sao-os-cuidados-essenciais-2.jpg",
  slug: "credito-novo-inss",
};

export const CONSIGNADO_INSS: IService = {
  name: "consignado inss",
  description: "Desconto em folha: Prático e sem estresse.",
  thumbUrl: "/formularios-de-preenchimento-de-homem-senior_236854-20110.jpg",
  slug: "consignado-inss",
};

export const CARTAO_CONSIGNADO_INSS: IService = {
  name: "cartão consignado inss",
  description: "Praticidade e segurança para seu dia-a-dia",
  thumbUrl: "/Old-man-online-banking.png",
  slug: "cartao-consignado-inss",
};

export const CARTAO_BENEFICIO_INSS: IService = {
  name: "cartão benefício inss",
  description: "Tenha liberdade e descomplique seus benefícios",
  thumbUrl:
    "/mulher-idosa-sorrindo-para-a-camera-com-um-telefone-segurando-uma-oferta-de-cartao-de-credito-e-debito-comprando-online_146482-2722.avif",
  slug: "cartao-beneficio-inss",
};

export const services: IService[] = [
  SERVICO_PORTABILIDADE,
  SERVICO_CREDITO_NOVO,
  CONSIGNADO_INSS,
  CARTAO_CONSIGNADO_INSS,
  CARTAO_BENEFICIO_INSS,
];
