import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 15 },
  { id: 2, message: 'It\'s my first post', likesCount: 20 },
];

const dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Viktor' },
  { id: 6, name: 'Valera' },
];

const messagesData = [
  { id: 1, text: 'Hi'},
  { id: 2, text: 'How is your Yo?'},
  { id: 3, text: 'Yo!'},
  { id: 4, text: 'Yo!'},
  { id: 5, text: 'Yo!'},
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
