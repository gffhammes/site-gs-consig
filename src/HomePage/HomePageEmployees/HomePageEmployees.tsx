"use client";

import { CustomCarousel } from "@/src/common/CustomCarousel/CustomCarousel";
import { EmployeeCard, IEmployee } from "@/src/common/Employee/EmployeeCard";
import { Box, Container, Stack, Typography } from "@mui/material";

export interface IHomePageEmployeesProps {}

export const HomePageEmployees = () => {
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

          <CustomCarousel
            dataSet={employees}
            slideGap={2}
            alignSlides="center"
            getSlide={(employee) => (
              <EmployeeCard
                avatar={employee.avatar}
                name={employee.name}
                product={employee.product}
                whatsapp={employee.whatsapp}
              />
            )}
          />
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
