const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It\'s my first post', likesCount: 20 },
  ],
  newPostText: 'starting text',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    default:
      return state;
  }
};

export default profileReducer;
