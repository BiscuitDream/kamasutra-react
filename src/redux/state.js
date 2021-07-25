const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 15 },
      { id: 2, message: 'It\'s my first post', likesCount: 20 },
    ],
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
  },
};

export default state;