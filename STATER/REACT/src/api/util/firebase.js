/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-console */
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

export const initFirebase = () => {
  try {
    return firebase.initializeApp(firebaseConfig);
  } catch (error) {
    console.log(error);
  }
};

export const getVerifyCaptcha = () => {
  try {
    return new Promise(resolve => {
      firebase.auth().languageCode = 'vi';
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
        },
      );
      resolve(window.recaptchaVerifier);
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const loginWithCode = async phoneNumber => {
  // eslint-disable-next-line
  getVerifyCaptcha();
  const appVerifier = window.recaptchaVerifier;
  window.confirmationResult = await firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier);
  return window.confirmationResult;
};

export const confirmCode = async code => {
  return window.confirmationResult.confirm(code);
};
