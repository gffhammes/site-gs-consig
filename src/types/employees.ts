export const employees: IEmployee[] = [
  {
    avatar: "https://picsum.photos/1001",
    name: "João Vitor Silva",
    product: "portabilidade inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "Antônio Nunes",
    product: "crédito novo inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "Drauzio Varella",
    product: "portabilidade inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "Vitor Gomes",
    product: "consignado inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "Vitor Gomes",
    product: "cartão consignado inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "Vitor Gomes",
    product: "cartão benefício inss",
    whatsapp: "",
  },
];

export const allEmployeesAvailableProducts: string[] = [];

employees.forEach((employee) => {
  if (!allEmployeesAvailableProducts.includes(employee.product)) {
    allEmployeesAvailableProducts.push(employee.product);
  }
});

export interface IEmployee {
  avatar: string;
  name: string;
  product: string;
  whatsapp: string;
}
