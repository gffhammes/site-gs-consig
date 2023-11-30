import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton } from "@mui/material";

export interface IWhatsAppFloatingButtonProps {}

export const WhatsAppFloatingButton = (props: IWhatsAppFloatingButtonProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        borderRadius: 100,
        backgroundColor: "#0CC144",
        color: "white",
      }}
    >
      <IconButton
        sx={{
          height: 80,
          width: 80,
          fontSize: 40,
        }}
        color="inherit"
      >
        <WhatsAppIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};
