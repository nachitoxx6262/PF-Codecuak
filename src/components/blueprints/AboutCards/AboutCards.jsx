import React from "react";
import Style from "./AboutCards.module.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
const AboutCards = () => {
  const developers = [
    {
      img: "https://media.licdn.com/dms/image/C4E03AQE1xts8gj2NBA/profile-displayphoto-shrink_100_100/0/1650746265548?e=1682553600&v=beta&t=W90CArYcsy9ryQ7Sui6AJZJhgAVUkCQUc8De9u1VpkY",
      name: "Peñamaria Ignacio",
      linkdin: "https://www.linkedin.com/in/ignacio-peniamaria-591865183/",
      github: "https://github.com/nachitoxx6262",
      descripcion: "Full Stack Web Developer",
    },
    {
      img: "https://avatars.githubusercontent.com/u/101676297?v=4",
      name: "Abraham Emir Jose ",
      linkdin: "https://www.linkedin.com/in/emirabraham/",
      github: "https://github.com/EmirAbraham",
      descripcion: "Full Stack Web Developer",
    },
    {
      img: "https://media.licdn.com/dms/image/D4E03AQEeG1Y1u4VcFQ/profile-displayphoto-shrink_200_200/0/1669930471368?e=1682553600&v=beta&t=R2DHZqu9gnTYUDMEYbqmLriVfNtlq2sI04ATqOPYq_k",
      name: "Salas Juan Camilo",
      linkdin: "https://www.linkedin.com/in/juan-salas-594266254/",
      github: "https://github.com/JuanCamiloSalas",
      descripcion: "Full Stack Web Developer",
    },
    {
      img: "https://avatars.githubusercontent.com/u/107959000?v=4",
      name: "Peralta Santiago",
      linkdin: "https://www.linkedin.com/in/santiago-peralta-1961b8258/",
      github: "https://github.com/SantiagoPeralta30",
      descripcion: "Full Stack Web Developer",
    },
    {
      img: "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png",
      name: "Rivero Julián Martin",
      linkdin: "https://www.linkedin.com/in/julianmrivero/",
      github: "https://github.com/JulianMRivero",
      descripcion: "Full Stack Web Developer",
    },
    {
      img: "https://media.licdn.com/dms/image/D5635AQHqCOOSH8pgcQ/profile-framedphoto-shrink_200_200/0/1672267339215?e=1677535200&v=beta&t=NbJILWBxYh35k1kErFFN8NNCDC7YAcyZaeYaSMqCArY",
      name: "Galvez Eduardo",
      linkdin:
        "https://www.linkedin.com/in/eduardo-jim%C3%A9nez-galvez-aab318257/",
      github: "https://github.com/DarkItchy",
      descripcion: "Full Stack Web Developer",
    },
    {
      img: "https://media.licdn.com/dms/image/C4D03AQGXgfRYSml8UQ/profile-displayphoto-shrink_200_200/0/1668033701148?e=1682553600&v=beta&t=U4jDXasINjiwcKqBm8B9eyskXb2-zTi3IaCoeu6ka3I",
      name: "Corbalan Augusto Nicolas",
      linkdin: "https://www.linkedin.com/in/augusto-corbalan-a6b857256/",
      github: "https://github.com/AugustoCorbalan",
      descripcion: "Full Stack Web Developer",
    },
    {
      img: "https://media.licdn.com/dms/image/D4D03AQETnRPstlJh0A/profile-displayphoto-shrink_100_100/0/1669139486404?e=1682553600&v=beta&t=fMxzlUk8OSxohMNl5HMrMr7g0batHIYA_bW7asMAW98",
      name: "Silverio  Tomas Eliseo",
      linkdin: "https://www.linkedin.com/in/serotomas/",
      github: "https://github.com/SeroTomas",
      descripcion: "Full Stack Web Developer",
    },
  ];

  return (
    <div className={Style.sectionsContenedor}>
      {developers?.map((element) => {
        return (
          <Box
            sx={{ backgroundColor: "white", padding: "16px",  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.20)',}}
            display="flex"
          >
            <Avatar
              alt={element.name}
              src={element.img}
              sx={{ width: 100, height: 100 }}
              
            />
            <Box marginLeft={2}>
              <h2>{element.name}</h2>
              <Typography variant="body1" color="textPrimary" align="center">{element.descripcion}</Typography>
              <div className={Style.divlogos}>
                <Link to={element.github}>
                  <i class="fa-brands fa-github fa-xl"></i>
                </Link>
                <Link to={element.linkdin}>
                  <i class="fa-brands fa-linkedin fa-xl"></i>
                </Link>
              </div>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default AboutCards;
