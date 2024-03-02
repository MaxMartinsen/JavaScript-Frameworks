import React, { useEffect, useState } from 'react';
import './App.css';


function usePerson() {
  const [firstName, setFirstName] = useState('');

  function greetPerson() {
    console.log(`Hello ${firstName}`);
  }
  return { setFirstName, greetPerson };
}

function App() {
  const { greetPerson, setFirstName } = usePerson();
  useEffect(() => {
    setFirstName('Ola');
    greetPerson();
  }, [setFirstName, greetPerson]);

  return (
    <div className='App'>
      <header className='App-header'>
        <div>Hook example</div>
      </header>
    </div>
  );
}

export default App;