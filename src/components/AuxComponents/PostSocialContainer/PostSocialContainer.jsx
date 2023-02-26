//estilos
import styles from "./postSocialContainer.module.css";
//hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, cleanPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";
// dependencias mui
import { Box, Card, Skeleton } from "@mui/material";

const PostSocialContainer = () => {
  const token = localStorage.getItem("token");
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllPost());
    return () => dispatch(cleanPost());
  }, [dispatch])
  
  // useEffect(() => {
  //   dispatch(getAllPost());
  // }, [dispatch, posts]);

  return (
    <Box display="flex" flexDirection="column" gap="15px" alignItems="center" width="90%">
      {posts.length ?
        posts.map((post) => {
          return <CardPost post={post} key={post.id} />;
        }) :
        <>
          {
            Array(5).fill().map((_, i) => {
              return (
                <Card key={i} sx={{ padding: 1, width: 620, marginBottom: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", marginTop: 2, marginLeft: 3 }}>
                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    <Skeleton animation="wave" height={20} width="30%" sx={{ marginLeft: 2 }} />
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Skeleton variant="rounded" width={550} height={60} sx={{ marginTop: 3, marginBottom: 3 }} />
                  </Box>
                </Card>
              )
            })
          }
        </>
      }
    </Box>
  );
};

export default PostSocialContainer;
