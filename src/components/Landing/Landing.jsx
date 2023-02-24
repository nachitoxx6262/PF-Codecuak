//estilos css
import styles from "./Landing.module.css";
// hooks
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// dependencias MUI
import { Box, Typography, Button, Icon } from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TerminalIcon from "@mui/icons-material/Terminal";
import {List,ListItem } from "@mui/material";
//componentes
import LoginButton from "../blueprints/buttonsAuth/LoginButton";
import LogOutButton from "../blueprints/buttonsAuth/LogOutButton";
import logo from "../../Media/logo-03.png";
import Footer from "../blueprints/Footer/Footer";

const Landing = () => {
  const data = [
    {
      id:"social",
      link:"/social",
      title: "socialCuak",
      color: "#dce3e3",
      secondTitle: "Aquí podrás expresarte",
      description:
        "Lo que buscamos con “social-Cuak” es distendernos y conocernos; encontrar un clima agradable para despejar la mente.",
      icon: 1,
    },
    {
      id:"Q&A",
      link:"/qanda",
      title: "Q&A-Cuak",
      color: "#D5DBDB",
      secondTitle: "Para crecer necesitamos ayudarnos entre todos",
      description:
        "Por eso en “Q&A-Cuak” los usuarios podrán generar nuevas publicaciones solicitando ayuda o responder las consultas ya existentes.",
      icon: 2,
    },
    {
      id:"work",
      link:"/work",
      title: "workCuak",
      color: "#dce3e3",
      secondTitle: "La programación es un trabajo de equipo",
      description:
        "“work-Cuack” está diseñado para buscar colaboradores para desarrollar proyectos propios.",
      icon: 3,
    },
    {
      id:"hiring",
      link:"/hiring",

      title: "hiringCuak",
      color: "#D5DBDB",
      secondTitle:
        "En codeCuak nos preocupamos por el futuro de nuestros miembros",
      description:
        "Ideamos una sección en la que podrán cargar su perfil en el caso de que estén en búsqueda activa de empleo.Tambien las empresas podrán registrarse y publicar ofertas laborales para que los desarrolladores apliquen a ellas.",
      icon: 4,
    },
  ];
  const { isAuthenticated } = useAuth0();
  return (
    <Box className={styles.containter}>
      <Box className={styles.nav}>
        <a href="#code">
          <img src={logo} alt="logofooter" className={styles.logoFooter} />
        </a>
        <Box>
        <List component="ul" className={styles.navul}>
        <ListItem ><a href="#social"className={styles.a} >{">_"}socialCuak</a></ListItem>
        <ListItem><a href="#Q&A" className={styles.a} >{">_"}Q&A-Cuak</a></ListItem>
        <ListItem ><a href="#work" className={styles.a} >{">_"}workCuak</a></ListItem>
        <ListItem><a href="#hiring" className={styles.a}>{">_"}hiringCuak</a></ListItem>
        <ListItem><Link to="/donaciones" className={styles.a}>{">_"}donaciones</Link></ListItem>
        </List>
        </Box>
        <Box className={styles.loginbtn}>

          {isAuthenticated ? <LogOutButton /> : <LoginButton />}
        </Box>
      </Box>

      {/* ######################################## CODE CUAK #########################################*/}
      <Box id="code" bgcolor="#D5DBDB" height="45rem" padding="3rem">
        <Typography
          variant="h1"
          color="#1E8449"
          fontFamily={"Sen"}
          align="center"
          fontWeight="bold"
        >
          {">_"}codeCuak
        </Typography>
        <Typography
          variant="h4"
          fontFamily={"Sen"}
          align="center"
          marginTop="1rem"
        >
          La red social por y para desarrolladores
        </Typography>
        <Box className={styles.codetext}>
          <Typography variant="h5" fontFamily={"Sen"} align="center">
            Nace con la idea de crear un espacio amigable en el que los
            desarrolladores puedan distenderse,
            <br /> compartir ideas y proyectos propios.
          </Typography>
          <Typography variant="h5" fontFamily={"Sen"} align="center">
            Resolver dudas, buscar compañeros para trabajar en equipo y buscar
            trabajo.
            <br /> Todo dentro de un mismo espacio
          </Typography>
        </Box>
      </Box>
      {data?.map((element) => {
        return (
          <>
            <Box
              id={element.id}
              bgcolor={element.color}
              height="60rem"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="2rem"
            >
              <Box>
                <Typography
                  variant="h1"
                  marginTop="2rem"
                  color="#1E8449"
                  fontFamily={"Sen"}
                  align="center"
                  fontWeight="bold"
                >
                  {element.title}
                </Typography>
                <Typography
                  variant="h4"
                  margin="2rem"
                  fontFamily={"Sen"}
                  align="center"
                >
                  {element.secondTitle}
                </Typography>
                <Box className={styles.codetext}>
                  <Typography variant="h5" fontFamily={"Sen"} align="center">
                    {element.description}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center" height="10rem">
                <Link to={element.link} style={{ textDecoration: "none" }}>
                  <Button
                  style={{ width: 200, height: 70, fontSize:20, marginTop:100, gap:15}}
                  size="large"
                    color="success"
                    variant="contained"
                    sx={{ fontWeight: "bold",fontSize:"100" }}
                  >
                    {element.icon == 1 ? (
                      <ConnectWithoutContactIcon fontSize="large" />
                    ) : (
                      <></>
                    )}
                    {element.icon == 2 ? (
                      <QuestionAnswerIcon fontSize="large" />
                    ) : (
                      <></>
                    )}
                    {element.icon == 3 ? (
                      <WorkspacesIcon fontSize="large" />
                    ) : (
                      <></>
                    )}
                    {element.icon == 4 ? (
                      <TerminalIcon fontSize="large" />
                    ) : (
                      <></>
                    )}
                    Entrar
                  </Button>
                </Link>
              </Box>
            </Box>
          </>
        );
      })}

      <Footer />
    </Box>
  );
};

export default Landing;
