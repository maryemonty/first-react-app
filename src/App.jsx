import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent text="Cliccami!"/>
      </header>
    </div>
  );
}

export default App;
