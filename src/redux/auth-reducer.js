import {api} from "../api/api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

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
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  }
};

const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}});

export const checkAuth = () => {
  return (dispatch) => {
    api.checkAuth()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data;
          dispatch(setAuthUserData(id, login, email)); // TODO можно еще профиль залогиненного юзера загрузить и отобразить что-нибудь напр аватар
        }
      });
  }
};

export default authReducer;
