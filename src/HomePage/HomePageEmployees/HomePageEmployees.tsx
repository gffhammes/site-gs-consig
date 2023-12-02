"use client";

import { CustomCarousel } from "@/src/common/CustomCarousel/CustomCarousel";
import { EmployeeCard } from "@/src/common/Employee/EmployeeCard";
import { useBreakpoint } from "@/src/hooks/useBreakpoint";
import { employees } from "@/src/types/employees";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

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

        <Container disableGutters={!md} maxWidth="md">
          <CustomCarousel
            showDots
            dataSet={employees}
            options={{
              align: md ? "start" : "center",
              dragFree: md ? true : false,
              skipSnaps: true,
              slidesToScroll: "auto",
            }}
            slideGap={2}
            getSlide={(employee, index) => (
              <EmployeeCard
                avatar={employee.avatar}
                name={employee.name}
                products={employee.products}
                whatsapp={employee.whatsapp}
                paperSx={{
                  flexBasis: {
                    xs: "21rem",
                    md: "calc(50% - 8px)",
                  },
                  flexShrink: 0,
                  marginLeft: index === 0 ? { xs: 2, sm: 3, md: 0 } : 0,
                  marginRight:
                    index === employees.length - 1
                      ? { xs: 2, sm: 3, md: 0 }
                      : 0,
                }}
              />
            )}
          />
        </Container>

        <Container maxWidth={false} sx={{ mx: "auto", width: "fit-content" }}>
          <Button variant="outlined" LinkComponent={Link} href="/especialistas">
            Ver todos
          </Button>
        </Container>
      </Stack>
    </Box>
  );
};
