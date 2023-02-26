//estilos
import styles from "./CardPost.module.css";
//hooks
import { useState } from "react";

//auxiliares
import AddComent from "../AddComent/AddComent";
import { Avatar, Box, Button, Typography, } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//componentes
import ComentContainer from "../ComentContainer/ComentContainer";
import LongMenu from "../../LongMenu/LongMenu";


const CardPost = ({post}) => {
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
        alignItems="center"
        width="48%"
        bgcolor="#f2f2f2"
        borderRadius="10px"
        padding="1em"
        boxShadow="3"
        gap="15px"
      >
        <Box display="flex" flexDirection="row" alignItems="start" width={1}>
          <Box display="flex" gap="15px" alignItems="center" flexGrow={1}>
            <Avatar src={image} alt="Foto de perfil" />
            <Typography fontFamily="sen" variant="h6" color="black">{name}</Typography>
          </Box>
          {/* {userdevId === userId ? <LongMenu post={post}/> : null} */}
          <LongMenu post={post}/>
        </Box>
        <Box width="90%" >
          <Typography fontFamily="Sen" variant="body1" color="black" fontSize="1.1em">{content}</Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" alignSelf="start" marginLeft="20px" gap="10px">
          <Button onClick={() => handlerClick()} sx={{ color: "#1E8449" }}> {likeState ? <FavoriteIcon /> : <FavoriteBorderIcon />}</Button>
          <Button onClick={() => { handlerComment() }} color="success">Comentar</Button>
        </Box>
        {
          viewComents ?
            <ComentContainer socialcomments={socialcomments} image={image} userdevId={userdevId} postId={id} userId={userId}/> : null
        }
      </Box>
    </>
  );
};

export default CardPost;
