import axios from "axios";
const URL_BASE = "https://backend-production-c946.up.railway.app"

// RUTA PARA PUBLICAR POST
// falta fixear las rutas
export const sendPost = async (content, userId) => {
  let response = await axios.post(`${URL_BASE}/socialcuak`, { content, userId });
  return response
}


// RUTA PUBLICAR COMENTARIOS

export const sendComment = async (content, userId, postId) => {
  let data = await axios.post(`${URL_BASE}/socialcuak/${postId}/comment`, { content, userId });
  return data
};

// RUTA PARA EDITAR UN POST

export const editPost = async (content, id) => {
  try {
    const data = await axios.put(`${URL_BASE}/socialcuak/${id}`, {content});
    return "Publicacion modificada con exito"
  } catch (error) {
    console.log(error.mesage)
    return "Algo ha salido mal"
  }
} 
// RUTA PARA BORRAR UN POST

export const deletePost = async (id) => {
  try {
    const data = await axios.delete(`${URL_BASE}/socialcuak/${id}`)
    return "Se ha eliminado la publicacion"
  } catch (error) {
    console.log(error.message)
    return "Algo ha salido mal"
  }
}
// RUTA POST DEL MERCADO PAGO
export const sendMP = async (donacion,input) =>{
  let data = await axios.post(`${URL_BASE}/payment`,{...donacion,...input})
  console.log(data.data);
  return window.location.href=data.data
}
  // RUTA POST DEL USUARIO REGISTRADO
  
  export const userRegister = async (user)=>{
    let response = await axios.post(`${URL_BASE}/signup`,{user})
    return response}