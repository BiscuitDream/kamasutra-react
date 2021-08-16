const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'; // SEND_MESSAGE
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'; // UPDATE_NEW_MESSAGE_BODY

export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE}); // sendMessageCreator
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text}); // updateNewMessageBodyCreator

const dialogsReducer = (state, action) => {
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
