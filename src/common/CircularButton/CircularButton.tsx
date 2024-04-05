import { Button, ButtonProps } from "@mui/material";

export interface ICircularButtonProps extends ButtonProps {}

export const CircularButton = (props: ICircularButtonProps) => {
  return <Button {...props} sx={{ borderRadius: 999 }} />;
};
