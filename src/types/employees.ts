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
    avatar: `${avatarBasePath}/AT06.webp`,
    genre: 'F',
    name: "Consultora Tuani Dib",
    products: ["SIAPE","CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO", "PORTABILIDADE", "REFINANCIAMENTO"],
    whatsapp: "4797670085",
  },
  {
    avatar: `${avatarBasePath}/AT07.webp`,
    name: "Consultor Yuri Gustavo",
    genre: 'F',
    products: ["PORTABILIDADE", "REFINANCIAMENTO", "CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "4797670085",
  },
  {
    avatar: `${avatarBasePath}/AT09.webp`,
    name: "Consultor Tainã D Avila",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "4797670085"
  },
  {
    avatar: `${avatarBasePath}/AT10.webp`,
    name: "Consultor Jonathan Caixão",
    genre: 'M',
    products: ["CARTÃO CONSIGNADO", "CARTÃO BENEFICIO", "CREDITO NOVO"],
    whatsapp: "4797670085"
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
