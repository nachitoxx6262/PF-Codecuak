//estilos
import styles from "./users.module.css";
//hooks
import { Link } from "react-router-dom";
//componentes
import logo from "../../Media/logo-03.png";
import { Box, Typography, Button, Avatar } from "@mui/material";
const Users = ({ name, image, id }) => {
  return (
    <Box
      width="30rem"
      sx={{
        backgroundColor: "#388e3c",
        padding: "16px",
        boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.20)",
      }}
      display="flex"
      justifyContent="flex-start"
      margin="10px"
      className={styles.cards}
    >
      <Box display="flex">
        <Link to={`/users/${id}`} className={styles.link}>
          {image ? (
            <Avatar src={image} sx={{ width: 56, height: 56 }} />
          ) : (
            <Avatar src={logo} sx={{ width: 56, height: 56 }} />
          )}
          <Typography
            variant="h6"
            marginLeft="10px"
            color="#ffffff"
            fontFamily={"Sen"}
          >
            {name}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Users;
