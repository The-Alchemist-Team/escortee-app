import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "react-native-google-signin";
// import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./constants";

export const loginUser = (dispatch, payload) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: LOGIN_REQUEST });
    const { email, password } = payload;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        resolve(user);
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
        reject(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        );
      });
  });
};

export const registerUser = (dispatch, payload) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: REGISTER_REQUEST });
    const { email, password } = payload;
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: REGISTER_SUCCESS, payload: user });
        resolve(user);
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILURE,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        });
        reject(err);
      });
  });
};

export const googleLogin = (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      GoogleSignin.configure({
        webClientId:
          "1016502809821-hb00bk6iidch454vhpjqvapdtsbcegv6.apps.googleusercontent.com",
      });
      await GoogleSignin.hasPlayServices();
      const { idToken, user } = await GoogleSignin.signIn();
      const credentials = auth.GoogleAuthProvider.credential(idToken);
      const firebaseCredentials = await auth().signInWithCredential(
        credentials
      );
      resolve(user);
      dispatch({ type: LOGIN_SUCCESS, payload: { user, firebaseCredentials } });
    } catch (err) {
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
      console.log(err);
      reject(err);
    }
  });
};

export const facebookLogin = (dispatch) => {
  // return new Promise(async (resolve, reject) => {
  //   try {
  //     dispatch({ type: LOGIN_REQUEST });
  //     const result = await LoginManager.logInWithPermissions([
  //       "public_profile",
  //       "email",
  //     ]);
  //     if (result.isCancelled) {
  //       throw "User cancelled the login process";
  //     }
  //     const data = await AccessToken.getCurrentAccessToken();
  //     if (!data) {
  //       throw "Something went wrong obtaining access token";
  //     }
  //     const facebookCredential = auth.FacebookAuthProvider.credential(
  //       data.accessToken
  //     );
  //     const firebaseCredentials = await auth().signInWithCredential(
  //       facebookCredential
  //     );
  //     dispatch({ type: LOGIN_SUCCESS, payload: user });
  //   } catch (error) {
  //     dispatch({ type: LOGIN_FAILURE, payload: error.message });
  //     reject(error);
  //   }
  // });
};
