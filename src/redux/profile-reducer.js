import {api} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const UPLOAD_PHOTO_SUCCESS = 'UPLOAD-PHOTO-SUCCESS';

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

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };

    case UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.photos
        }
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, userProfile: profile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
const uploadPhotoSuccess = (photos) => ({type: UPLOAD_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
  const data = await api.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  const data = await api.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await api.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const uploadPhoto = (file) => async (dispatch) => {
  const data = await api.uploadPhoto(file);
  if (data.resultCode === 0) {
    dispatch(uploadPhotoSuccess(data.data.photos));
  }
};

export default profileReducer;
