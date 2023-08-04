import React from "react";
import logo from './logo.svg';
import './App.css';
import Heading from './Header';
import Btn from './Btn';
import RegisterForm from './RegisterForm';
import Fruits from './Fruits';
import FruitsCounter from './FruitsCounter';

function App() {
  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
    { fruitName: 'plum', id: 4 },
  ]);

  return (
    <div className="App">
      <Heading />
      <RegisterForm />
      <div className='fruits'>
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits} />
      </div>
      <header className="App-header">
        <Btn />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
