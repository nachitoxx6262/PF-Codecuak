//estilos
import styles from "./UsersAll.module.css";
//hooks
import { useEffect, useState } from "react";
import { getAllUsers } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { getPage } from "../../redux/action";
import { getUsersAlpha } from "./../../redux/action";
//componentes
import NavBar from "../NavBar/NavBar";
import Users from "./Users";
//Material UI
import { Box, Typography, Button, Icon } from "@mui/material";

const UsersAll = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState("1");
  const data = useSelector((state) => state.users);

  console.log(data);
  const pageCount = data.pages;
  const buttons = [];

  const handleClick = (event) => {
    const page = event.target.value;
    setPages(page);
    dispatch(getPage(page));
  };

  for (let i = 1; i <= pageCount; i++) {
    buttons.push(
      <Button
        size="large"
        color="success"
        variant="outlined"
        style={{ width: 100, height: 40, fontSize: 15, fontWeight: "bold" }}
        key={i}
        className={styles.focus}
        value={i}
        onClick={handleClick}
      >
        {i}
      </Button>
    );
  }

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.name;
    value == "asc" ? dispatch(getUsersAlpha("asc")) : [];
    value == "desc" ? dispatch(getUsersAlpha("desc")) : [];
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <NavBar />

      <Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          height="20px"
          gap="20px"
        >
          <Button
            size="large"
            color="success"
            variant="outlined"
            style={{ width: 100, height: 40, fontSize: 15, fontWeight: "bold" }}
            className={styles.focus}
            name="asc"
            onClick={handleChange}
          >
            ASC
          </Button>
          <Button
            size="large"
            color="success"
            variant="outlined"
            style={{ width: 100, height: 40, fontSize: 15, fontWeight: "bold" }}
            className={styles.focus}
            name="desc"
            onClick={handleChange}
          >
            DESC
          </Button>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap:"30px"}}  marginTop="2rem">
            {data.results?.map((user) => {
              return (
                <Users
                  key={user.id}
                  name={user.name}
                  image={user.image}
                  id={user.id}
                  nickName={user.nickName}
                />
              );
            })}
           
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" >
          <Box display="flex" alignItems="center" justifyContent="center" gap="20px" marginTop="2rem">{buttons}</Box>
        </Box>
      </Box>
      <Box className={styles.containerOrderer}></Box>
    </Box>
  );
};

export default UsersAll;
