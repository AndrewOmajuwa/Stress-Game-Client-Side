import React from 'react';
import './App.css';
import ScoreBoard from './components/ScoreBoard'
import Letter from './components/Letter'
import StartButton from './components/StartButton'
import Answer from './components/Answer'

function App() {
  return (
    <div className="App">
      <ScoreBoard />
      <Letter />
      {/* <StartButton /> */}
      <Answer />
    </div>
  );
}

export default App;
