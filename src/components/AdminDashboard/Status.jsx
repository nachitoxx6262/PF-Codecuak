import React, { useState } from 'react'
import { Box,Typography,Button } from '@mui/material';
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { changeStatus } from '../../redux/action';

const Status = (params) => {
    const token  = localStorage.getItem("token")
    const {id,status} = params.params.row
    const [adStatus,setadStatus] = useState(status)
    const handleClick=()=>{
         if(adStatus== "dev"){
             setadStatus("admin")
             changeStatus(id,token,"admin")
         }if(adStatus== "admin"){
             setadStatus("dev")
             changeStatus(id,token,"dev")
         }
    }
    return (
        <Box
          width="60%"
          height="80%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          borderRadius="4px"
        >
            <Button onClick={handleClick} width="100%"  height="100%" sx={{backgroundColor: "#7dcea0"}}>
          {adStatus == "superadmin" && <AdminPanelSettingsOutlinedIcon />}
          {adStatus == "admin" && <SecurityOutlinedIcon />}
          {adStatus == "dev" && <AccountCircleIcon />}
            {adStatus}
            </Button>
        </Box>
      );
}

export default Status