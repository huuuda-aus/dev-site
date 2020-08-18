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
        {`${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`}
      </footer>
    </div>
  );
}

export default App;
