import React from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [value, setvalue] = useLocalStorage('name', "");
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={value} onChange={(event) => setvalue(event.target.value)} />
  <h2>Name: {value}</h2>

      </header>
    </div>
  );
}

export default App;
