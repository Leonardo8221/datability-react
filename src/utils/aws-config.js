import {
    CognitoUserPool,
  } from "amazon-cognito-identity-js";

var poolData = {
  UserPoolId: "us-east-1_n9kuj2vYy",
  ClientId: "1k5m7ubtbja69k2skp40um693i",
};
export const userPool = new CognitoUserPool(poolData);