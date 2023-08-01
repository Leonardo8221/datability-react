import {
  LOAD_USER_REQUEST,
  LOAD_USER_REQUEST_FAIL,
  LOAD_USER_REQUEST_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_REQUEST_FAIL,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_FAIL,
  LOGOUT_REQUEST_SUCCESS
} from "../constant/auth";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_REQUEST_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case LOAD_USER_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload
      };
    case LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: localStorage.setItem("token", ""),
        error: action.payload,
      };
    case LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: ""
      };
    default:
      return state;
  }
}
