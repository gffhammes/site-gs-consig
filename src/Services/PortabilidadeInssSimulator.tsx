"use client";

import { Box, Button, Container } from "@mui/material";
import { Form, Formik } from "formik";
import { CurrencyInput } from "../common/form/CurrencyInput";
import { FormikDatePicker } from "../common/form/FormikDatePicker";

export interface IPortabilidadeInssSimulatorProps {}

export const PortabilidadeInssSimulator = (
  props: IPortabilidadeInssSimulatorProps
) => {
  return (
    <Container>
      <Formik<IPortabilidadeInssSimulatorValues>
        initialValues={{ valorParcela: "", valorTotal: "", vencimento: null }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form id="simulador">
          <CurrencyInput name="valorParcela" label="Valor da parcela" />
          <FormikDatePicker name="vencimento" label="Vencimento" />
          <CurrencyInput name="valorTotal" label="Valor total" />
        </Form>
      </Formik>

      <Box>
        <Button type="submit" form="simulador">
          teste
        </Button>
      </Box>
    </Container>
  );
};

export interface IPortabilidadeInssSimulatorValues {
  valorParcela: string;
  valorTotal: string;
  vencimento: Date | null;
}
