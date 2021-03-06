// React(UI), Redux(BLL), Redux Thunk, CSS Modules, axios, react-router-dom(Switch, Route, NavLink, Link, withRouter, Redirect), Redux Form, selectors, reselect
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJsApp from './App';
// import {BrowserRouter} from "react-router-dom";
// import store from './redux/redux-store';
// import {Provider} from "react-redux";

// setInterval(() => {
//   store.dispatch({type: 'FAKE'}); // TODO для понимания reselect, удалить потом
// }, 1000);

ReactDOM.render(
  <React.StrictMode>
    <SamuraiJsApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
