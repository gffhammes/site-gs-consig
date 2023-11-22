import { Backdrop, Box, IconButton, Stack } from "@mui/material";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { NavigationMenu } from "./NavigationMenu";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

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
        <IconButton color="primary" onClick={handleOpen}>
          <MenuIcon />
        </IconButton>

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
          <Stack alignItems="flex-end" gap={3} sx={{ p: 2 }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>

            <Box width="100%">
              <NavigationMenu onClick={handleClose} />
            </Box>
          </Stack>
        </Box>
      </>
    );
  }
);
