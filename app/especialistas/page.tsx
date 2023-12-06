import { EmployeesFilterAndList } from "@/src/EmployeesPage/EmployeesFilterAndList";
import { Stack } from "@mui/material";

export default function Especialistas() {
  return (
    <Stack gap={{ xs: 2, md: 2 }} sx={{ pt: 4, pb: 16 }}>
      <EmployeesFilterAndList />
    </Stack>
  );
}
