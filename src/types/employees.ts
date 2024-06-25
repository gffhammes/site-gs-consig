export interface IEmployee {
  avatar: string;
  genre: 'M'|'F';
  name: string;
  products: string[];
  whatsapp: string;
}

const avatarBasePath = "/fotos-consultores";

export const employees: IEmployee[] = [
  {
    avatar: `${avatarBasePath}/AT01.webp`,
    genre: 'M',
    name: "Consultor Kaue Pereira",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT02.webp`,
    name: "Consultora Virgínia Gratão",
    genre: 'F',
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT04.webp`,
    name: "Consultora Alexandra Oliveira",
    genre: 'F',
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT05.webp`,
    name: "Consultora Bruna Farias",
    genre: 'F',
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT06.webp`,
    name: "Consultor Gustavo Rosati",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT07.webp`,
    name: "Consultor Gabriel Corrente",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT09.webp`,
    name: "Consultor Tainã D Avila",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT10.webp`,
    name: "Consultor Jonathan Caixão",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT11.webp`,
    name: "Consultor João Omizolo",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT12.webp`,
    name: "Consultor Everton Batista",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT13.webp`,
    name: "Consultor Luiz Fernando",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT14.webp`,
    name: "Consultor Lucian Oliveira",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT15.webp`,
    name: "Consultora Fernanda Guidine",
    genre: 'F',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT16.webp`,
    name: "Consultor Paulo Galvão",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT18.webp`,
    name: "Consultora Paolla Maivorme",
    genre: 'F',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT19.webp`,
    name: "Consultora Maria Eduarda",
    genre: 'F',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT21.webp`,
    name: "Consultora Naian de Oliveira",
    genre: 'F',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
  {
    avatar: `${avatarBasePath}/AT22.webp`,
    name: "Consultor Luiz Ilmar",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996699464",
  },
];

export const allEmployeesAvailableProducts: string[] = [];

employees.forEach((employee) => {
  employee.products.forEach((product) => {
    if (!allEmployeesAvailableProducts.includes(product)) {
      allEmployeesAvailableProducts.push(product);
    }
  });
});
