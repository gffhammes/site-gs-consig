"use client";

import { useMemo, useState } from "react";
import { EmployeesList } from "./EmployeesList";
import { EmployessFilters } from "./EmployessFilters";
import { IEmployee, employees } from "../types/employees";
import { toNormalForm } from "../utils/helpers";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useBreakpoint } from "../hooks/useBreakpoint";

export interface IEmployeesFilterAndListProps {}

export interface IEmployeesFilter {
  search: string;
  products: string[];
}

export const EmployeesFilterAndList = () => {
  const { sm } = useBreakpoint();

  const [filters, setFilters] = useState<IEmployeesFilter>({
    search: "",
    products: [],
  });

  const handleFilterChange = (newValue: Partial<IEmployeesFilter>) => {
    setFilters((currentFilters) => ({ ...currentFilters, ...newValue }));
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const normalizedSearch = toNormalForm(filters.search);

      let passSearchFilter = false;

      for (const property in employee) {
        const propertyString = employee[property as keyof IEmployee];

        if (typeof propertyString === "string") {
          const normalizedProperty = toNormalForm(propertyString);

          if (normalizedProperty.includes(normalizedSearch)) {
            passSearchFilter = true;
          }
        }
      }

      let passProductsFilter = false;

      if (filters.products.length > 0) {
        employee.products.forEach((product) => {
          if (filters.products.includes(product)) {
            passProductsFilter = true;

            return true;
          }
        });
      } else {
        passProductsFilter = true;
      }

      if (normalizedSearch !== "") {
        if (filters.products.length > 0) {
          return passSearchFilter || passProductsFilter;
        }

        return passSearchFilter;
      }

      return passSearchFilter && passProductsFilter;
    });
  }, [filters.products, filters.search]);

  return (
    <Stack gap={4}>
      <Container disableGutters={!sm} maxWidth="md">
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
          alignItems="center"
          width="100%"
          overflow="hidden"
          gap={2}
        >
          <Container disableGutters={sm}>
            <Typography variant="h1" color="primary">
              Especialistas prontos para te atender
            </Typography>
          </Container>

          <EmployessFilters
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </Box>
      </Container>

      <EmployeesList employees={filteredEmployees} />
    </Stack>
  );
};
