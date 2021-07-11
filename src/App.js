import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://www.vhv.rs/dpng/d/573-5732595_logo-maker-shop-make-your-logo-in-5.png" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://www.markgray.com.au/images/gallery/large/desert-light.jpg" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
