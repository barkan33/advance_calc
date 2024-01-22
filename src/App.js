import logo from './logo.svg';
import './App.css';
import CCalc from './Class Comps/CCCalc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCalc/>
      </header>
    </div>
  );
}

export default App;
