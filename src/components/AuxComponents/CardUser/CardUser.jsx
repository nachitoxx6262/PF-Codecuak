//estilos css
import style from "./CardUser.module.css"
// dependencias MUI
import { Box, Avatar, Typography } from "@mui/material"

const Card=({ userData })=>{
    return(
       
        <Box className={style.container}>
            <Box className={style.containerImg}>
                <Avatar src={userData.image} alt="foto del usuario" sx={{width:160, height:160}} variant="rounded" />
            </Box>
            <Box className={style.containerData}>
                <Box className={style.name}>
                    <Typography variant="h5" fontFamily={"Sen"}>{`${userData.name}`}</Typography>
                    <Typography variant="h5 " fontFamily={"Sen"}>{` (${userData.nickName})`}</Typography>
                </Box>
                <Box className={style.contacts}>
                  <Typography variant="h7" fontFamily={"Sen"}>{userData.email}</Typography>
                  <Typography variant="h7" fontFamily={"Sen"}>{`GitHub: ${userData.gitHub}`}</Typography>
                </Box>
            </Box>

        </Box>
       
    )

}

export default Card