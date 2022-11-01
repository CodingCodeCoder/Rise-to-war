import './App.css';
import Factions from './components/Factions/Factions';

function App() {
  return (
    <div className="App">
      <h1>Welcome Tactician</h1>
      <h2>Select a faction:</h2>
      <div className='faction-selector'>
        <Factions />
      </div>
    </div>
  );
}

export default App;
