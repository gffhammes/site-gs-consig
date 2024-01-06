export interface IEmployee {
  avatar: string;
  name: string;
  products: string[];
  whatsapp: string;
}

const avatarBasePath = "/fotos-consultores";

export const employees: IEmployee[] = [
  {
    avatar: `${avatarBasePath}/kaue-pereira.webp`,
    name: "Consultor Kaue Pereira",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "47989111841",
  },
  {
    avatar: `${avatarBasePath}/virginia-gratao.webp`,
    name: "Consultora Virgínia Gratão",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "47989112466",
  },
  {
    avatar: `${avatarBasePath}/william-souza.webp`,
    name: "Consultor William Couto",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "47984736753",
  },
  {
    avatar: `${avatarBasePath}/alexandra-oliveira.webp`,
    name: "Consultora Alexandra Oliveira",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "11946413323",
  },
  {
    avatar: `${avatarBasePath}/aline-trindade.webp`,
    name: "Consultora Aline Trinidade",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "47989247176",
  },
  {
    avatar: `${avatarBasePath}/gustavo-rosati.webp`,
    name: "Consultor Gustavo Rosati",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "47997398552",
  },
  {
    avatar: `${avatarBasePath}/emily-garcia.webp`,
    name: "Consultora Emily Garcia",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "47992503966",
  },
  {
    avatar: `${avatarBasePath}/luciana-lunkes.webp`,
    name: "Consultora Lunkes",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "11938042327",
  },
  {
    avatar: `${avatarBasePath}/taina-davila.webp`,
    name: "Consultor Tainã D'avila",
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "MARGEM AUMENTO"],
    whatsapp: "47989157996",
  },
  {
    avatar: `${avatarBasePath}/gabriel-rodrigues.webp`,
    name: "Consultor Gabriel Rodrigues",
    products: ["CARTÃO", "CARTÃO C/ SAQUE", "NOVO", "SAQUE ANIVERSARIO"],
    whatsapp: "11946397506",
  },
  {
    avatar: `${avatarBasePath}/joao-omizolo.webp`,
    name: "Consultor João Omizolo",
    products: ["CARTÃO", "CARTÃO C/ SAQUE", "NOVO", "MARGEM AUMENTO"],
    whatsapp: "11967003274",
  },
  {
    avatar: `${avatarBasePath}/luiz-ilmar.webp`,
    name: "Consultor Luiz Ilmar",
    products: [
      "CARTÃO",
      "CARTÃO C/ SAQUE",
      "NOVO",
      "SAQUE ANIVERSARIO",
      "MARGEM AUMENTO",
    ],
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
