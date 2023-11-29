"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { EmployeeCard } from "@/src/common/Employee/EmployeeCard";
import { IEmployee, employees } from "@/src/types/employees";
import { EmployessFilters } from "@/src/EmployeesPage/EmployessFilters";
import { useMemo, useState } from "react";
import { toNormalForm } from "@/src/utils/helpers";

export interface IEmployeesFilter {
  search: string;
  products: string[];
}

export default function Especialistas() {
  const [filters, setFilters] = useState<IEmployeesFilter>({
    search: "",
    products: [],
  });

  const handleFilterChange = (newValue: Partial<IEmployeesFilter>) => {
    setFilters((currentFilters) => ({ ...currentFilters, ...newValue }));
  };

  const filteredEmployess = useMemo(() => {
    return employees.filter((employee) => {
      const normalizedSearch = toNormalForm(filters.search);

      let passSearchFilter = false;

      for (const property in employee) {
        const normalizedProperty = toNormalForm(
          employee[property as keyof IEmployee]
        );

        if (normalizedProperty.includes(normalizedSearch)) {
          passSearchFilter = true;
        }
      }

      let passProductsFilter = true;

      if (filters.products.length > 0) {
        passProductsFilter = filters.products.includes(employee.product);
      }

      return passSearchFilter && passProductsFilter;
    });
  }, [filters.products, filters.search]);

  return (
    <Stack gap={2}>
      <Container>
        <Typography variant="h1" color="primary">
          Especialistas prontos para te atender
        </Typography>
      </Container>

      <EmployessFilters
        filters={filters}
        handleFilterChange={handleFilterChange}
      />

      <Container>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
          gap={2}
        >
          {filteredEmployess.map((employee, index) => (
            <EmployeeCard
              key={index}
              avatar={employee.avatar}
              name={employee.name}
              product={employee.product}
              whatsapp={employee.whatsapp}
            />
          ))}
        </Box>
      </Container>
    </Stack>
  );
}
