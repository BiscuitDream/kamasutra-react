import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText, sendNewMessage, updateNewMessageText} from './redux/state';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             sendNewMessage={sendNewMessage}
             updateNewMessageText={updateNewMessageText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
