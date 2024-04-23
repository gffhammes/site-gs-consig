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
import { MAIN_WHATSAPP, generateWhatsappLink } from "../utils/helpers";
import { FormikTextField } from "../common/form/FormikTextField";
import { CPFInput } from "../common/form/CPFInput";
import { PhoneInput } from "../common/form/PhoneInput";

export interface IServiceSimulatorProps {
  product: string;
}

export const ServiceSimulator = ({ product }: IServiceSimulatorProps) => {
  const sendSimulationMessage = (values: IServiceSimulatorValues) => {
    const message = `Olá, vim pelo site e gostaria de fazer uma simulação de ${product}! 

    Meu nome é *${values.nome}*.

    ${values.cpf !== "" ? `Meu CPF é *${values.cpf}*.` : ""}

    ${values.contato !== "" ? `Meu contato é *${values.contato}*.` : ""}
    `;

    const whatsappLink = generateWhatsappLink(MAIN_WHATSAPP, message);

    window.open(whatsappLink, "_blank");
  };

  const validate = (values: IServiceSimulatorValues) => {
    const errors: FormikErrors<IServiceSimulatorValues> = {};

    if (values.nome === "") {
      errors.nome = "Campo obrigatório";
    }

    return errors;
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(/imagem-1.webp)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          sx={{ py: 8 }}
        >
          <Typography
            variant="h2"
            color="white"
            fontSize={{ xs: 32, md: 48 }}
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              "& > strong": {
                color: "primary.main",
              },
            }}
          >
            Preencha o formulário
            <br /> e faça uma{" "}
            <strong>
              simulaçao
              <br /> sem compromisso
            </strong>
          </Typography>

          <Paper
            elevation={5}
            sx={{
              borderRadius: 8,
              width: "30rem",
              maxWidth: "100%",
            }}
          >
            <Stack gap={2} sx={{ p: 4 }}>
              <Formik<IServiceSimulatorValues>
                initialValues={{
                  nome: "",
                  cpf: "",
                  contato: "",
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
                    <FormikTextField name="nome" label="Seu nome" required />

                    <CPFInput name="cpf" label="Seu CPF" />

                    <PhoneInput name="contato" label="Seu telefone (com DDD)" />
                  </Stack>
                </Form>
              </Formik>

              <Typography variant="caption">
                Não armazenamos nenhum dado
              </Typography>

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
      </Container>
    </Box>
  );
};

export interface IServiceSimulatorValues {
  nome: string;
  cpf: string;
  contato: string;
}
