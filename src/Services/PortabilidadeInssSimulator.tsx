"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikErrors } from "formik";
import { CurrencyInput } from "../common/form/CurrencyInput";
import { FormikDatePicker } from "../common/form/FormikDatePicker";
import dayjs from "dayjs";
import {
  MAIN_WHATSAPP,
  generateWhatsappLink,
  getFormattedCurrency,
} from "../utils/helpers";

export interface IPortabilidadeInssSimulatorProps {}

export const PortabilidadeInssSimulator = () => {
  const sendSimulationMessage = (values: IPortabilidadeInssSimulatorValues) => {
    const message = `Olá, vim pelo site e gostaria de fazer uma simulação de portabilidade INSS! 

    O valor atual do meu empréstimo é de *${getFormattedCurrency(
      values.valorTotal
    )}*.

    O valor das minhas parcelas é de *${getFormattedCurrency(
      values.valorParcela
    )}*.

    O vencimento é em *${values.vencimento?.toLocaleDateString("pt-BR")}*
    `;

    const whatsappLink = generateWhatsappLink(MAIN_WHATSAPP, message);

    window.open(whatsappLink, "_blank");
  };

  const validate = (values: IPortabilidadeInssSimulatorValues) => {
    const errors: FormikErrors<IPortabilidadeInssSimulatorValues> = {};

    if (values.vencimento === null) {
      errors.vencimento = "Campo obrigatório";
    }

    if (values.valorParcela === "") {
      errors.valorParcela = "Campo obrigatório";
    }

    if (values.valorTotal === "") {
      errors.valorTotal = "Campo obrigatório";
    }

    return errors;
  };

  return (
    <Container
      maxWidth="md"
      disableGutters
      id="simulador"
      sx={{
        pt: { xs: 0, sm: 8 },
        pb: 8,
      }}
    >
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
                validate={validate}
                onSubmit={(values) => {
                  sendSimulationMessage(values);
                }}
                validateOnBlur={false}
                validateOnChange={false}
              >
                <Form id="simulador" noValidate>
                  <Stack gap={2}>
                    <CurrencyInput
                      name="valorParcela"
                      label="Valor da parcela"
                      required
                    />
                    <FormikDatePicker
                      name="vencimento"
                      label="Vencimento"
                      required
                      minDate={dayjs()}
                    />
                    <CurrencyInput
                      name="valorTotal"
                      label="Valor total"
                      required
                    />
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
