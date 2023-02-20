import axios from "axios";
const URL = {
  URL_SOCIAL: "https://backend-production-c946.up.railway.app/socialcuak",
};
export const sendPost = async (content, userId) => {
  let response = await axios.post(URL.URL_SOCIAL, { content, userId });
  return response
}

export const sendComment = async (content, userId, postId) => {
  let data = await axios.post(`${URL.URL_SOCIAL}/${postId}/comment`, { content, userId });
  return data
};