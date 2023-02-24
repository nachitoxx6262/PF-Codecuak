import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import ButtonsDonaciones from "./ButtonsDonaciones";
import styles from "./Donaciones.module.css";
import BacktoHome from "../buttonsAuth/backToHome/BacktoHome";
import { sendMP } from "../../../axiosFunctions";

const Donaciones = () => {
  const donaciones = [
    {
      unit_price: 500,
      quantity: 1,
    },
    {
      unit_price: 1000,
      quantity: 1,
    },
    {
      unit_price: 2000,
      quantity: 1,
    },
    {
      unit_price: 3000,
      quantity: 1,
    },
  ];
  const [input, setInput] = useState({
    unit_price: 0,
    quantity: 1,
  });
  const handleValor = (e) => {
    setInput({ ...input, unit_price: Number(e.target.value) });
  };
  const onClickHandler = () => {
    sendMP(input);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#D5DBDB"
      minWidth="100%"
      // height="100%"
      minHeight="100vh"
      // padding="5rem"
      padding={{ xs: "1rem", sm: "2rem 5rem" }}
    >
      <Box marginTop="0">
        <BacktoHome />
      </Box>
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          marginTop="1.5rem"
        >
          <Typography
            variant="h1"
            fontFamily={"Sen"}
            // fontSize="5rem"
            fontSize={{ xs: "3rem", sm: "5rem" }}
            color="#1E8449"
            // sx={{ textShadow: " 1px 1px 2px grey" }}
            sx={{ textShadow: " 1px 1px 2px grey" }}
          >
            ¡Hola a todos los amantes de la programación!
          </Typography>
        </Box>
      </Grid>
      <Box className={styles.codetext}>
        <Typography variant="h5" fontFamily={"Sen"}>
          Somos un grupo de ocho programadores independientes, apasionados por
          nuestro trabajo y comprometidos con ofrecer una plataforma para
          programadores. Sabemos que hay muchas redes sociales disponibles, pero
          ninguna de ellas se enfoca en la comunidad de programadores y nos
          gustaría llenar ese vacío. Estamos trabajando arduamente en nuestro
          proyecto y queremos solicitar su ayuda para hacerlo realidad.
        </Typography>
        <br />
        <Typography variant="h5" fontFamily={"Sen"}>
          Nuestra plataforma tendrá como objetivo conectar programadores de todo
          el mundo, brindándoles un espacio donde puedan compartir sus ideas,
          proyectos, códigos y problemas. Además, también herramientas y
          recursos para ayudar a los programadores a mejorar sus habilidades.
          Sabemos que hay muchas personas apasionadas por la programación, pero
          no todos tienen acceso a una comunidad en línea para compartir sus
          conocimientos y aprender de otros, y es por eso que queremos crear una
          plataforma accesible para todos.
        </Typography>
        <br />
        <Typography variant="h5" fontFamily={"Sen"}>
          Estamos pidiendo donaciones para ayudarnos a financiar el desarrollo
          de nuestra plataforma y hacerla una realidad. Cualquier cantidad es
          bienvenida, y estamos comprometidos a utilizar todos los recursos para
          mejorar y expandir nuestra plataforma. Si usted es un amante de la
          programación o simplemente quiere apoyar nuestra causa, por favor
          considere hacer una donación. ¡Juntos podemos construir una comunidad
          de programadores más fuerte y conectada!
        </Typography>
      </Box>

      <Box
        height="10rem"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        {donaciones.map((donacion) => {
          return <ButtonsDonaciones donacion={donacion} />;
        })}
      </Box>
      <Box
        height="10rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          id="outlined-number"
          variant="filled"
          label="ARS$"
          color="success"
          inputProps={{ inputMode: "numeric", pattern: "[1-9]*" }}
          onChange={handleValor}
          autoComplete="off"
        />
        {input.unit_price < 1 ? (
          <Button
            variant="outlined"
            color="success"
            disabled={true}
            style={{ width: 150, height: 60, fontSize: 20, margin: 10 }}
            onClick={onClickHandler}
          >
            Doná
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="success"
            style={{ width: 150, height: 60, fontSize: 20, margin: 10 }}
            onClick={onClickHandler}
          >
            Doná
          </Button>
        )}
      </Box>
      <Box display="flex" alignContent="center" justifyContent="center">
        <Typography
          variant="h4"
          fontFamily={"Sen"}
          color="#1E8449"
          sx={{ textShadow: " 1px 1px 2px grey" }}
        >
          Muchas Gracias {">_c"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Donaciones;
