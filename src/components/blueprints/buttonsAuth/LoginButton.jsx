import React from "react";
import { useState } from "react";
import { Button,Box} from "@mui/material";
const LoginButton = () => {
  const [text,setText]=useState("Log In")
  const handleClick=()=>{
   text== "Log In" ? setText("Proximamente") : setText("Log In")
  }

  return (
    <>
    <Box width="10rem">
      <Button  color="success" variant="contained" sx={{fontWeight:"bold"}} onClick={handleClick}>{text}</Button>
    </Box>
    </>
  )
};

export default LoginButton;