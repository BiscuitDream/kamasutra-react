import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

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

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/profile" render={() => <Profile postsData={postsData} />} />
          <Route path="/dialogs" render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          {/*<Redirect from="/" to="/profile" />*/}
        </Switch>
      </div>
    </div>
  );
}

export default App;
