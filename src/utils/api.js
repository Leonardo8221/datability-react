import axios from "axios";
import store from "../redux/store";
// Create an instance of axios
const api = axios.create(
  {
    baseURL: "https://44er9l7trd.execute-api.us-east-1.amazonaws.com/dev",
  },
  
);

api.defaults.headers.common["Content-Type"] = "application/json";

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      // store.dispatch({ type: LOGOUT })
    }
    return Promise.reject(err);
  }
);

export default api;
