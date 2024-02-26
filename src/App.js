import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // This function will run when the component mounts
    const intervalId = setInterval(() => {
      console.log('Timer running');
    }, 1000); // Change 1000 to the desired interval in milliseconds

    // Cleanup function
    return () => {
      clearInterval(intervalId); // This will clear the interval when the component unmounts
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <div className="App">
      <header className="App-header">
        <p>Check the console to see the timer logs.</p>
      </header>
    </div>
  );
}

export default App;
