//importamos estilos
import style from "./formSocialPost.module.css";
//importamos hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPost } from "../../../axiosFunctions";
import { useAuth0 } from "@auth0/auth0-react";
// componentes
// IMPORT MATERIAL UI
import Alert from '@mui/material/Alert';
import { Avatar, Box, Typography, TextField, Button } from "@mui/material";
const FormSocialPost = ({ user }) => {
  const {isAuthenticated} = useAuth0()
  const dispatch = useDispatch();
  //usuario de prueba, los verdaderos vienen por props ya que el contenedor social hace el fetch de datos
  const [form, setForm] = useState("");
  const text = form.length;
  //const [users, setUsers] = useState("a2e13a38-ae82-40e2-9a43-ac5a66310f1d");

  const handlerChange = (event) => {
    const value = event.target.value;
    setForm(value);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    sendPost(form, user.id);
    setForm("");
  };

  return (
    <Box className={style.codetext} fontFamily={"Sen"} margin="15px">
      <Box  width="80%" display="flex" flexDirection="column" justifyContent="center" >
        <Box display="flex" gap="1rem">
          <Box>
            <Avatar src={user.image} alt="foto del usuario" />
          </Box>
          <Typography variant="h6" fontFamily={"Sen"} color="black">
            {user.name}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" color="white" flexGrow="1" >
          <form onSubmit={handlerSubmit} style={{"display":"flex","flexDirection":"column","width":"100%"}}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Que te gustaria postear?"
              multiline
              rows={4}
              margin="normal"
              required
              onChange={handlerChange}
              color="success"
            />
            <Box display="flex" flexDirection="column" alignItems="center">
              {text > 1400 ? (
                <Typography color="red" fontWeight="bold">{`${text}/1500 `}</Typography>
              ) : null}
              <Button
                style={{
                  width: 150,
                  height: 40,
                  fontSize: 20,
                }}
                size="large"
                color="success"
                variant="contained"
                sx={{ fontWeight: "bold", fontSize: "100" }}
                type="submit"
                disabled={text > 1500}
              >
                Publicar
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
export default FormSocialPost;
