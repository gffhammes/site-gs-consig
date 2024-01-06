import { Box, Chip, Container, Stack } from "@mui/material";
import { allEmployeesAvailableProducts } from "../types/employees";
import { IEmployeesFilter } from "./EmployeesFilterAndList";
import { CustomCarousel } from "../common/CustomCarousel/CustomCarousel";
import { EmployeesPageSearchBox } from "./EmployeesPageSearchBox";
import { useBreakpoint } from "../hooks/useBreakpoint";

export interface IEmployessFiltersProps {
  filters: IEmployeesFilter;
  handleFilterChange: (newValue: Partial<IEmployeesFilter>) => void;
}

export const EmployessFilters = ({
  filters,
  handleFilterChange,
}: IEmployessFiltersProps) => {
  const { sm } = useBreakpoint();

  return (
    <Stack gap={1} width="100%" overflow="hidden">
      <Container disableGutters={sm}>
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
        options={{
          skipSnaps: true,
          align: 0,
        }}
        carouselSx={{ mx: { xs: 2, sm: 0 } }}
        slideGap={1}
        dataSet={allEmployeesAvailableProducts}
        getSlide={(product, index) => {
          const isSelected = filters.products.includes(product);

          const isFirstSlide = index === 0;
          const isLastSlide =
            index === allEmployeesAvailableProducts.length - 1;

          return (
            <Box
            // sx={{
            //   ml: isFirstSlide ? { xs: 2, sm: 3 } : 0.5,
            //   mr: isLastSlide ? { xs: 2, sm: 3 } : 0,
            // }}
            >
              <Chip
                label={product.toUpperCase()}
                size="small"
                variant="outlined"
                // variant={isSelected ? "filled" : "outlined"}
                color={isSelected ? "primary" : "default"}
                onClick={() => {
                  handleFilterChange({
                    products: isSelected ? [] : [product],
                  });
                }}
              />
            </Box>
          );
        }}
      />
    </Stack>
  );
};
