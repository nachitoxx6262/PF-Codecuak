import React from "react";
//importo Hooks
import { useSelector } from "react-redux";
//Importo componentes react
import CardUser from "../AuxComponents/CardUser/CardUser";
import NavBar from "../NavBar/NavBar";
import PostUserContainer from "../AuxComponents/PostUserContainer/PostUserContainer";
import UserProfile from "../blueprints/UserProfile/UserProfile";
//Importo estilos
import styles from "./User.module.css";

const User = () => {

  const userData = useSelector((state)=> state.userData);
  return (
    <div>
      <NavBar />
      <UserProfile userData={userData}/>
    </div>
  )
}

export default User