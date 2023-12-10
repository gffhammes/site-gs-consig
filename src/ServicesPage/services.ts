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

export const services: IService[] = [
  SERVICO_PORTABILIDADE,
  // SERVICO_CREDITO_NOVO,
  // {
  //   name: "consignado inss",
  // },
  // {
  //   name: "cartao consignado inss",
  // },
  // {
  //   name: "cartao beneficio inss",
  // },
];
