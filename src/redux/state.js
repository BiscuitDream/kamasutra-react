let rerenderEntireTree;

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 20 },
    ],
    newPostText: 'starting text',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Viktor' },
      { id: 6, name: 'Valera' },
    ],
    messages: [
      { id: 1, text: 'Hi'},
      { id: 2, text: 'How is your Yo?'},
      { id: 3, text: 'Yo!'},
      { id: 4, text: 'Yo!'},
      { id: 5, text: 'Yo!'},
    ],
    newMessageText: 'new message',
  },
};

window.state = state; // не нужно

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

// new message

export  const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const sendNewMessage = () => {
  const newMessage = {
    id: 6,
    text: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};

export default state;
