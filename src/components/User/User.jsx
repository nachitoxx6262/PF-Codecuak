//importo Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserById } from "../../redux/action";
import { useNavigate } from "react-router-dom";
//Importo componentes react
import NavBar from "../NavBar/NavBar";
import UserProfile from "../blueprints/UserProfile/UserProfile";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (token) {
      dispatch(getUserById(token, id));
    } else {
      navigate("/social");
      alert("¡Por favor inicie sesión para ver el perfil!");
    }
  }, [dispatch, token]);

  return (
    <div>
      {token ? (
        <div>
          <NavBar />
          {/* userProfile renderiza los datos de un usuario especifico, en este caso el que inicio sesion. */}
          <UserProfile user={userData} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default User;
