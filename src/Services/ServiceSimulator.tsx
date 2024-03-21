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
    <Box sx={{ backgroundColor: "#363636" }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          sx={{ py: 8 }}
        >
          <Typography
            variant="h2"
            color="white"
            fontSize={48}
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

  return (
    <Container
      maxWidth="md"
      disableGutters
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
              width: "20rem",
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
      </Box>
    </Container>
  );
};

export interface IServiceSimulatorValues {
  nome: string;
  cpf: string;
  contato: string;
}
