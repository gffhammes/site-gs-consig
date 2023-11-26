import { Chip, Container, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { EmployeeCard, IEmployee } from "@/src/common/Employee/EmployeeCard";

export const employees: IEmployee[] = [
  {
    avatar: "https://picsum.photos/1001",
    name: "João Vitor Silva",
    product: "portabilidade inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "João Vitor Silva",
    product: "crédito novo inss",
    whatsapp: "",
  },
  {
    avatar: "",
    name: "João Vitor Silva",
    product: "portabilidade inss",
    whatsapp: "",
  },
];

const allAvailableProducts: string[] = [];

employees.forEach((employee) => {
  if (!allAvailableProducts.includes(employee.product)) {
    allAvailableProducts.push(employee.product);
  }
});

export default function Especialistas() {
  return (
    <Stack gap={2}>
      <Container>
        <Typography variant="h1" color="primary">
          Especialistas prontos para te atender
        </Typography>
      </Container>

      <Stack
        gap={1}
        direction="row"
        sx={{ pl: 2, width: "100%", overflow: "hidden" }}
      >
        <TextField
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

        {allAvailableProducts.map((product) => (
          <Chip
            key={product}
            label={product.toUpperCase()}
            variant="outlined"
            sx={{
              color: "#a5a5a5",
            }}
          />
        ))}
      </Stack>

      <Container>
        <Stack gap={2}>
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              avatar={employee.avatar}
              name={employee.name}
              product={employee.product}
              whatsapp={employee.whatsapp}
            />
          ))}
        </Stack>
      </Container>
    </Stack>
  );
}
