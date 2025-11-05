import { Box, Chip, Container, Stack } from "@mui/material";
import { allEmployeesAvailableProducts } from "../../types/employees";
import { IEmployeesFilter } from "./EmployeesFilterAndList";
import { CustomCarousel } from "../../common/CustomCarousel/CustomCarousel";
import { EmployeesPageSearchBox } from "./EmployeesPageSearchBox";
import { useBreakpoint } from "../../hooks/useBreakpoint";

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

      <Box>
        <CustomCarousel
          options={{
            skipSnaps: true,
            align: "start",
          }}
          carouselSx={{ mx: { xs: 2, sm: 0 } }}
          slideGap={1}
          dataSet={allEmployeesAvailableProducts}
          getSlide={(product) => {
            const isSelected = filters.products.includes(product);

            return (
              <Box>
                <Chip
                  label={product.toUpperCase()}
                  size="small"
                  variant="outlined"
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
          sx={{
            alignItems: "flex-start",
          }}
        />
      </Box>
    </Stack>
  );
};
