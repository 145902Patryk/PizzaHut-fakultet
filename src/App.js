import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Ok ;)
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

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
  render() {

    return (
        <div>
            <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
            {this.state.count}
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
            {this.state.counter > 9 && <h1>{`no wystarczy`}</h1>}
        </div>
    );
  }
}

export default Counter;
