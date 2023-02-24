import React, { useState } from "react";
import { sendMP } from "../../../axiosFunctions";
import { Avatar, Box, Button, Typography } from "@mui/material";
const ButtonsDonaciones = ({ donacion }) => {

  const onClickHandler = () => {
    sendMP(donacion);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button
        variant="outlined"
        color="success"
        style={{ width: 150, height: 60, fontSize: 20, margin: 10 }}
        onClick={onClickHandler}
      >
        ARS ${donacion.unit_price}
      </Button>
    </Box>
  );
};

export default ButtonsDonaciones;
