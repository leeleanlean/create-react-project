import {Button} from 'antd';
import logo from './assets/svg/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <h1>{process.env.REACT_APP_BASE_URL}</h1>
        <Button type="primary">antd</Button>
      </header>
    </div>
  );
}

export default App;
