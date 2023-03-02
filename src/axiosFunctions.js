import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserDetailById, getUserById, getAllPost } from "./redux/action";
const URL_BASE = "https://backend-production-c946.up.railway.app";

// RUTA PARA PUBLICAR POST
// falta fixear las rutas
export const sendPost = async (content, userId, token) => {
  let response = await axios.post(
    `${URL_BASE}/socialcuak`,
    { content, userId },
    { headers: { "x-auth-token": token } }
  );
  console.log(response);
  return response;
};

// RUTA PUBLICAR COMENTARIOS

// export const sendComment = async (content, userId, postId, token) => {
//   let data = await axios.post(`${URL_BASE}/socialcuak/${postId}/comment`, { content, userId }, { headers: { 'x-auth-token': token } } );
//   return data
// };

export const sendComment = async (content, userId, postId, token) => {
  let data = await axios.post(
    `${URL_BASE}/socialcuak/${postId}/comment`,
    { content, userId },
    { headers: { "x-auth-token": token } });
  return data;
};
// RUTA PARA EDITAR UN POST

export const editPost = async (content, id) => {
  try {
    const data = await axios.put(`${URL_BASE}/socialcuak/${id}`, { content });
    return "Publicacion modificada con exito";
  } catch (error) {
    console.log(error.mesage);
    return "Algo ha salido mal";
  }
};
// RUTA PARA BORRAR UN POST

export const deletePost = async (id) => {
  try {
    const data = await axios.delete(`${URL_BASE}/socialcuak/${id}`);
    return "Se ha eliminado la publicacion";
  } catch (error) {
    console.log(error.message);
    return "Algo ha salido mal";
  }
};
// RUTA POST DEL MERCADO PAGO
export const sendMP = async (donacion, input) => {
  let data = await axios.post(`http://localhost:3001/payment`, {
    ...donacion,
    ...input,
  });
  console.log(data.data);
  return (window.location.href = data.data);
};
// RUTA POST DEL USUARIO REGISTRADO

export const userRegister = async (name, email, nickName, password) => {
  try {
    let response = await axios.post(
      "https://backend-production-c946.up.railway.app/auth/signup",
      {
        name,
        email,
        nickName,
        password,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    if (error.response.data.errors[0]?.msg) {
      if (error.response.data.errors.length == 2) {
        throw "El email y el nickName ya fueron usados por algun usuario";
      } else if (
        error.response.data.errors[0]?.msg ==
        "El email ya es usado por un usuario"
      ) {
        throw "El email ya esta usado por un usuario";
      } else if (
        error.response.data.errors[0]?.msg ==
        "El nickName ya es usado por un usuario" ||
        error.response.data.errors[1]?.msg ==
        "El nickName ya es usado por un usuario"
      ) {
        throw "El nickName ya es usado por un usuario";
      } else {
        throw "errorxd";
      }
    }
  }
};
// RUTA POST DEL LOG IN DE USUARIOS

export const userLogin = async (email, password) => {
  try {
    let response = await axios.post(`${URL_BASE}/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};


// RUTA INCIAR SESION CON GOOGLE
