import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { userPool } from "../../utils/aws-config";
import jwtDecode from "jwt-decode";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOAD_USER_REQUEST_SUCCESS,
  LOGOUT_REQUEST_SUCCESS,
} from "../constant/auth";
import { setNotification } from "./notification";

export const loadUser = () => async (dispatch) => {
  try {
    const cognitoUser = userPool.getCurrentUser();
    cognitoUser.getSession(function (err, session) {
      // dispatch(getCurrentUserConfirmation(false))
      if (err) {
        console.log(err);
      } else {
        const user = {
          username: jwtDecode(session.accessToken.jwtToken).username,
          email: jwtDecode(session.idToken.jwtToken).email,
        };
        dispatch({
          type: LOAD_USER_REQUEST_SUCCESS,
          payload: user,
        });
      }
    });
  } catch (error) {
    dispatch(setNotification("error", error));
    console.log(error);
  }
};

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    var authenticationData = {
      Username: username,
      Password: password,
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);

    var userData = {
      Username: username,
      Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        localStorage.setItem("token", result.getAccessToken().getJwtToken());
        dispatch({
          type: LOGIN_REQUEST_SUCCESS,
          payload: result.getAccessToken().getJwtToken(),
        });
        dispatch(loadUser());
      },
      newPasswordRequired: function (userAttributes, requiredAttributes) {
        console.log("new password required");
        dispatch(setNotification("warning", "New password required"));
        delete userAttributes.email_verified;
      },
      onFailure: function (err) {
        dispatch(setNotification("error", err.message));
        dispatch({ type: LOGIN_REQUEST_FAIL, payload: err });
      },
    });
  };
};

export const logout = () => async (dispatch) => {
  try {
    console.log("logged out");
    var cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser);
    cognitoUser.signOut();

    dispatch({ type: LOGOUT_REQUEST_SUCCESS });
    localStorage.removeItem("token");
  } catch (error) {
    console.log("Logout Error", error);
    dispatch(setNotification("error", "Logout Error"));
  }
};
