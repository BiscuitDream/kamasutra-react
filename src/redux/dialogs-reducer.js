const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'; // SEND_MESSAGE
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'; // UPDATE_NEW_MESSAGE_BODY

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
      return  {
        ...state,
        newMessageText: action.newText
      };

    case SEND_NEW_MESSAGE:
      const newMessage = {
        id: 6,
        text: state.newMessageText,
      };
      return  {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      };

    default:
      return state;
  }
};

export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE}); // sendMessageCreator
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text}); // updateNewMessageBodyCreator

export default dialogsReducer;
