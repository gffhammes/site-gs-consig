import { Box, Drawer, IconButton, Stack } from "@mui/material";
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

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        sx={{ zIndex: 10000 }}
        PaperProps={{ sx: { width: "15rem" } }}
      >
        <Stack
          alignItems="flex-end"
          gap={3}
          sx={{ px: { xs: 2, sm: 3 }, pt: 1 }}
        >
          <IconButton onClick={handleClose} aria-label="close navigation menu">
            <CloseIcon />
          </IconButton>

          <Box width="100%">
            <NavigationMenu onClick={handleClose} />
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};
