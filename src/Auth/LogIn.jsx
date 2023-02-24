import {useState} from 'react'

import { FormControl,Box,TextField,Button, Typography } from '@mui/material'
import {Link, useNavigate} from "react-router-dom"
import {userLogin} from "../axiosFunctions"
const LogIn = () => {
  const navigate = useNavigate()
    const [user,setUser]= useState({email: '',password:''})
    const handleSubmit =async()=>{
      try{
        const response = await userLogin(user)
        localStorage.setItem("token",response.data.token)
        navigate("/social")
      }catch{
        console.log("error en login")
      }

    }
    const handleChange =(e)=>{
    console.log("handelchange")
    const property = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [property]: value,
    });
    }
  return (
    <Box >
      <Link to="/">
      <Button>Volver al home</Button>
      </Link>
      <Typography variant='h2' align='center' fontFamily="Sen" color="#1E8449">LOG IN</Typography>
         <FormControl
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem",alignItems:"center" }}
          >
            <TextField
              required
              sx={{ color: "black" }}
              label="Email"
              value={user.email}
              name="email"
              placeholder="Email"
              onChange={handleChange}
            ></TextField>
            <TextField
              required
              sx={{ color: "black" }}
              size="small"
              label={"Contraseña"}
              value={user.password}
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleChange}
            ></TextField>
            <Link to="/register">
            <Typography>Registrar</Typography>
            </Link>
            <Box marginTop="20px">
              <Button
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