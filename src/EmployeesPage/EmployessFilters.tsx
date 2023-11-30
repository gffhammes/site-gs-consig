import { Chip, Container, Stack } from "@mui/material";
import { allEmployeesAvailableProducts } from "../types/employees";
import { IEmployeesFilter } from "./EmployeesFilterAndList";
import { CustomCarousel } from "../common/CustomCarousel/CustomCarousel";
import { EmployeesPageSearchBox } from "./EmployeesPageSearchBox";

export interface IEmployessFiltersProps {
  filters: IEmployeesFilter;
  handleFilterChange: (newValue: Partial<IEmployeesFilter>) => void;
}

export const EmployessFilters = ({
  filters,
  handleFilterChange,
}: IEmployessFiltersProps) => {
  return (
    <Stack gap={1}>
      <Container>
        <EmployeesPageSearchBox
          value={filters.search}
          handleChange={(newValue) => {
            handleFilterChange({
              search: newValue,
            });
          }}
        />
      </Container>

      <CustomCarousel
        options={{ dragFree: true }}
        dataSet={allEmployeesAvailableProducts}
        getSlide={(product, index) => {
          const isSelected = filters.products.includes(product);

          const isFirstSlide = index === 0;
          const isLastSlide =
            index === allEmployeesAvailableProducts.length - 1;

          return (
            <Chip
              key={product}
              label={product.toUpperCase()}
              variant={isSelected ? "filled" : "outlined"}
              onClick={() => {
                handleFilterChange({
                  products: [product],
                });
              }}
              sx={{ ml: isFirstSlide ? 2 : 0.5, mr: isLastSlide ? 2 : 0 }}
              onDelete={
                isSelected
                  ? () => {
                      handleFilterChange({
                        products: [],
                      });
                    }
                  : undefined
              }
            />
          );
        }}
      />
    </Stack>
  );
};
