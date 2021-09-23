import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => { // TODO вспомнить, как делал высоту минимум на весь вьюпорт гридами и флексами
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/profile/:userId?"
                 render={() => <ProfileContainer />} />
          <Route path="/dialogs"
                 render={() => <DialogsContainer />} />
          <Route path="/users"
                 render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Redirect from="/" to="/profile" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
