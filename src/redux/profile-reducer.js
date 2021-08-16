const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


const profileReducer = (state, action) => {
  if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  else if (action.type === ADD_POST) {
    const newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0,
    };
    state.posts.push(newPost);
    state.newPostText = '';
  }

  return state;
};

export default profileReducer;
