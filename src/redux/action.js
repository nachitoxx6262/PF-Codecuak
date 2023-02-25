import axios from "axios";
// PARA CREAR UNA CONSTANTE DEL ACTION PRIMERO PONER
//ejemplo GET_ALL_POST
// primero tipo de peticion despues algo descriptivo de ser nesesario y depues la cosa con la que se trabaja xd
//💥 POSTEOS 💥
export const GET_ALL_POST = "GET_ALL_POST";
export const GET_BYID_POST = "GET_BYID_POST";
export const GET_BYUSERID_POST = "GET_BYUSERID_POST";
export const PUT_POST = "PUT_POST";
export const DELETE_POST = "DELETE_POST";
export const CLEAN_POST = "CLEAN_POST";
// 💥COMENTARIOS💥
export const POST_COMMENT = "POST_COMMENT";
export const PUT_COMMENT = "PUT_COMMENT";
export const DELETE_DESTROY_COMMENT = "DELETE_DESTROY_COMMENT";
export const DELETE_LOGIC_COMMENT = "DELETE_LOGIC_COMMENT";
// 💥USUARIOS💥
export const GET_ALL_USER = "GET_ALL_USER";
export const GET_BYID_USER = "GET_BYID_USER";
export const GET_USERS_NAME = "GET_USERS_NAME";
export const GET_USERS_ALPHA = "GET_USERS_ALPHA";
export const GET_BYID_USER_DETAIL = "GET_BYID_USER_DETAIL";
const URL_BASE = "https://backend-production-c946.up.railway.app";
const URL = {
  URL_SOCIAL: "http://localhost:3001/socialcuak",
  URL_USERS: "http://localhost:3001/users/",
};



// ##################### SOCIAL CUAK ########################
// POSTEOS  🛑
// GET ALL POST
// solamente vamos a tener los post con la info usuario
export const getAllPost = () => {
  return function (dispatch) {
    try {
      axios.get(`${URL_BASE}/socialcuak`).then((response) => {
        dispatch({ type: GET_ALL_POST, payload: response.data });
      });
    } catch (error) {}
  };
};

//GET POST BY USERID
//Los filtramos en el FRONT hasta que los del back hagan el filtro
export const getPostByUserId =  (userId, token) => {
  console.log(userId,"user idddd")
  return function (dispatch) {
    axios({
      method: "get",
      url: `${URL_BASE}/users/${userId}`,
      headers: {
        "x-auth-token": `${token}`, // Asegúrate de reemplazar "token" con el valor correcto del token de autenticación que deseas enviar en el encabezado.
      },
    }).then((response) => {
      console.log(response);
      // const data = response.data.filter((post) => post.userdevId == userId);
      dispatch({ type: GET_ALL_POST, payload: response.data.socialposts });
    });
  };
};
// GET POST BY ID
// dentro del response vamos a tener el post con los comentarios y la info de usuarios
export const getAllPostById = ({ postId }) => {
  return function (dispatch) {
    axios.get(`${URL_BASE}/${postId}`).then((response) => {
      dispatch({ type: GET_POSTBYID, payload: response.data });
    });
  };
};
// POST DEL POST XD
// mandar post requiere contenido y el id de usuarion todo por body

// PUT DEL POST
export const modifyPost = ({ postId, content }) => {
  return async function (dispatch) {
    let data = await axios.put(`${URL_BASE}/${postId}`, { content });
    return dispatch({ type: PUT_POST, data });
  };
};
// DELETE DEL POST
export const deletePost = ({ postId }) => {
  return async function (dispatch) {
    let data = await axios.put(`${URL_BASE}/${postId}`);
    return dispatch({ type: DELETE_POST, data });
  };
};

// CLEAN POST
export const cleanPost = () => {
  return function (dispatch) {
    return dispatch({ type: CLEAN_POST });
  };
};
// COMENTARIOS  🛑
// para mandar un comentario tenemos q mandar la ID DEL POST por PARAMS y por BODY tenemos que mandar el USERID y el CONTENIDO del COMENTARIO
// POST DEL COMENTARIO
export const sendComment = ({ content, userId, postId }) => {
  return async function (dispatch) {
    let data = await axios.post(`${URL_BASE}/${postId}/comment`, {
      content,
      userId,
    });
    return dispatch({ type: ADD_COMMENT_URL, data });
  };
};
// PUT DE COMENTARIO
export const modifyComment = ({ commentId, content }) => {
  return async function (dispatch) {
    let data = await axios.put(`${URL_BASE}/${commentId}/comment`, {
      content,
    });
    return dispatch({ type: ADD_COMMENT_URL, data });
  };
};
// DELETE COMPLETO DEL COMENTARIO NO HAY VUELTA ATRAS
export const destroyDeleteComment = ({ commentId }) => {
  return async function (dispatch) {
    let data = await axios.delete(`${URL_BASE}/${commentId}/comment`);
    return dispatch({ type: ADD_COMMENT_URL, data });
  };
};
// COMENTADO POR EL MOMENTO FALTA CONFIRMACION DEL BACK
// export const logicDeleteComment = ({content,userId,postId}) => {
//   return async function (dispatch){
//       let data = await axios.delete(`${URL.URL_SOCIAL}/${postId}/comment`, {content,userId});
//       return dispatch({ type: ADD_COMMENT_URL, data  });
//   }
// }
// DELETE DEL COMENTARIO

// 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑  USERS  🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑
// GET USERS BY ID NECESITA TOKEN
// export const getUserById = (userId, token) => {
//   return function (dispatch) {
//     axios({
//       method: "get",
//       url: `http://localhost:3001/users/${userId}`,
//       headers: {
//         "x-auth-token": `${token}`, // Asegúrate de reemplazar "token" con el valor correcto del token de autenticación que deseas enviar en el encabezado.
//       },
//     }),
//       dispatch({ type: GET_BYID_USER, payload: data.data });
//   };
// };
// PEDIR TODOS LOS USUARIOS  NO NECESITA TOKEN
export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${URL_BASE}/users`);
      return dispatch({ type: GET_ALL_USER, payload: data.data });
    } catch (error) {
      console.log("Error en || getAllUsers ||");
    }
  };
};

export const getUsersByName = (name, token) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${URL_BASE}/users/?name=${name}`, {
        headers: { "x-auth-token": `${token}` },
      });
      return dispatch({ type: GET_USERS_NAME, payload: data.data });
    } catch (error) {
      console.log("Error en || getUsersByName ||", error);
    }
  };
};
export const getUsersAlpha = (alpha) => {
  return async function (dispatch) {
    const data = await axios.get(
      `https://backend-production-c946.up.railway.app/users?alpha=${alpha}`
    );
    return dispatch({ type: GET_USERS_ALPHA, payload: data.data });
  };
};

export const getPage = (page) => {
  return async function (dispatch) {
    const data = await axios.get(
      `https://backend-production-c946.up.railway.app/users?page=${page}`
    );
    return dispatch({ type: GET_ALL_USER, payload: data.data });
  };
};

export const getUserDetailById = (userId, token) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: `http://localhost:3001/users/${userId}`,
      headers: {
        "x-auth-token": `${token}`, // Asegúrate de reemplazar "token" con el valor correcto del token de autenticación que deseas enviar en el encabezado.
      },
    })
      .then((response) => {
        console.log(response,"getuserdetailbyid")
        dispatch({ type: GET_BYID_USER_DETAIL, payload: response.data });
      })
      .catch((error) => {
        console.log(error, "error en getuserdatilbyid");
      });
  };
};
