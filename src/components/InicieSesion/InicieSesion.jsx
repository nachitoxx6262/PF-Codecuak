import React from 'react'
import LoginButton from '../blueprints/buttonsAuth/LoginButton'
import styles from "./InicieSesion.module.css"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
const InicieSesion = () => {
  return (
    <Box className={styles.codetext}>
      <LoginButton></LoginButton>
    </Box>

 
  )
}

export default InicieSesion