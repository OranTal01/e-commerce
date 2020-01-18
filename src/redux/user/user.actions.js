import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const goggleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const goggleSignInSuccess = (user) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const goggleSignInFailure = error => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START
});

export const emailSignInSuccess = userAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: userAndPassword
});

export const emailSignInFailure = error => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
});