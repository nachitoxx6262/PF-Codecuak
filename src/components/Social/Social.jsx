// importamos estilos
import style from "./social.module.css";

//importamos hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//importamos actions
import { cleanPost, getUserById } from "../../redux/action";
//importamos componentes
import NavBar from "../NavBar/NavBar";
import FormSocialPost from "../AuxComponents/FormSocialPost/FormSocialPost";
import PostSocialContainer from "../AuxComponents/PostSocialContainer/PostSocialContainer";
// import MATERIAL UI
import NoTokenFooter from "../NavBar/NotTokenComponents/NoTokenFooter";
import { Box } from "@mui/material";

const Social = () => {
  const navigateTo = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);

  //LOGIN DE GOOGLE NO FUNCIIONA SI LO PONGO EN OTRA PARTE
  const urlParams = new URLSearchParams(window.location.search);
  const userg = JSON.parse(decodeURIComponent(urlParams.get("user")));
  if (userg) {
    localStorage.setItem("token", userg.token);
    localStorage.setItem("id", userg.id);
    navigateTo("/social")
  }
  ///----------------------------------------------///
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id")

  useEffect(() => {
    dispatch(getUserById(token, id));
    window.scrollTo(0,0);
    return () => { dispatch(cleanPost()) }
  }, [])

  return (
    <>
      <Box bgcolor="#D5DBDB" display="flex" flexDirection="column" alignItems="center">
        <NavBar />
        <FormSocialPost user={user} />
        <PostSocialContainer />
        {!token ? <NoTokenFooter /> : null}
      </Box>
    </>
  );
};

export default Social;
