import { Box, Container, Typography } from "@mui/material";
import { EmployeeCard } from "../../common/Employee/EmployeeCard";
import { IEmployee } from "../../types/employees";

export interface IEmployeesListProps {
  employees: IEmployee[];
}

export const EmployeesList = ({ employees }: IEmployeesListProps) => {
  if (employees.length === 0) {
    return (
      <Container maxWidth={false} sx={{ width: "fit-content", mt: 4 }}>
        <Typography>Nenhum resultado encontrado</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
        gap={4}
      >
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            avatar={employee.avatar}
            name={employee.name}
            genre={employee.genre}
            products={employee.products}
            whatsapp={employee.whatsapp}
          />
        ))}
      </Box>
    </Container>
  );
};
