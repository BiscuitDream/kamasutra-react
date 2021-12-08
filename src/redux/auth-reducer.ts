import {api} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET-AUTH-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET-CAPTCHA-URL-SUCCESS';

export type InitialStateType2 = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null // if null, then captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

type SetAuthUserActionPayloadType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
}
type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA;
  payload: SetAuthUserActionPayloadType;
};
const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => (
    {type: SET_AUTH_USER_DATA, payload: {userId, login, email, isAuth}});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: {captchaUrl: string};
};
const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => (
    {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

type ResetCaptchaUrlActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: {captchaUrl: null};
};
const resetCaptchaUrl = (): ResetCaptchaUrlActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl: null}});

export const getAuthUserData = () => async (dispatch: any) => {
  const data = await api.me();
  if (data.resultCode === 0) {
    const {id, login, email} = data.data;
    dispatch(setAuthUserData(id, login, email, true)); // TODO можно еще профиль залогиненного юзера загрузить и отобразить что-нибудь напр аватар
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  const data = await api.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
    dispatch(resetCaptchaUrl());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    const action = stopSubmit('login', {_error: message});
    dispatch(action);
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
  }
};

export const logout = () => async (dispatch: any) => {
  const data = await api.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await api.getCaptchaUrl();
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
