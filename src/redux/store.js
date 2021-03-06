import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
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
      newMessageText: '', // newMessageBody
    },
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer; // TODO observer pattern // publisher-subscriber pattern// почитать про паттерн
  },

  dispatch(action) { // { {type:}  // пихать туда весь код функции бред, лучше вызывать их, да и if else тоже бред
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this.getState());
  },
};

window.store = store; // не нужно, просто для отладки

export default store;
