import { Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export interface IEmployeesPageSearchBoxProps {
  value: string;
  handleChange: (newValue: string) => void;
}

export const EmployeesPageSearchBox = ({
  value,
  handleChange,
}: IEmployeesPageSearchBoxProps) => {
  return (
    <TextField
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      id="search"
      placeholder="Pesquisar"
      size="small"
      sx={{
        minWidth: "10rem",
      }}
      fullWidth
      inputProps={{
        sx: {
          py: 0.75,
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
  );
};
