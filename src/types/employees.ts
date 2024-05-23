export interface IEmployee {
  avatar: string;
  name: string;
  products: string[];
  whatsapp: string;
}

const avatarBasePath = "/fotos-consultores";

export const employees: IEmployee[] = [
  {
    avatar: `${avatarBasePath}/AT01.webp`,
    name: "Consultor Kaue Pereira",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938040497",
  },
  {
    avatar: `${avatarBasePath}/AT02.webp`,
    name: "Consultora Virgínia Gratão",
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "47989112466",
  },
  {
    avatar: `${avatarBasePath}/AT03.webp`,
    name: "Consultor William Souza",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47984736753",
  },
  {
    avatar: `${avatarBasePath}/AT04.webp`,
    name: "Consultora Alexandra Oliveira",
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "11912813931",
  },
  {
    avatar: `${avatarBasePath}/AT05.webp`,
    name: "Consultora Bruna Farias",
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "11930020283",
  },
  {
    avatar: `${avatarBasePath}/AT06.webp`,
    name: "Consultor Gustavo Rosati",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996520303",
  },
  {
    avatar: `${avatarBasePath}/AT07.webp`,
    name: "Consultor Gabriel Corrente",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938042516",
  },
  {
    avatar: `${avatarBasePath}/AT09.webp`,
    name: "Consultor Tainã D Avila",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47989157996",
  },
  {
    avatar: `${avatarBasePath}/AT10.webp`,
    name: "Consultor Jonathan Caixão",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938041210",
  },
  {
    avatar: `${avatarBasePath}/AT11.webp`,
    name: "Consultor João Omizolo",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11930004243",
  },
  {
    avatar: `${avatarBasePath}/AT12.webp`,
    name: "Consultor Everton Batista",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11954196424",
  },
  {
    avatar: `${avatarBasePath}/AT13.webp`,
    name: "Consultor Luiz Fernando",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11946413323",
  },
  {
    avatar: `${avatarBasePath}/AT14.webp`,
    name: "Consultor Lucian Oliveira",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47992503966",
  },
  {
    avatar: `${avatarBasePath}/AT15.webp`,
    name: "Consultora Fernanda Guidine",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938043472",
  },
  {
    avatar: `${avatarBasePath}/AT16.webp`,
    name: "Consultora Paulo Galvão",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938041995",
  },
  {
    avatar: `${avatarBasePath}/AT18.webp`,
    name: "Consultora Paolla Maivorme",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47996520793",
  },
  {
    avatar: `${avatarBasePath}/AT19.webp`,
    name: "Consultora Maria Eduarda",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47984890666",
  },
  {
    avatar: `${avatarBasePath}/AT20.webp`,
    name: "Consultora Paulo Cavalcante",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11930040417",
  },
  {
    avatar: `${avatarBasePath}/AT21.webp`,
    name: "Consultora Naian de Oliveira",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11949165470",
  },
  {
    avatar: `${avatarBasePath}/AT22.webp`,
    name: "Consultor Luiz Ilmar",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11962251489",
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
