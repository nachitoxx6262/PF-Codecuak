//estilos
import styles from "./postSocialContainer.module.css";
//hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, cleanPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";
// dependencias mui
import {Box} from "@mui/material";

const PostSocialContainer = () => {

  const posts = useSelector((state) => state.posts);
  const userData = useSelector((state)=>state.userData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch,posts]);
  
  useEffect(()=>{
    dispatch(getAllPost());
    return () => dispatch(cleanPost());
  },[dispatch])

  return (
    <Box display="flex" flexDirection="column" gap="15px" alignItems="center">
      {posts.map((post) => {
        return <CardPost post={post} key={post.id}/>;
      })}
    </Box>
  );
};

export default PostSocialContainer;
