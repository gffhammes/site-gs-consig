import { BaseTextFieldProps, TextField } from "@mui/material";
import { useField } from "formik";

export interface IFormikTextFieldProps extends BaseTextFieldProps {
  name: string;
}

export const FormikTextField = ({ name, ...props }: IFormikTextFieldProps) => {
  const [input, meta] = useField({ name });

  return (
    <TextField
      {...props}
      {...input}
      name={name}
      variant="outlined"
      error={!!meta.error}
      helperText={meta.error}
    />
  );
};
