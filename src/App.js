import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Huuudovo.com live!</h1>
      </header>
      <content>
        under construction
      </content>
      <footer>
        <span>&copy; Huuuda</span>
        <span>v{process.env.REACT_APP_VERSION}</span>
      </footer>
    </div>
  );
}

export default App;
