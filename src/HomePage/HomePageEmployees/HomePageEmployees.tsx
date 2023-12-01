"use client";

import { CustomCarousel } from "@/src/common/CustomCarousel/CustomCarousel";
import { EmployeeCard } from "@/src/common/Employee/EmployeeCard";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import { employees } from "@/src/types/employees";
import { Box, Container, Stack, Typography } from "@mui/material";

export interface IHomePageEmployeesProps {}

export const HomePageEmployees = () => {
  const { md } = useBreakpoint();

  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 16 }}>
      <Stack gap={8}>
        <Container>
          <Typography variant="h2" color="primary" textAlign="center">
            Especialistas
            <br />
            <strong>
              prontos para te
              <br />
              atender
            </strong>
          </Typography>
        </Container>

        <Container disableGutters>
          <CustomCarousel
            dataSet={employees}
            options={{
              align: md ? "start" : "center",
              dragFree: md ? true : false,
              skipSnaps: true,
              slidesToScroll: "auto", /// md ? 3 : 1,
            }}
            slideGap={2}
            carouselSx={{ pl: 2 }}
            getSlide={(employee, index) => (
              <EmployeeCard
                avatar={employee.avatar}
                name={employee.name}
                products={employee.products}
                whatsapp={employee.whatsapp}
                paperSx={{
                  flexBasis: "16rem",
                  flexShrink: 0,
                  marginRight: index === employees.length - 1 ? "1rem" : 0,
                }}
              />
            )}
          />
        </Container>
      </Stack>
    </Box>
  );
};
