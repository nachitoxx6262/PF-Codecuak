// importamos estilos
import style from "./social.module.css";
//importamos hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//importamos actions
import { cleanPost, getUserById } from "../../redux/action";
//importamos componentes
import NavBar from '../NavBar/NavBar';
import FormSocialPost from "../AuxComponents/FormSocialPost/FormSocialPost";
import PostSocialContainer from "../AuxComponents/PostSocialContainer/PostSocialContainer";
// import MATERIAL UI
import { Box } from "@mui/material"

const Social = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id")

  useEffect(()=>{
    dispatch(getUserById(token, id))
  },[dispatch])

  useEffect(()=>{
    return()=>{dispatch(cleanPost())}
  },[dispatch])

  useEffect(()=>{

  })
 
  return (
    <>
   
      <Box bgcolor="#D5DBDB" display="flex" flexDirection="column" alignItems="center">
        <NavBar />
        <FormSocialPost user={user} />
        <PostSocialContainer />
        </Box>
    </>
  )
}

export default Social