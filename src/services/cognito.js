import { CognitoIdentityProviderClient, SignUpCommand, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';
import { cognitoConfig } from '../config/cognito-config';

const client = new CognitoIdentityProviderClient({ region: cognitoConfig.region });

/**
 * Sign up a new user with AWS Cognito
 * @param {string} username - The username of the new user
 * @param {string} password - The password of the new user
 * @param {string} email - The email address of the new user
 * @returns {Promise} - A promise that resolves to the sign-up response
 */
export const signUp = async (username, password, email) => {
  const params = {
    ClientId: cognitoConfig.ClientId,
    Username: username,
    Password: password,
    UserAttributes: [
      {
        Name: 'email',
        Value: email
      },
    ]
  };

  const command = new SignUpCommand(params);

  try {
    const response = await client.send(command);
    console.log('Sign-up successful', response);
    return response;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

/**
 * Sign in an existing user with AWS Cognito
 * @param {string} email - The username of the user
 * @param {string} password - The password of the user
 * @returns {Promise} - A promise that resolves to the sign-in response
 */
export const signIn = async (email, password) => {
  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: cognitoConfig.ClientId,
    AuthParameters: {
      Email: email,
      PASSWORD: password
    }
  };

  const command = new InitiateAuthCommand(params);

  try {
    const response = await client.send(command);
    console.log('Sign-in successful', response);
    return response;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};
