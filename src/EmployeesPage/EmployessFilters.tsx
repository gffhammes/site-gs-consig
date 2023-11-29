"use client";

import { Chip, Container, Stack, TextField } from "@mui/material";
import { allEmployeesAvailableProducts } from "../types/employees";
import SearchIcon from "@mui/icons-material/Search";
import { IEmployeesFilter } from "@/app/especialistas/page";

export interface IEmployessFiltersProps {
  filters: IEmployeesFilter;
  handleFilterChange: (newValue: Partial<IEmployeesFilter>) => void;
}

export const EmployessFilters = ({
  filters,
  handleFilterChange,
}: IEmployessFiltersProps) => {
  return (
    <Container sx={{ pr: "0 !important" }}>
      <Stack gap={1} direction="row" sx={{ width: "100%", overflow: "hidden" }}>
        <TextField
          value={filters.search}
          onChange={(e) => {
            handleFilterChange({
              search: e.target.value,
            });
          }}
          placeholder="Pesquisar"
          size="small"
          sx={{
            minWidth: "10rem",
          }}
          inputProps={{
            sx: {
              py: 0.5,
            },
          }}
          InputProps={{
            sx: { borderRadius: 100 },

            startAdornment: (
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{ color: "#a5a5a5", pr: 1 }}
              >
                <SearchIcon color="inherit" fontSize="small" />
              </Stack>
            ),
          }}
        />

        {allEmployeesAvailableProducts.map((product) => (
          <Chip
            key={product}
            label={product.toUpperCase()}
            variant={filters.products.includes(product) ? "filled" : "outlined"}
            color={filters.products.includes(product) ? "primary" : "default"}
            onClick={() => {
              handleFilterChange({
                products: [product],
              });
            }}
            sx={
              {
                //   color: "#a5a5a5",
              }
            }
          />
        ))}
      </Stack>
    </Container>
  );
};
