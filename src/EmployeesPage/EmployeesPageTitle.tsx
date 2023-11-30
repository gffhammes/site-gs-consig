import { Container, Typography } from "@mui/material";

export interface IEmployeesPageTitleProps {}

export const EmployeesPageTitle = () => {
  return (
    <Container>
      <Typography variant="h1" color="primary">
        Especialistas prontos para te atender
      </Typography>
    </Container>
  );
};
