import React, { useRef, useState } from "react";
import BacktoHome from "../blueprints/buttonsAuth/backToHome/BacktoHome";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import styles from "./Contacto.module.css";
import { Box } from "@mui/system";
import { Button, Paper, Typography, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
const Contacto = () => {
  const [submit, setSubmit] = useState(false);
  const SERVICE_ID = "service_oaksvac";
  const TEMPLATE_ID = "template_trfjcil";
  const PUBLIC_KEY = "O7jgSb2G6PiunQMKB";
  const [result, setResult] = useState(false);
  const navigateTo = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setSubmit(true);
    setTimeout(() => setSubmit(false), 3000);
    e.target.reset();
  };

  return (
    <Box
      bgcolor="#D5DBDB"
      padding="5rem"
      height="100%"
      minHeight="100vh"
      fontFamily={"Sen"}
      sx={{ backgroundAttachment: "fixed", backgroundSize: "cover" }}
    >
      {submit ? <Alert severity="success">Se envió con exito!</Alert> : <></>}
      <Box>
  
         <BacktoHome />
  
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h1"
          color="#1E8449"
          fontFamily={"Sen"}
          align="center"
          fontWeight="bold"
          fontSize="5rem"
        >
          Contacto
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          bgcolor="white"
          width="40rem"
          maxWidth="100%"
          height="30rem"
          borderRadius="2rem"
        >
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <Box
              display="flex"
              justifyContent="center"
              width="20rem"
              margin="0 auto"
            >
              <TextField
                required
                fullWidth
                name="name"
                label="Nombre"
                margin="normal"
              ></TextField>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              width="20rem"
              margin="0 auto"
            >
              <TextField
                fullWidth
                name="user_email"
                label="Email"
                margin="normal"
                required
              ></TextField>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              width="20rem"
              margin="0 auto"
            >
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Mensaje"
                multiline
                rows={4}
                margin="normal"
                required
              />
            </Box>
            <Box height="3rem" display="flex" justifyContent="center">
              <Button
                
                type="submit"
                size="large"
                variant="contained"
                color="success"
                endIcon={<SendIcon />}
              >
                Enviar
              </Button>
            </Box>
            <Box></Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacto;
