export const AwsConfigAuth = {
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: 'us-east-1_n9kuj2vYy',
    userPoolWebClientId: '1k5m7ubtbja69k2skp40um693i',
    cookieStorage: {
        domain: process.env.REACT_APP_AUTH_COOKIE_STORAGE_DOMAIN,
        path: "/",
        expires: 365,
        sameSite: "strict",
        secure: true,
    },
    authenticationFlowType: "USER_SRP_AUTH",
};