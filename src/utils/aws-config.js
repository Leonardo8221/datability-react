import * as AWS from "aws-sdk/global";
import {
    CognitoUserPool,
  } from "amazon-cognito-identity-js";

AWS.config.region = "us-east-1";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:4f690679-91cd-4953-9d7e-75fd62d77d4c",
});

var poolData = {
  UserPoolId: "us-east-1_n9kuj2vYy",
  ClientId: "1k5m7ubtbja69k2skp40um693i",
};
export const userPool = new CognitoUserPool(poolData);