import React from 'react';
import logo from './logo.svg';
import MainLay from './components/mainLay'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <MainLay></MainLay>
      </main>
    </div>
  );
}

export default App;
