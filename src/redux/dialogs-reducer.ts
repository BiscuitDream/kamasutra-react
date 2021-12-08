const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'; // SEND_MESSAGE

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  text: string;
};

export type InitialStateType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
};

const initialState: InitialStateType = {
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
  ]
};

const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      const newMessage = {
        id: 6,
        text: action.newMessageText,
      };
      return  {
        ...state,
        messages: [...state.messages, newMessage]
      };

    default:
      return state;
  }
};

type SendNewMessageActionType = {
  type: typeof SEND_NEW_MESSAGE;
  newMessageText: string;
}

export const sendNewMessageActionCreator = (newMessageText: string): SendNewMessageActionType => (
    {type: SEND_NEW_MESSAGE, newMessageText});

export default dialogsReducer;
