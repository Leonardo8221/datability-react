import {
  GET_CONNECTIONS_REQUEST,
  GET_CONNECTIONS_REQUEST_FAIL,
  GET_CONNECTIONS_REQUEST_SUCCESS,
} from "../constant/connections";

const initialState = {
  connections: [],
  isLoading: false,
  error: null,
};

export default function Connection(state = initialState, action) {
  switch (action.type) {
    case GET_CONNECTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CONNECTIONS_REQUEST_SUCCESS:
      return {
        ...state,
        connections: action.payload,
        isLoading: false,
      };
    case GET_CONNECTIONS_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
