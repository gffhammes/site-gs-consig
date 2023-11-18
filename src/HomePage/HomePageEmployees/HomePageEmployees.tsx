import { EmployeeCard, IEmployee } from "@/src/common/Employee/EmployeeCard";
import { Box, Container, Stack, Typography } from "@mui/material";

export interface IHomePageEmployeesProps {}

export const HomePageEmployees = (props: IHomePageEmployeesProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={8}>
          <Typography variant="h2" color="primary" textAlign="center">
            Especialistas
            <br />
            <strong>
              prontos para te
              <br />
              atender
            </strong>
          </Typography>

          <Stack
            direction="row"
            gap={2}
            width="100%"
            overflow="hidden"
            justifyContent={{ xs: "flex-start", md: "center" }}
          >
            {employees.map((employee, index) => (
              <EmployeeCard
                key={index}
                avatar={employee.avatar}
                name={employee.name}
                product={employee.product}
                whatsapp={employee.whatsapp}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const employees: IEmployee[] = [
  {
    avatar: "https://picsum.photos/1001",
    name: "João Vitor Silva",
    product: "portabilidade inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "João Vitor Silva",
    product: "portabilidade inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "João Vitor Silva",
    product: "portabilidade inss",
    whatsapp: "",
  },
];
