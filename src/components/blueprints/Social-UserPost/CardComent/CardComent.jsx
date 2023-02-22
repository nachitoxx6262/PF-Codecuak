//estilos
import styles from "./CardComent.module.css"
//hooks
import { useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CardComent = ({ comment, userData }) => {

    const [like, setStatuslike] = useState(false);

    const handlerClick = () => {
        setStatuslike(!like)
    }
    return (
        <Box display="flex"
            flexDirection="column"
            bgcolor="#f2f2f2"
            borderRadius="10px"
            padding="1em"
            boxShadow="5"
            width="100%"
            gap="10px"
            >

            <Box display="flex" gap="15px" alignItems="center">
                <Avatar src={userData.image} alt="Foto de usuario" sx={{ width: "30px", height: "30px" }} />
                <Typography variant="body1" fontFamily="Sen">{userData.name}</Typography>
            </Box>
            <Box marginLeft="1.1em">
                <Typography variant="body2">{comment.content}</Typography>
            </Box>
            <Box >
                <Button onClick={() => handlerClick()} sx={{ color: "#1E8449" }}> {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}</Button>
            </Box>
        </Box>
    )
}

export default CardComent;