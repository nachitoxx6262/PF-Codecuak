import React from "react";
import { useState } from "react";
import { Button,Box} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [text,setText]=useState("Log In")
  const handleClick=()=>{
   loginWithRedirect()
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