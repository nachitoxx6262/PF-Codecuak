//estilos
import styles from "./postUserContainer.module.css";
//hooks
import { useEffect, useState } from "react"; ``
import { useDispatch, useSelector } from "react-redux";
//actions
import { cleanPost } from "../../../redux/action";
//componentes
import CardPost from "../../blueprints/Social-UserPost/CardPost/CardPost";
// dependencias mui
import { Box, Card, Skeleton } from "@mui/material";
import { getPostsByUserId } from "../../../redux/action";
import { useParams } from "react-router-dom";

const PostUserContainer = () => {

  const dispatch = useDispatch();

  // se verifica si hay un id en params (userDetail)
  // para saber si se renderizan los posteos del
  // usuario que inicio sesion, o los de algun usuario X
  const { id } = useParams()
  const detailId = id;
  const userId = localStorage.getItem("id")
  const idUtil = detailId ? detailId : userId;

  const {name, image, count, next, arrayPosts} = useSelector(state=>state.posts)
  const [getPost, setGetPost] = useState(true);
  const [page, setPage] = useState(0);

  //--------Realiza petición de posts al cargar el componente---  --
  useEffect(() => {
    dispatch(getPostsByUserId(idUtil, page + 1));
    setPage(page + 1);
    return () => dispatch(cleanPost());
  }, [dispatch, id])

  //Seteo el estado local getPost en true al actualizar el estado global "posts", para que se pueda realizar nuevas peticiones

  useEffect(() => {
    setGetPost(true)
  }, [arrayPosts])

  //-------- Coloca handlerScroll al montar componente y lo retira al desmontar------- 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  // Hace Dispatch al llegar al final de la pagina y cumplir las condiciones
  function handleScroll() {
    if (next && getPost && ((window.innerHeight + window.scrollY + 1) >= document.documentElement.scrollHeight)) {
      setGetPost(false);
      dispatch(getPostsByUserId(idUtil, page + 1))
      setPage(page + 1)
    }
  };


  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop="15px" gap="10px" width={1}>
      {
        count !== null ?
          <>
            {arrayPosts?.map((post) => {
              return <CardPost post={post} user={{ name, image }} />;
            })}
          </> :

          //---skeletons---
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

export default PostUserContainer;
