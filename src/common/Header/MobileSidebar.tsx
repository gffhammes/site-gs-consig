import { Backdrop, Box, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { NavigationMenu } from "./NavigationMenu";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export interface IMobileSidebarProps {}

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleOpen}
        aria-label="open navigation menu"
      >
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
          <IconButton onClick={handleClose} aria-label="close navigation menu">
            <CloseIcon />
          </IconButton>

          <Box width="100%">
            <NavigationMenu onClick={handleClose} />
          </Box>
        </Stack>
      </Box>
    </>
  );
};
