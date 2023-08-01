import axios from "axios";
import {
  GET_CONNECTIONS_REQUEST,
  GET_CONNECTIONS_REQUEST_FAIL,
  GET_CONNECTIONS_REQUEST_SUCCESS,
} from "../constant/connections";

export const getConnectionData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CONNECTIONS_REQUEST });
    const { data } = await axios.get(
      "https://44er9l7trd.execute-api.us-east-1.amazonaws.com/dev/connections"
    );
    dispatch({ type: GET_CONNECTIONS_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_CONNECTIONS_REQUEST_FAIL, payload: error });
  }
};
