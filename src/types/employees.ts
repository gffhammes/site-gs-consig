export const employees: IEmployee[] = [
  {
    avatar: "https://picsum.photos/1001",
    name: "João Vitor Silva",
    product: "portabilidade inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "João Vitor Silva",
    product: "crédito novo inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "João Vitor Silva",
    product: "portabilidade inss",
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
