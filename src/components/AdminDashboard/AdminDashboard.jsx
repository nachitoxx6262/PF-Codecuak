import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import StatBox from "./utils/StatBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { getAllUsers, getAllPost, allUserAdmin } from "../../redux/action";
import Members from "./utils/Members";
const AdminDashboard = () => {
  const token  = localStorage.getItem("token")
  const allusers = useSelector((state) => state.alluser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allUserAdmin(token));
  }, [dispatch]);

  return (
    <Box
      bgcolor="#D5DBDB"
      padding="1rem"
      height="100%"
      minHeight="100vh"
      fontFamily={"Sen"}
      sx={{ backgroundAttachment: "fixed", backgroundSize: "cover" }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            color="success"
            variant="outlined"
            sx={{ fontWeight: "bold" }}
          >
            Volver al Home
          </Button>
        </Link>
        <Typography
          variant="h4"
          color="#1E8449"
          fontFamily={"Sen"}
          align="center"
          fontWeight="bold"
        >
          Bienvenido al Panel Administrativo de CodeCuak
        </Typography>
        <Box display="flex" gap="2rem">
          <Box
            width="10rem"
            height="10rem"
            boxShadow="3px 3px 5px grey"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
             <StatBox
              title={allusers.data.countAllUsers}
              subtitle="Total de Usuarios"
              icon={
                <PersonAddIcon
                  sx={{
                    color: "#1E8449",
                    fontSize: "26px",
                    textShadow: "1px 1px 8px black",
                  }}
                />
              }
            /> 
          </Box> 
          <Box
            width="10rem"
            height="10rem"
            boxShadow="3px 3px 5px grey"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={allusers.data.countAllPost}
              subtitle="Total de Post"
              icon={
                <DynamicFeedIcon
                  sx={{
                    color: "#1E8449",
                    fontSize: "26px",
                    textShadow: "1px 1px 8px black",
                  }}
                />
              }
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Members allusers={allusers.data.results} /> 
      </Box>
    </Box>
  );
};

export default AdminDashboard;
