// importamos estilos
import style from "./social.module.css";
//importamos hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//importamos actions
import { getUserById } from "../../redux/action";
//importamos componentes
import NavBar from '../NavBar/NavBar';
import FormSocialPost from "../AuxComponents/FormSocialPost/FormSocialPost";
import PostSocialContainer from "../AuxComponents/PostSocialContainer/PostSocialContainer";
// import MATERIAL UI
import { Box } from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react";
const Social = () => {
  const { isAuthenticated } = useAuth0()
  const user = useSelector(state => state.userData)
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const token = localStorage.getItem("token");

  // cuando se monta el componente fetcheamos el usuario de la persona que inicio sesion 
  // para luego utilizarlo en las cards de los posts y pagina de perfil
  useEffect(() => {
    // dispatch(fetchUser) hardcodeado hasta tener inicio de sesion
<<<<<<< HEAD
    dispatch(getUserById(token));
=======
    dispatch(getUserById("f3e9fb53-d49a-45ad-8276-8ad97ba76c59"));
>>>>>>> b20a88a8db96a93482266089c1330ff82ab9dde2
  }, [dispatch])
  return (
    <>
<<<<<<< HEAD
   <Box bgcolor="#D5DBDB" display="flex" flexDirection="column" alignItems="center">
    <NavBar /><FormSocialPost user={user}/>
    <PostSocialContainer /></Box>
=======
      {
        isAuthenticated ?
          <Box
            bgcolor="#D5DBDB"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >

            <NavBar />
            <FormSocialPost user={user} />
            <PostSocialContainer />

          </Box>
          : loginWithRedirect()
      }
>>>>>>> b20a88a8db96a93482266089c1330ff82ab9dde2
    </>
  )
}

export default Social