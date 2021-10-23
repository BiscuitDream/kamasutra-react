import {api} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first post', likesCount: 20 },
  ],
  userProfile: null, // may be profile
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: // TODO наверно лучше сразу копировать весь стейт
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, userProfile: profile}); // TODO может просто userProfile
const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    api.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => (dispatch) => {
  api.getStatus(userId).then(data => {
    dispatch(setStatus(data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  api.updateStatus(status).then(data => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
