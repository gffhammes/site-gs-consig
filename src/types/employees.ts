export interface IEmployee {
  avatar: string;
  name: string;
  products: string[];
  whatsapp: string;
}

const avatarBasePath = "/fotos-consultores";

export const employees: IEmployee[] = [
  {
    avatar: `${avatarBasePath}/AT01.png`,
    name: "Consultor Kaue Pereira",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938040497",
  },
  {
    avatar: `${avatarBasePath}/AT02.png`,
    name: "Consultora Virgínia Gratão",
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "47989112466",
  },
  {
    avatar: `${avatarBasePath}/AT03.png`,
    name: "Consultor William Souza",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47984736753",
  },
  {
    avatar: `${avatarBasePath}/AT04.png`,
    name: "Consultora Alexandra Oliveira",
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "11912813931",
  },
  {
    avatar: `${avatarBasePath}/AT05.png`,
    name: "Consultora Bruna Farias",
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "11930020283",
  },
  {
    avatar: `${avatarBasePath}/AT06.png`,
    name: "Consultor Gustavo Rosati",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47997398552",
  },
  {
    avatar: `${avatarBasePath}/AT07.png`,
    name: "Consultor Gabriel Corrente",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938042516",
  },
  {
    avatar: `${avatarBasePath}/AT08.png`,
    name: "Consultora Luciana Lunkes",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47992503966",
  },
  {
    avatar: `${avatarBasePath}/AT09.png`,
    name: "Consultor Tainã D Avila",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "47989157996",
  },
  {
    avatar: `${avatarBasePath}/AT10.png`,
    name: "Consultor Jonathan Caixão",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938041210",
  },
  {
    avatar: `${avatarBasePath}/AT11.png`,
    name: "Consultor João Omizolo",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11930004243",
  },
  {
    avatar: `${avatarBasePath}/AT12.png`,
    name: "Consultor Everton Batista",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11954196424",
  },
  {
    avatar: `${avatarBasePath}/AT13.png`,
    name: "Consultor Luiz Fernando",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11946413323",
  },
  {
    avatar: `${avatarBasePath}/AT14.png`,
    name: "Consultor Isaque da Silva",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938043490",
  },
  {
    avatar: `${avatarBasePath}/AT15.png`,
    name: "Consultora Fernanda Guidine",
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "11938043472",
  },
  {
    avatar: `${avatarBasePath}/AT22.png`,
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
