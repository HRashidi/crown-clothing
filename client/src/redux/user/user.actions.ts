import UserActionTypes from './user.types'
import { CredentialType, UserType, ErrorType } from '../../modules/commonTypes';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword: CredentialType) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});


export const signInSuccess = (userInfo: UserType) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: userInfo
});

export const signInFailure = (error: ErrorType) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESION
});

export const signOutStart = () =>({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () =>({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: ErrorType) =>({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (userCredentials: CredentialType) =>({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = ({user, additionalData}: {user: UserType, additionalData: any}) =>({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
});

export const signUpFailure = (error: ErrorType) =>({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});
