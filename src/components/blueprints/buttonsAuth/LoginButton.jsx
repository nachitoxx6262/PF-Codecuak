import React from "react";
import { Button,Box} from "@mui/material";
import {Link} from "react-router-dom"
const LoginButton = () => {
  return (
    <Box>
      <Link to="/login">
      <Button  color="success" variant="contained" sx={{fontWeight:"bold"}}>Log In</Button>
      </Link>
    </Box>
  )
};

export default LoginButton;