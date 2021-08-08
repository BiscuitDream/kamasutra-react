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
      newMessageText: 'new message',
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

  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this.getState());
  // },
  // addPost() {
  //   const newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };
  //
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this.getState());
  // },
  // updateNewMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callSubscriber(this.getState());
  // },
  // sendNewMessage() {
  //   const newMessage = {
  //     id: 6,
  //     text: this._state.dialogsPage.newMessageText,
  //   };
  //
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = '';
  //   this._callSubscriber(this.getState());
  // },
  dispatch(action) { // { {type:}  // пихать туда весь код функции бред, лучше вызывать их, да и if else тоже бред
    if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this.getState());
    }
    else if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this.getState());
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this.getState());
    }
    else if (action.type === 'SEND-NEW-MESSAGE') {
      const newMessage = {
        id: 6,
        text: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this.getState());
    }
  },
};

window.store = store; // не нужно, просто для отладки

export default store;
