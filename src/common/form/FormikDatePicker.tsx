"use client";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { useField } from "formik";

export interface IFormikDatePickerProps {
  name: string;
  label: string;
}

export const FormikDatePicker = ({ label, name }: IFormikDatePickerProps) => {
  const [input, meta, helpers] = useField({ name });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          value={input.value}
          onChange={(value) => helpers.setValue(value.$d)}
          label={label}
          format="DD/MM/YYYY"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
