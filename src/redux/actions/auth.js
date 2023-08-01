import * as AWS from "aws-sdk/global";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import jwtDecode from "jwt-decode";
import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  LOAD_USER_REQUEST_SUCCESS,
  LOGOUT_REQUEST_SUCCESS,
} from "../constant/auth";

AWS.config.region = process.env.REACT_APP_AWS_REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID, // your identity pool id here
  // Logins: {
  //   // Change the key below according to the specific region your user pool is in.
  //   "cognito-idp.us-east-1.amazonaws.com/us-east-1_n9kuj2vYy": result
  //     .getIdToken()
  //     .getJwtToken(),
  // },
});

var poolData = {
  UserPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
  ClientId: process.env.REACT_APP_AWS_CLIENT_ID,
};
var userPool = new CognitoUserPool(poolData);

export const loadUser = (cognitoUser) => async (dispatch) => {
  try {

    cognitoUser = userPool.getCurrentUser();
    cognitoUser.getSession(function (err, session) {
      // dispatch(getCurrentUserConfirmation(false))
      if (err) {
        console.log(err);
      } else {
        const user = {
          username: jwtDecode(session.accessToken.jwtToken).username,
          email: jwtDecode(session.idToken.jwtToken).email
        }
        dispatch({
          type: LOAD_USER_REQUEST_SUCCESS,
          payload: user,
        });
      }
    });
  } catch (error) {
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
        dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: result.getAccessToken().getJwtToken()});
        dispatch(loadUser(cognitoUser));
      },
      newPasswordRequired: function (userAttributes, requiredAttributes) {
        console.log("new password required");
        delete userAttributes.email_verified;
      },
      onFailure: function (err) {
        dispatch({ type: LOGIN_REQUEST_FAIL, payload: err });
      },
    });
  };
};

export const logout = () => async (dispatch) => {
  try {
    console.log('logged out')
    var cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser)
    cognitoUser.signOut();

    dispatch({ type: LOGOUT_REQUEST_SUCCESS });
    localStorage.removeItem("token");
  } catch (error) {
    console.log("Logout Error", error)
  }
};
