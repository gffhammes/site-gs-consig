"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useField } from "formik";

export interface IFormikDatePickerProps {
  name: string;
  label: string;
}

export const FormikDatePicker = ({ label, name }: IFormikDatePickerProps) => {
  const [input, , helpers] = useField({ name });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={input.value}
        onChange={(value) => helpers.setValue(value.$d)}
        label={label}
        format="DD/MM/YYYY"
      />
    </LocalizationProvider>
  );
};
