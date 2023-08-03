import axios from "axios";
import {
  CREATE_CHECKIN_REQUEST,
  CREATE_CHECKIN_REQUEST_ERROR,
  CREATE_CHECKIN_REQUEST_SUCCESS,
} from "../constant/check-in";
import { userPool } from "../../utils/aws-config";
import { setNotification } from "./notification";

export const createCheckIn = (formdata) => async (dispatch) => {
  dispatch({
    type: CREATE_CHECKIN_REQUEST,
  });

  try {
    var cognitoUser = userPool.getCurrentUser();
    if (cognitoUser) {
      formdata = { ...formdata, clientId: cognitoUser.pool.clientId };
    }
    const response = await axios.post(
      "https://44er9l7trd.execute-api.us-east-1.amazonaws.com/dev/checkin",
      formdata
    );
    dispatch({
      type: CREATE_CHECKIN_REQUEST_SUCCESS,
      payload: response.data,
    });

    dispatch(setNotification("success", "You are now checked-in"));

  } catch (error) {
    dispatch({
      type: CREATE_CHECKIN_REQUEST_ERROR,
      payload: error.message,
    });
    dispatch(setNotification("error", error.message));
  }
};
