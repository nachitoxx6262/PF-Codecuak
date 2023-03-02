import React from 'react'
import { Link} from "react-router-dom";
import {
    Paper,
    Button,
    Box,
    Typography,
  } from "@mui/material";

const NoTokenFooter = () => {
  return (
    <Paper  
      elevation={4}
      style={{
        backgroundColor:"#dce3e0",
        position: 'fixed',
        bottom: 20,
        left: 0,
        right: 0,
        margin:"auto",
        height: "12rem",
        width: '70%',
        padding: '20px',
        zIndex: "100"
      }}  >
        <Typography variant="h5" fontSize="35px" display="flex" justifyContent="center" textAlign="center" fontFamily={"Sen"} fontWeight="bold">
          Hemos notado que no tienes una sesion iniciada.<br/> Navega de manera tranquila
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="1.5rem" gap="5rem">
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
          fontFamily={"Sen"}
            color="success"
            variant="contained"
            sx={{ fontWeight: "bold", width: "18rem" }}
            margin="auto"
          >
            Registrarse
          </Button>
        </Link> 
        <Link to="/login" style={{ textDecoration: "none" }}>
        <Button
        margin="auto"
        fontFamily={"Sen"}
            color="success"
            variant="contained"
            sx={{ fontWeight: "bold", width: "18rem" }}
          >
            Iniciar Sesion
          </Button>
        </Link>
        </Box>
      </Paper>
  )
}

export default NoTokenFooter