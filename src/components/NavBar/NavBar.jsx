//estilos
import style from "./NavBar.module.css";
//hooks
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsersByName } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "./../../redux/action";
//componentes
import logo from "../../Media/logo-03.png";
import SearchExpandedUser from "../AuxComponents/SeachExpandedUser/SearchExpandedUser";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(false);
  const [notiExpanded, setNotiExpanded] = useState(false);

  const usersByName = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getUsersByName(search));
    navigate("/users");
  };

  const handlerChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(getUsersByName(value));
    setSearch(value);
  };

  const handlerNotifications = () => {
    setNotiExpanded(!notiExpanded);
  };

  useEffect(() => {
    usersByName.results?.length == 0 ? setData(true) : setData(false);
  }, [usersByName]);

  return (
    <div className={style.container}>
      <nav className={style.navContainer}>
        <div className={style.logoContainer}>
          <Link to={"/"}>
            <img src={logo} alt="loguito" />
          </Link>
        </div>
        <div className={style.searchContainer}>
          <i className="fa-sharp fa-solid fa-magnifying-glass fa-lm" />
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={search}
              onChange={handlerChange}
              placeholder="Buscar en codeCuak"
            />
          </form>
          <div
            className={search ? style.searchExpanded : style.searchNotExpanded}
          >
            {usersByName.results
              ? usersByName.results.map((user) => {
                  return (
                    <SearchExpandedUser
                      key={user.id}
                      image={user.image}
                      name={user.name}
                    />
                  );
                })
              : null}
            {data ? (
              <p style={{ color: "white", "font-size": "15px" }}>
                No se encontro el usuario
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={style.ulContainer}>
          <ul>
            <li>
              <Link to={"/social"}>SocialCuak</Link>
            </li>
            <li>
              <Link to={"/work"}>WorkCuak</Link>
            </li>
            <li>
              <Link to={"/qanda"}>Q&A-Cuak</Link>
            </li>
            <li>
              <Link to={"/hiring"}>HiringCuak</Link>
            </li>
          </ul>
        </div>
        <div className={style.iconsContainer}>
          <button onClick={handlerNotifications}>
            <i className="fa-sharp fa-solid fa-layer-group fa-xl" />
          </button>
          <Link to={"/user"}>
            <i className="fa-sharp fa-solid fa-circle-user fa-xl" />
          </Link>
        </div>
        <div
          className={notiExpanded ? style.notiExpanded : style.notiNotExpanded}
        >
          <div className={style.notiContainer}>
            <div className={style.notiHeader}>
              <h2>Notificaciones</h2>
            </div>
            <div className={style.notifications}>
              <div>
                <h3>Notificacion</h3>
              </div>
              <div>
                <h3>Notificacion</h3>
              </div>
              <div>
                <h3>Notificacion</h3>
              </div>
              <div>
                <h3>Notificacion</h3>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
