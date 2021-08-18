const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'; // SEND_MESSAGE
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'; // UPDATE_NEW_MESSAGE_BODY

export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE}); // sendMessageCreator
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text}); // updateNewMessageBodyCreator

const initialState = {
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
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText; // action.body
      return state;
    case SEND_NEW_MESSAGE:
      const newMessage = {
        id: 6,
        text: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
