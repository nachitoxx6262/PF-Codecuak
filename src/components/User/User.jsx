//importo Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserById } from "../../redux/action";
//Importo componentes react
import NavBar from "../NavBar/NavBar";
import UserProfile from "../blueprints/UserProfile/UserProfile";

const User = () => {
  const userData = useSelector((state)=> state.userData);
  return (
    <div>
      <NavBar />
      {/* userProfile renderiza los datos de un usuario especifico, en este caso el que inicio sesion. */}
      <UserProfile userData={userData}/>
    </div>
  )
}

export default User