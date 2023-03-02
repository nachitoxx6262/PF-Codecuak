import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import {
  FormControl,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";

const Google = () => {
  return (
    <>
      <Link
        to="https://backend-production-c946.up.railway.app/auth/google"
        style={{ textDecoration: "none" }}
      >
        <Button
          color="success"
          variant="outlined"
          sx={{ fontWeight: "bold", width: "18rem" }}
        >
          <GoogleIcon />
          Iniciar Sesion con Google
        </Button>
      </Link>
    </>
  );
};

export default Google;
