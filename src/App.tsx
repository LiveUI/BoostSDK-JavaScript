import * as React from 'react';
import { Boost, Config } from './connector/Boost';
import './App.css';

const logo = require('./logo.svg');

let boost = new Boost(new Config());

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Boost TypeScript SDK</h1>
        </header>
        <p className="App-intro">
        <button onClick={boost.start}>Click here</button>
        </p>
      </div>
    );
  }
}

export default App;
