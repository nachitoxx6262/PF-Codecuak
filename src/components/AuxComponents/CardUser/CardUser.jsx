//estilos css
import style from "./CardUser.module.css"
// dependencias MUI
import { Box, Avatar, Typography, Skeleton } from "@mui/material"

const CardUser=({ user })=>{
    return(
        <Box className={style.container}>
            {user.name?
                <>
                <Box className={style.containerImg}>
                    <Avatar src={user.image} alt="foto del usuario" sx={{width:170, height:170}} variant="rounded"/>
                </Box>
                <Box className={style.containerData}>
                    <Box className={style.name}>
                        <Typography variant="h5" fontFamily={"Sen"}>{`${user.name}`}</Typography>
                        <Typography variant="h5 " fontFamily={"Sen"}>{` (${user.nickName})`}</Typography>
                    </Box>
                    <Box className={style.contacts}>
                        <Typography variant="h7" fontFamily={"Sen"}>{user.email}</Typography>
                        <Typography variant="h7" fontFamily={"Sen"}>{`GitHub: ${user.gitHub}`}</Typography>
                    </Box>
                </Box> 
                </> : 
                    <>
                        <Box className={style.containerImg}>
                            <Avatar src={user.image} alt="foto del usuario" sx={{width:170, height:170}} variant="rounded"/>
                        </Box>
                        <Box className={style.containerData}>
                            <Box className={style.name}>
                                <Skeleton animation="wave" height={30} width={200}/>
                                <Skeleton animation="wave" height={20} width={100}/>
                            </Box>
                            <Box className={style.contacts}>
                                <Skeleton animation="wave" height={15} width={200}/>
                                <Skeleton animation="wave" height={15} width={200}/>
                            </Box>
                        </Box> 
                    </>   
            }    
        </Box> 
    )

}

export default CardUser