import {api} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET-AUTH-USER-DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, login, email, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
  const data = await api.me();
  if (data.resultCode === 0) {
    const {id, login, email} = data.data;
    dispatch(setAuthUserData(id, login, email, true)); // TODO можно еще профиль залогиненного юзера загрузить и отобразить что-нибудь напр аватар
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await api.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    const action = stopSubmit('login', {_error: message});
    dispatch(action);
  }
};

export const logout = () => async (dispatch) => {
  const data = await api.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;