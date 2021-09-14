const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first post', likesCount: 20 },
  ],
  newPostText: 'starting text',
  userProfile: null // may be profile
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return  {
        ...state,
        newPostText: action.newText
      };

    case ADD_POST: // TODO наверно лучше сразу копировать весь стейт
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, userProfile: profile}); // TODO может просто userProfile

export default profileReducer;
