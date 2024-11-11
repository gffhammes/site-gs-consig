import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";

export interface ICustomCheckboxProps {
  name: string;
  label: string;
}

export const CustomCheckbox = ({ name, label }: ICustomCheckboxProps) => {
  const [input, meta] = useField({ name });

  return (
    <FormControl error={!!meta.error}>
      <FormControlLabel
        control={<Checkbox />}
        label={label}
        required
        {...input}
      />

      {meta.error && (
        <FormHelperText sx={{ m: 0 }}>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};
