import logo from './logo.svg';
import './App.css';
import Heading from './Header';
import Btn from './Btn';

function App() {
  return (
    <div className="App">
      <Heading />
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
