import axios from "axios";
const URL_BASE = "https://backend-production-c946.up.railway.app";

// RUTA PARA PUBLICAR POST
// falta fixear las rutas
export const sendPost = async (content, userId, token) => {
  let response = await axios.post(
    `${URL_BASE}/socialcuak`,
    { content, userId },
    { headers: { "x-auth-token": token } }
  );
  return response;
};

// RUTA PUBLICAR COMENTARIOS

export const sendComment = async (content, userId, postId, token) => {
  let data = await axios.post(`${URL_BASE}/socialcuak/${postId}/comment`, { content, userId }, { headers: { 'x-auth-token': token } } );
  return data
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
  let data = await axios.post(`${URL_BASE}/payment`, { ...donacion, ...input });
  console.log(data.data);
  return (window.location.href = data.data);
};
// RUTA POST DEL USUARIO REGISTRADO

export const userRegister = async (name, email, nickName, password) => {
  try {
    let response = await axios.post(`${URL_BASE}/auth/signup`, {
      name,
      email,
      nickName,
      password,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
// RUTA POST DEL LOG IN DE USUARIOS

export const userLogin = async (email, password) => {
  try {
    let response = await axios.post(`${URL_BASE}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// RUTA INCIAR SESION CON GOOGLE

export const googleLogin = async () => {
  console.log("login google")
  try {
    let response = await axios.get("http://localhost:3001/auth/google", {maxRedirects: 6});
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
}

// RUTA INCIAR SESION CON GOOGLE
