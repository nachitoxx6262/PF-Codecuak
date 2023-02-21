//estilos
import styles from "./CardPost.module.css";
//hooks
import { useState } from "react";
//componentes
import AddComent from "../AddComent/AddComent";
import ComentContainer from "../ComentContainer/ComentContainer";
import { Avatar, Box, Button, Typography, } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const CardPost = ({ post, userData }) => {
  // datos del posteo
  const { content, socialcomments, likes, userdevId, id } = post;
  //datos del usuario que hizo el posteo
  const { name, image } = post.userdev

  const [likeState, setStateLike] = useState(false);
  const [like, setLike] = useState(likes);
  const [viewComents, setViewComents] = useState(false);

  const handlerClick = () => {
    if (likeState == true) {
      setLike(like - 1)
    }
    else {
      setLike(like + 1)
    }
    setStateLike(!likeState)
  }

  const handlerComment = () => {
    setViewComents(!viewComents)
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        width="48%"
        alignItems="center"
        bgcolor="#f2f2f2"
        borderRadius="10px"
        padding="1em"
        boxShadow="3"
      >
        <Box display="flex" flexDirection="row" gap="15px" alignSelf="start" marginBottom="10px">
          <Avatar src={image} alt="Foto de perfil" />
          <Typography fontFamily="sen" variant="h6" color="black">{name}</Typography>
        </Box>
        <Box width="90%">
          <Typography fontFamily="Sen" variant="body1" color="black" fontSize="1.1em">{content}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" alignSelf="end" marginRight="3.2em" gap="10px">
          <Button onClick={() => handlerClick()} sx={{ color: "#1E8449" }}> {likeState ? <FavoriteIcon /> : <FavoriteBorderIcon />} <Typography variant="body1">{like}</Typography></Button>
          <Button onClick={() => {handlerComment()}}>Comentar</Button>
        </Box>
        {
          viewComents ? 
          <ComentContainer socialcomments={socialcomments} image={image} userdevId={userdevId} postId={id} /> : null
        }
      </Box>
    </>
  );
};

export default CardPost;
