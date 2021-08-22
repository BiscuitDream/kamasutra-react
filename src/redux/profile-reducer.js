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
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
      }
    case ADD_POST: { // TODO наверно лучше сразу копировать весь стейт
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      const stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    default:
      return state;
  }
};

export default profileReducer;
