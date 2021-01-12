import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_8WMsl8AMg',
  ClientId: process.env.AWS_CLIENT_ID
};

export default new CognitoUserPool(poolData);
