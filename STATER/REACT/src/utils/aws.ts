import { CognitoIdentityServiceProvider } from 'aws-sdk'

export const refreshAWSCognitoToken = async (
  refreshToken: string
): Promise<CognitoIdentityServiceProvider.InitiateAuthResponse> => {
  return new Promise((resolve, reject) => {
    const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider()
    cognitoIdentityServiceProvider.initiateAuth(
      {
        AuthFlow: 'REFRESH_TOKEN_AUTH',
        ClientId: process.env.REACT_APP_AWS_USER_POOL_WEB_CLIENT_ID || '',
        AuthParameters: {
          REFRESH_TOKEN: refreshToken
        }
      },
      function(err, data) {
        if (err) {
          reject(err)
        }
        resolve(data)
      }
    )
  })
}
