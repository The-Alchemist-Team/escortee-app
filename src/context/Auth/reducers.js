import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./constants";

import auth from "@react-native-firebase/auth";
export const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        user: null,
        isLoading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        isLoading: false,
        error: action.payload,
      };

    case REGISTER_REQUEST:
      return {
        user: null,
        isLoading: true,
        error: null,
      };

    case REGISTER_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        user: null,
        isLoading: false,
        error: action.payload,
      };
  }
};
