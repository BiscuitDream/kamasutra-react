import {api} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET-AUTH-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET-CAPTCHA-URL-SUCCESS';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
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

const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, login, email, isAuth}});
const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});
const resetCaptchaUrl = () => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl: null}});

export const getAuthUserData = () => async (dispatch) => {
  const data = await api.me();
  if (data.resultCode === 0) {
    const {id, login, email} = data.data;
    dispatch(setAuthUserData(id, login, email, true)); // TODO можно еще профиль залогиненного юзера загрузить и отобразить что-нибудь напр аватар
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
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

export const logout = () => async (dispatch) => {
  const data = await api.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

const getCaptchaUrl = () => async (dispatch) => {
  const data = await api.getCaptchaUrl();
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
