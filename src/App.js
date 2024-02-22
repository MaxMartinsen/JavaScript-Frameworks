import './App.css';

function Person(props) {
  return (
    <div className='flex'>
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person firstName = 'Max' lastName = 'Martinsen' city = 'KRS'/>
        <Person firstName = 'Ket' lastName = 'Martinsen' city = 'SVG'/>
      </header>
    </div>
  );
}

export default App;
