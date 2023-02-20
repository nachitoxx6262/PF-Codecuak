import React from 'react'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button"

const BacktoHome = () => {
  return (
    <div >
        <Link to="/" style={{"textDecoration":"none"}}>
        <Button color="success" variant="outlined" sx={{fontWeight:"bold"}}>Volver al Home</Button>
        </Link>
      </div>
  )
}

export default BacktoHome

