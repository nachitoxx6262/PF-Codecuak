import React from "react";
import { useState } from "react";
import { Button,Box} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom"
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [text,setText]=useState("Log In")
  const handleClick=()=>{
   loginWithRedirect()
  }
  return (
    <>
    <Box width="10rem">
      <Link to="/login">
      <Button  color="success" variant="contained" sx={{fontWeight:"bold"}}>{text}</Button>
      </Link>
    </Box>
    </>
  )
};

export default LoginButton;