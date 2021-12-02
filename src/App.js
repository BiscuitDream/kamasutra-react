import React from "react";
import {Switch, Route, Redirect, BrowserRouter, HashRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from './redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
  handleAllUnhandledRejection = (promiseRejectionEvent) => {
    alert('Some error occurred');
    // объект события имеет два специальных свойства:
    console.error(promiseRejectionEvent.promise); // [object Promise] - промис, который сгенерировал ошибку
    console.error(promiseRejectionEvent.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
}

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.handleAllUnhandledRejection);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleAllUnhandledRejection);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <React.Suspense fallback={<Preloader />}>
            <Switch>
              <Route path="/profile/:userId?"
                     render={() => <ProfileContainer/>}/>
              <Route path="/dialogs"
                     render={() => <DialogsContainer/>}/>
              <Route path="/users"
                     render={() => <UsersContainer/>}/>
              <Route path="/news" component={News}/>
              <Route path="/music" component={Music}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/login" component={Login}/>
              <Redirect from="/" to="/profile"/>
            </Switch>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJsApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default SamuraiJsApp;
