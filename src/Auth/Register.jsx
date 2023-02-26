import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { validations } from "./validations"
import { FormControl, Box, TextField, Button, Typography, FormHelperText } from '@mui/material'
// FUNCION REGISTER POST
import { userRegister } from "../axiosFunctions"

const Register = () => {
  // ESTADOS LOCALES
  const [user, setUser] = useState({ name: '', email: '', nickName: '', password: '' })
  const [backError, setBackError] = useState("");
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await userRegister(user.name,user.email,user.nickName,user.password)
      localStorage.setItem("token", response.data.token)
    } catch (error) {
      setBackError(error.message)
    }
  }

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (!touched) {
      setTouched(true);
    }
    setErrors(validations({ ...user, [property]: value }))
    setUser({
      ...user,
      [property]: value,
    });
  }

  return (
    backError ? <Typography>{backError}</Typography> :
      <Box  padding="5rem">
        <Link to="/" style={{textDecoration:"none"}}>
          <Button color="success" variant="outlined" sx={{fontWeight:"bold"}}>Volver al home</Button>
        </Link>
        <Typography variant='h2' align='center' fontFamily="Sen" color="#1E8449" marginBottom="20px">Register</Typography>
        <FormControl
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}
        >
          <TextField
          size="small"
            required
            sx={{ color: "black" }}
            label="Nombre y Apellido"
            value={user.name}
            name="name"
            placeholder="Nombre y Apellido"
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name}
          ></TextField>

          <TextField
            required
            sx={{ color: "black" }}
            size="small"
            label={"Email"}
            value={user.email}
            name="email"
            type="text"
            placeholder="ejemplo@hotmail.com"
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email}
          ></TextField>
          <TextField
            required
            sx={{ color: "black" }}
            size="small"
            label={"Nombre de usuario"}
            value={user.nickName}
            name="nickName"
            type="text"
            placeholder="nombre de usuario"
            onChange={handleChange}
            error={errors.nickName}
            helperText={errors.nickName}
          ></TextField>
          <TextField
            required
            sx={{ color: "black" }}
            size="small"
            label={"Contraseña"}
            value={user.password}
            name="password"
            type="password"
            placeholder="contraseña"
            onChange={handleChange}
            error={errors.password}
            helperText={errors.password}
          ></TextField>
          <Link to="/login" style={{textDecoration:"none"}}>
            <Button  color="success" variant="outlined" sx={{fontWeight:"bold",width:"14rem"}}>Log In</Button>
          </Link>
          <Box marginTop="20px">
            <Button
            sx={{fontWeight:"bold",width:"14rem"}}
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

export default Register