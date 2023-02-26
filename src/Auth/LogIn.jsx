import { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { FormControl, Box, TextField, Button, Typography } from '@mui/material'
import { Link, useNavigate } from "react-router-dom"
import { userLogin } from "../axiosFunctions"
import { useDispatch } from 'react-redux'
import { getUserById } from '../redux/action'
import { googleLogin } from '../axiosFunctions';
const LogIn = () => {

  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: '', password: '' })

  const navigate = useNavigate();


  const handleSubmit = async () => {
    try {
      const response = await userLogin(user.email, user.password)
      localStorage.setItem("token", response.token)
      localStorage.setItem("id", response.user.id)
      navigate("/social")
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [property]: value,
    });
  }
  return (
    <Box padding="5rem">
      <Link to="/" style={{textDecoration:"none"}}>
        <Button color="success" variant="outlined" sx={{fontWeight:"bold"}}>Volver al home</Button>
      </Link>
      <Typography variant='h2' align='center' fontFamily="Sen" color="#1E8449" marginBottom="40px">LOG IN</Typography>
      <FormControl
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}
      >
        <TextField
          required
          sx={{ color: "black",width:"18rem" }}
          size="small"
          label="Email"
          value={user.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          sx={{ color: "black",width:"18rem" }}
          size="small"
          label={"Contraseña"}
          value={user.password}
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
        ></TextField>
       
        <Button color="success" variant="outlined" sx={{fontWeight:"bold",width:"18rem"}} onClick={googleLogin}>
          <GoogleIcon  />Iniciar Sesion con Google
</Button>
        <Link to="/register" style={{textDecoration:"none"}}>
          <Button color="success" variant="outlined" sx={{fontWeight:"bold",width:"18rem"}}>Registrarse</Button>
        </Link>
        <Box marginTop="20px">
          <Button
          sx={{width:"18rem"}}
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

  )
}

export default LogIn