import cblogo from './cb-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cblogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.coinbase.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coinbase
        </a>
      </header>
    </div>
  );
}

export default App;
