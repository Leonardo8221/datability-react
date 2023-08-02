import {
  CREATE_CHECKIN_REQUEST,
  CREATE_CHECKIN_REQUEST_ERROR,
  CREATE_CHECKIN_REQUEST_SUCCESS,
} from "../constant/check-in";

const initialState = {
  // Initial state values go here
  loading: false,
  checkin: null,
  error: null,
};

export default function CheckIn(state = initialState, action) {
  switch (action.type) {
    case CREATE_CHECKIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CHECKIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        checkin: action.payload,
      };
    case CREATE_CHECKIN_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
