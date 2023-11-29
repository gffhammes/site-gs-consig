export interface IService {
  name: string;
  description: string;
  thumbUrl: string;
  slug: string;
}

export const services: IService[] = [
  {
    name: "portabilidade inss",
    description: "Diminua sua taxa e ganhe dinheiro de volta",
    thumbUrl: "https://picsum.photos/1001",
    slug: "portabilidade-inss",
  },
  {
    name: "crédito novo inss",
    description: "Condições especiais que só nós oferecemos",
    thumbUrl: "https://picsum.photos/1000",
    slug: "credito-novo-inss",
  },
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
