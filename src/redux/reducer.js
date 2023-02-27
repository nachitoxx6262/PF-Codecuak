import {
  GET_ALL_POST,
  GET_POST_BY_ID,
  PUT_POST,
  DELETE_POST,
  CLEAN_POST,
  POST_COMMENT,
  PUT_COMMENT,
  DELETE_DESTROY_COMMENT,
  DELETE_LOGIC_COMMENT,
  GET_ALL_USER,
  GET_BYID_USER,
  GET_USERS_NAME,
  GET_USERS_ALPHA,
  GET_BYID_USER_DETAIL,
  GET_ALL_USER_ADMIN
} from "./action";

const initialState = {
  alluser : [],
  userData: {},
  userDetail: {},
  users: [],
  posts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST_BY_ID:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,

      };
    case GET_BYID_USER:
      return {
        ...state,
        userData: action.payload,
      };

    case GET_BYID_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };
    case GET_USERS_NAME:
      return {
        ...state,
        users: action.payload
      }
    case GET_USERS_ALPHA:
      return {
        ...state,
        users: action.payload
      }
    case CLEAN_POST:
      return {
        ...state,
        posts: [],
      };
      case GET_ALL_USER_ADMIN:
      return {
        ...state,
        alluser: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;