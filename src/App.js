import { useReducer } from 'react';
import './App.css'

function reducer(state, action) {
  if (action.type === 'attack') {
    const isCriticalHit = Math.random() < 0.5; // 50% chance
    const damage = isCriticalHit ? 40 : 10; // Critical hit or normal hit
    return { ...state, enemyHitPoints: Math.max(0, state.enemyHitPoints - damage) };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { enemyHitPoints: 100 });

  return (
    <div className='App'>
      <header className='App-header'>
      <button onClick={() => {
        dispatch({ type: 'attack' })
      }}>
        Attack
      </button>
      <p>Enemy hit points: {state.enemyHitPoints}.</p>
      </header>
    </div>
  );
}
