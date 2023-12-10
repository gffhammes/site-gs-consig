"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { CurrencyInput } from "../common/form/CurrencyInput";
import { FormikDatePicker } from "../common/form/FormikDatePicker";

export interface IPortabilidadeInssSimulatorProps {}

export const PortabilidadeInssSimulator = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderRadius: { xs: 0, md: 8 },
          py: { xs: 8, sm: 0 },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={{ xs: 8, md: 16 }}
          mx={4}
        >
          <Stack>
            <Typography color="white" variant="h2">
              Preencha o formulário
              <br /> e{" "}
              <strong>
                {" "}
                faça uma simulaçao
                <br /> sem compromisso
              </strong>
            </Typography>
          </Stack>

          <Paper
            elevation={5}
            sx={{
              borderRadius: 2,
              mt: { xs: 0, sm: -8 },
              mb: { xs: -16, sm: -8 },
              width: "fit-content",
            }}
          >
            <Stack gap={2} sx={{ p: 4 }}>
              <Formik<IPortabilidadeInssSimulatorValues>
                initialValues={{
                  valorParcela: "",
                  valorTotal: "",
                  vencimento: null,
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form id="simulador">
                  <Stack gap={2}>
                    <CurrencyInput
                      name="valorParcela"
                      label="Valor da parcela"
                    />
                    <FormikDatePicker name="vencimento" label="Vencimento" />
                    <CurrencyInput name="valorTotal" label="Valor total" />
                  </Stack>
                </Form>
              </Formik>

              <Box>
                <Button
                  type="submit"
                  form="simulador"
                  variant="contained"
                  fullWidth
                >
                  Simular
                </Button>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export interface IPortabilidadeInssSimulatorValues {
  valorParcela: string;
  valorTotal: string;
  vencimento: Date | null;
}
