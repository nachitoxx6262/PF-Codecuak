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
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const allusers = useSelector((state) => state.alluser);
  console.log(posts.count)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPost(1));
    dispatch(allUserAdmin());
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
              title={users.count}
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
              title={posts.count}
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
        <Members allusers={allusers} />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
