import React,{useState} from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link} from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {

  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
 
  Box,
  
  Avatar,
  
  IconButton,
} from "@mui/material";

const NotTokenMenu = () => {
    const [open, setOpen] = useState(false);
  const theme = useTheme();
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IconButton onClick={handleClickOpen} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp"  />
      </IconButton>
      <Dialog
        fullWidth
        PaperProps={{
          style: { height: 230, backgroundColor: "#1E8449" },
        }}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          fontSize={30}
          margin="auto"
          color="#ffffff"
          fontFamily={"Sen"}
        >
          {"¿Quieres ingresar a tu perfil?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            fontSize={25}
            color="#ffffff"
            display="flex"
            justifyContent="center"
            fontFamily={"Sen"}
          >
            Inicia sesion para poder navegar por codeCuak
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ justifyContent: "center", marginBottom: "25px" }}
        >
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button
              onClick={handleClose}
              variant="contained"
              autoFocus
              style={{
                gap: "10px",
                height: "3rem",
                fontSize: "18px",
                fontFamily: "Sen",
                fontWeight: "bold",
                backgroundColor: "#ffffff",
                color: "#383838",
              }}
            >
              <LoginIcon style={{ marginBottom: "1px" }} />
              Iniciar Sesion
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NotTokenMenu;
