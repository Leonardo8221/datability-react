import axios from "axios";
import {
  CREATE_CHECKIN_REQUEST,
  CREATE_CHECKIN_REQUEST_ERROR,
  CREATE_CHECKIN_REQUEST_SUCCESS,
} from "../constant/check-in";
import { userPool } from "../../utils/aws-config";
export const createCheckIn = (data) => async (dispatch) => {
  dispatch({
    type: CREATE_CHECKIN_REQUEST,
  });

  try {
    var cognitoUser = userPool.getCurrentUser();

    cognitoUser.getUserAttributes(function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      // Find the 'email_verified' attribute in the result array
      const clientUUIDProp = result.find(
        (attr) => attr.getName() === "custom:client_uuid"
      );

      if (clientUUIDProp) {
        const clientUUIDValue = clientUUIDProp.getValue();
        console.log("client_uuid has value:", clientUUIDValue);
      } else {
        console.log("client_uuid attribute not found.");
      }
    });
    const response = await axios.post(
      "https://44er9l7trd.execute-api.us-east-1.amazonaws.com/dev/checkin",
      data
    );
    dispatch({
      type: CREATE_CHECKIN_REQUEST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CHECKIN_REQUEST_ERROR,
      payload: error.message,
    });
  }
};