import * as AWS from "aws-sdk/global";
import {
    CognitoUserPool,
  } from "amazon-cognito-identity-js";

AWS.config.region = process.env.REACT_APP_AWS_REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID, // your identity pool id here
});

var poolData = {
  UserPoolId: process.env.REACT_APP_AWS_USER_POOL_ID,
  ClientId: process.env.REACT_APP_AWS_CLIENT_ID,
};
export const userPool = new CognitoUserPool(poolData);