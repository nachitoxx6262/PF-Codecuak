import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Box } from "@mui/material";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Box width="10rem">
      <Button
        color="success"
        variant="contained"
        sx={{ fontWeight: "bold" }}
        onClick={() =>
          logout({ logoutParams: { returnTo: "http://localhost:5173/" } })
        }
      >
        Log Out
      </Button>
    </Box>
  );
};

export default LogoutButton;
