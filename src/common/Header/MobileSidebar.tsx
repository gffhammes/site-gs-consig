import { Backdrop, Box } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface IMobileSidebarProps {}

export interface IMobileSidebarRef {
  handleOpen: () => void;
}

export const MobileSidebar = forwardRef<IMobileSidebarRef, IMobileSidebarProps>(
  (props, ref) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useImperativeHandle(ref, () => ({ handleOpen }), []);

    return (
      <>
        <Backdrop
          open={open}
          sx={{ zIndex: 9999 }}
          onClickCapture={handleClose}
        />

        <Box
          sx={{
            position: "fixed",
            height: "100%",
            width: "15rem",
            backgroundColor: "white",
            top: 0,
            right: 0,
            zIndex: 10000,
            transform: `translateX(${open ? "0" : "100%"})`,
            transition: ".3s ease all",
          }}
        >
          MobileSidebar
        </Box>
      </>
    );
  }
);
