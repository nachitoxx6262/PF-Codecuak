//estilos
import React from "react";
import style from "./NavBar.module.css";
//hooks
import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { getUsersByName } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";

//componentes
import logo from "../../Media/logo-03.png";
import SearchExpandedUser from "../AuxComponents/SeachExpandedUser/SearchExpandedUser";
// import MATERIAL UI
import {
  AppBar,
  Box,
  MenuItem,
  Typography,
  Tooltip,
  Avatar,
  Menu,
  IconButton,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const NavBar = () => {
  const settings = [
    { name: "Perfil", link: "/user" },
    { name: "Cuenta", link: "" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector(state => state.userData)
  const navigate = useNavigate();
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [search, setSearch] = useState("");
  const [data, setData] = useState(false);
  const [notiExpanded, setNotiExpanded] = useState(false);
  const usersByName = useSelector((state) => state.users);

  const token = localStorage.getItem("token");

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(getUsersByName(search, token));
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

  const pages = [
    { name: "SocialCuak", link: "/social" },
    { name: "WorkCuak", link: "/work" },
    { name: "Q&A-Cuak", link: "/qanda" },
    { name: "HiringCuak", link: "/hiring" },
  ];
  return (
    <Box width="100%">
      <AppBar
        width="100%"
        position="static"
        sx={{ backgroundColor: "#1E8449" }}
      >
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Box>
            <Link to={"/"}>
              <img height="70px" src={logo} alt="loguito" />
            </Link>
          </Box>
          <Box className={style.searchContainer}>
            <i className="fa-sharp fa-solid fa-magnifying-glass fa-lm" />
            <form onSubmit={submitHandler}>
              <input
                type="text"
                value={search}
                onChange={handlerChange}
                placeholder="Buscar en codeCuak"
              />
            </form>
            <Box
              className={
                search ? style.searchExpanded : style.searchNotExpanded
              }
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
            </Box>
          </Box>
          <Box
            className={search ? style.searchExpanded : style.searchNotExpanded}
          ></Box>
          {pages.map((page) => (
            <MenuItem key={page}>
              <Link
                to={page.link}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  textAlign="center"
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Sen"
                >
                  {page.name}
                </Typography>
              </Link>
            </MenuItem>
          ))}

          <Box className={style.iconsContainer}>
            <button onClick={handlerNotifications}>
              <NotificationsActiveIcon sx={{ color: "white" }} />
            </button>
          </Box>
          <Box
            className={
              notiExpanded ? style.notiExpanded : style.notiNotExpanded
            }
          >
            <Box className={style.notiContainer}>
              <Box className={style.notiHeader}>
                <h2>Notificaciones</h2>
              </Box>
              <Box className={style.notifications}>
                <Box>
                  <h3>Notificacion</h3>
                </Box>
                <Box>
                  <h3>Notificacion</h3>
                </Box>
                <Box>
                  <h3>Notificacion</h3>
                </Box>
                <Box>
                  <h3>Notificacion</h3>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ajustes">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user.image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link
                  to={setting.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
              {user.status == "superadmin" ? 
              <Link to="/admin" style={{ "textDecoration": "none", "color": "black" }}>
              <MenuItem key={user.id}>DashBoard</MenuItem> 
              </Link> : null}
             
              <MenuItem onClick={() => {
                  localStorage.setItem("token", "");
                  window.location.href = "/";
                }}>
                <Typography textAlign="center">Cerrar Sesión</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default NavBar;
