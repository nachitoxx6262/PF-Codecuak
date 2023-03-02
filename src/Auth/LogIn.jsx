import { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import {
  FormControl,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../axiosFunctions";
import { useDispatch } from "react-redux";
import Google from "./google"
const LogIn = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: "", password: "" });
  const [backError, setBackError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await userLogin(user.email, user.password);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.user?.id);
      if (response?.status === 200) {
        setSuccess("Inicio de sesion exitoso");
        setTimeout(() => {
          navigate("/social");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setBackError("Algunos de los datos es incorrecto");
      setTimeout(() => {
        setBackError("");
      }, 3000);
    }
  };


  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [property]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("token", "")
    localStorage.setItem("id", "")
  }, [])


  return (
    <Box padding="5rem">
      <Link to="/" style={{  textDecoration:  "none"  }}>
        <Button color="success" variant="outlined" sx={{  fontWeight:  "bold"  }}>
          Volver al home
        </Button>
      </Link>

      <Typography
        variant="h2"
        align="center"
        fontFamily="Sen"
        color="#1E8449"
        marginBottom="40px"
      >
        LOG IN
      </Typography>
      {success && (
        <Alert
          severity="success"
          sx={{ width: "15%", margin: "auto", marginBottom: "2rem" }}
        >
          {success}
        </Alert>
      )}
      {backError && (
        <Alert
          severity="error"
          sx={{ width: "15%", margin: "auto", marginBottom: "2rem" }}
        >
          {backError}
        </Alert>
      )}
      <FormControl
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <TextField
          required
          sx={{ color: "black", width: "18rem" }}
          size="small"
          label="Email"
          value={user.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          sx={{ color: "black",  width:  "18rem" }}
          size="small"
          label={"Contraseña"}
          value={user.password}
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
        ></TextField>
        {/* <Link
          to="http://localhost:3001/auth/google"
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
        </Link> */}
        <Google></Google>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            color="success"
            variant="outlined"
            sx={{ fontWeight: "bold", width: "18rem" }}
          >
            Registrarse
          </Button>
        </Link>
        <Box marginTop="20px">
          <Button
              sx={{  width:  "18rem"  }}
            variant="contained"
            color="success"
            type="submit"
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default LogIn;
