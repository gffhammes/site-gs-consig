"use client";

import { employees } from "@/app/especialistas/page";
import { CustomCarousel } from "@/src/common/CustomCarousel/CustomCarousel";
import { EmployeeCard } from "@/src/common/Employee/EmployeeCard";
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
                paperSx={{
                  flexBasis: "16rem",
                  flexShrink: 0,
                }}
              />
            )}
          />
        </Stack>
      </Container>
    </Box>
  );
};
