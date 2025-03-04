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
    whatsapp: "8000065065",
  },
  {
    avatar: `${avatarBasePath}/AT02.webp`,
    name: "Consultora Virgínia Gratão",
    genre: 'F',
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "8000065065",
  },
  {
    avatar: `${avatarBasePath}/AT04.webp`,
    name: "Consultora Alexandra Oliveira",
    genre: 'F',
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "8000065065"
  },
  {
    avatar: `${avatarBasePath}/AT09.webp`,
    name: "Consultor Tainã D Avila",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "8000065065"
  },
  {
    avatar: `${avatarBasePath}/AT10.webp`,
    name: "Consultor Jonathan Caixão",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "8000065065"
  },
  {
    avatar: `${avatarBasePath}/AT14.webp`,
    name: "Consultor Lucian Oliveira",
    genre: 'M',
    products: ["PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "8000065065"
  }
];

export const allEmployeesAvailableProducts: string[] = [];

employees.forEach((employee) => {
  employee.products.forEach((product) => {
    if (!allEmployeesAvailableProducts.includes(product)) {
      allEmployeesAvailableProducts.push(product);
    }
  });
});
