import './App.css';
import React from 'react';
import * as Styles from './App.styles'
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.color.primary};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.color.secondary};
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Styles.BaseButton>Base button</Styles.BaseButton>
      <Styles.PrimaryButton>Base button</Styles.PrimaryButton>
      <div>
        <Button>Click me</Button>
      </div>
      </header>
    </div>
  );
}

export default App;
