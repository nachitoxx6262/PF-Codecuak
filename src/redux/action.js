import axios from "axios";
// PARA CREAR UNA CONSTANTE DEL ACTION PRIMERO PONER
//ejemplo GET_ALL_POST
// primero tipo de peticion despues algo descriptivo de ser nesesario y depues la cosa con la que se trabaja xd
//💥 POSTEOS 💥
export const GET_ALL_POST = "GET_ALL_POST";
export const GET_POST_BY_ID = "GET_POST_BY_ID";
export const GET_POSTS_BY_USER_ID = "GET_POSTS_BY_USER_ID";
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
export const GET_ALL_USER_ADMIN = "GET_ALL_USER_ADMIN";
export const CLEAN_USER_DETAIL = "CLEAN_USER_DETAIL";
const URL_BASE = "https://backend-production-c946.up.railway.app"
const URL = {
  URL_SOCIAL: "https://backend-production-c946.up.railway.app/socialcuak",
  URL_USERS: "http://backend-production-c946.up.railway.app/users",
  URL_BASE: "https://backend-production-c946.up.railway.app"
};

// token cuenta codeCuak
const config = {
  headers: {
    "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMWM0MzRjODctMmI5MC00YWRkLWEyZjItZThhMDNjZDE1MjAxIn0sImlhdCI6MTY3NzI3NTAxNywiZXhwIjoxNjc3NDQ3ODE3fQ.aqhJ8pnoIK4i2I3DqXv4d0F2qojHlunw-WYSTboD8p4",
  }
}

// ##################### SOCIAL CUAK ########################
// POSTEOS  🛑
// GET ALL POST
// solamente vamos a tener los post con la info usuario
export const getAllPost = (page) => {
  return function (dispatch) {
    try {
      axios.get(`${URL.URL_SOCIAL}?page=${page}`).then((response) => {
        dispatch({ type: GET_ALL_POST, payload: response.data });
      });
    } catch (error) {
      console.log(error.message)
    }
  };
};


//GET POST BY USERID
export const getPostsByUserId = (userId, page) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${URL.URL_SOCIAL}/user/${userId}?page=${page}`)
      dispatch({ type: GET_ALL_POST, payload: data.data })
    } catch (error) {
      console.log(error)
    }
  }
}

//Los filtramos en el FRONT hasta que los del back hagan el filtro
export const getPostById = (postId, token) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${URL.URL_SOCIAL}/${postId}`, { headers: { "x-auth-token": token } });
      console.log(token);
      dispatch({ type: GET_POST_BY_ID, payload: data.data })
    } catch (error) {
      console.log(error.message)
    }
  }
}
// POST DEL POST XD
// mandar post requiere contenido y el id de usuarion todo por body
// PUT DEL POST
export const modifyPost = ({ postId, content }) => {
  return async function (dispatch) {
    let data = await axios.put(`${URL.URL_SOCIAL}/${postId}`, { content });
    return dispatch({ type: PUT_POST, data });
  };
};
// DELETE DEL POST
export const deletePost = ({ postId }) => {
  return async function (dispatch) {
    let data = await axios.put(`${URL.URL_SOCIAL}/${postId}`);
    return dispatch({ type: DELETE_POST, data });
  };
};

// CLEAN POST
export const cleanPost = () => {
  return function (dispatch) {
    return dispatch({ type: CLEAN_POST })
  };
};
// COMENTARIOS  🛑
// para mandar un comentario tenemos q mandar la ID DEL POST por PARAMS y por BODY tenemos que mandar el USERID y el CONTENIDO del COMENTARIO
// POST DEL COMENTARIO
export const sendComment = ({ content, userId, postId }) => {
  return async function (dispatch) {
    let data = await axios.post(`${URL.URL_SOCIAL}/${postId}/comment`, {
      content,
      userId,
    });
    return dispatch({ type: ADD_COMMENT_URL, data });
  };
};
// PUT DE COMENTARIO
export const modifyComment = ({ commentId, content }) => {
  return async function (dispatch) {
    let data = await axios.put(`${URL.URL_SOCIAL}/${commentId}/comment`, {
      content,
    });
    return dispatch({ type: ADD_COMMENT_URL, data });
  };
};
// DELETE COMPLETO DEL COMENTARIO NO HAY VUELTA ATRAS
export const destroyDeleteComment = ({ commentId }) => {
  return async function (dispatch) {
    let data = await axios.delete(`${URL.URL_SOCIAL}/${commentId}/comment`);
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
export const getUserById = (token, userId) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${URL_BASE}/users/${userId}`, { headers: { "x-auth-token": token } });
      return dispatch({ type: GET_BYID_USER, payload: data.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// PEDIR TODOS LOS USUARIOS  NO NECESITA TOKEN
export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${URL_BASE}/users`)
      return dispatch({ type: GET_ALL_USER, payload: data.data })
    } catch (error) {
      console.log("Error en || getAllUsers ||")
    }
  }
}

export const getUsersByName = (name, token) => {
  return async function (dispatch) {
    try {
      const data = await axios.get(`${URL_BASE}/users/?name=${name}`, { headers: { "x-auth-token": token } })
      return dispatch({ type: GET_USERS_NAME, payload: data.data })
    }
    catch (error) {
      console.log("Error en || getUsersByName ||", error)
    }
  }
}
export const getUsersAlpha = (alpha) => {
  return async function (dispatch) {
    const data = await axios.get(`https://backend-production-c946.up.railway.app/users?alpha=${alpha}`)
    return dispatch({ type: GET_USERS_ALPHA, payload: data.data })
  }
}


export const getPage = (page) => {
  return async function (dispatch) {
    const data = await axios.get(`https://backend-production-c946.up.railway.app/users?page=${page}`)
    return dispatch({ type: GET_ALL_USER, payload: data.data })
  }

}

export const getUserDetailById = (userId, token) => {
  return async (dispatch) => {
    try {
      const data = await axios.get(`${URL_BASE}/users/${userId}`, { headers: { 'x-auth-token': token } })
      dispatch({ type: GET_BYID_USER_DETAIL, payload: data.data });
    } catch (error) {
      console.log(error.message, 'error en getuserdatilbyid');
    };
  };
}

export const cleanUserDetail = ()=>{
  return function(dispatch){
    dispatch({type: CLEAN_USER_DETAIL})
  }
}

export const allUserAdmin = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${URL_BASE}/users/admins`);
      dispatch({ type: GET_ALL_USER_ADMIN, payload: response.data.results });
    } catch (error) {
      console.log(error);
    }
  }
}
