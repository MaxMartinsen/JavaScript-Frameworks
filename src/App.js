import React from 'react';
import './App.css';

function Greeting() {
  const greetingText = 'Hi Ola Nordmann!'
  return (
    <h1>{greetingText}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
      </header>
    </div>
  );
}

export default App;
