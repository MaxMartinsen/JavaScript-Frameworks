import React, { useReducer } from 'react';
import './App.css';

const initialState = { enemyHitPoints: 100 };

function reducer(state, action) {
  switch (action.type) {
    case 'attack':
      // Generate a random number between 0 and 1
      const isCriticalHit = Math.random() < 0.5; // 50% chance for simplicity
      const damage = isCriticalHit ? 40 : 10; // 40 damage for critical hit, 10 for normal
      return { ...state, enemyHitPoints: state.enemyHitPoints - damage };
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
      <label>Enemy Hit Points: {state.enemyHitPoints}</label>
        <button onClick={() => dispatch({ type: 'attack' })}>Attack</button>
      </header>
    </div>
  );
}

export default App;
