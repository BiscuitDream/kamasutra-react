import {api} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, UserProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const UPLOAD_PHOTO_SUCCESS = 'UPLOAD-PHOTO-SUCCESS';

// export type InitialStateType = {
//   posts: Array<PostType>;
//   userProfile: UserProfileType | null;
//   status: string;
// };

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first post', likesCount: 20 },
  ] as Array<PostType>,
  userProfile: null as UserProfileType | null,
  status: '' as string
};

export type InitialStateType = typeof initialState;

const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
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
        } as UserProfileType
      };

    default:
      return state;
  }
};

type addPostActionType = {type: typeof ADD_POST; newPostText: string};
export const addPostActionCreator = (newPostText: string): addPostActionType => ({type: ADD_POST, newPostText});

type SetUserProfileActionType = {type: typeof  SET_USER_PROFILE; userProfile: UserProfileType};
const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, userProfile: profile});

type SetStatusActionType = {type: typeof SET_STATUS; status: string};
const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});

type DeletePostActionType = {type: typeof DELETE_POST, postId: number};
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});

type UploadPhotoSuccessActionType = {type: typeof UPLOAD_PHOTO_SUCCESS, photos: PhotosType};
const uploadPhotoSuccess = (photos: PhotosType): UploadPhotoSuccessActionType => ({type: UPLOAD_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const data = await api.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  const data = await api.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const data = await api.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    // debugger;
  }
};

export const uploadPhoto = (file: File) => async (dispatch: any) => {
  const data = await api.uploadPhoto(file);
  if (data.resultCode === 0) {
    dispatch(uploadPhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile: UserProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const data = await api.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    const action = stopSubmit('editProfile', {_error: message});
    dispatch(action);
    throw message;
  }
};

export default profileReducer;
