import * as AWS from "aws-sdk/global";
import {
    CognitoUserPool,
  } from "amazon-cognito-identity-js";

AWS.config.region = process.env.REACT_APP_AWS_REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID, // your identity pool id here
});

var poolData = {
  UserPoolId: 'us-east-1_n9kuj2vYy',
  ClientId: '1k5m7ubtbja69k2skp40um693i',
};
export const userPool = new CognitoUserPool(poolData);