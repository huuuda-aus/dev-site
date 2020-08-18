import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home/Home';
import Chat from './chat/Chat';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Huuudovo.com live!</h1>
      </header>
      <content>
        <Router>
          <sidebar>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chat">Chat</Link>
              </li>
            </ul>
          </sidebar>
          <article>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/chat">
                <Chat />
              </Route>
            </Switch>
          </article>
        </Router>
      </content>
      <footer>
        <span>&copy; Huuuda</span>
        <span>v{process.env.REACT_APP_VERSION}</span>
      </footer>
    </div>
  );
}

export default App;
