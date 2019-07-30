import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import ScoreBoard from './components/ScoreBoard'
import Letter from './components/Letter'
import StartButton from './components/StartButton'
import Answer from './components/Answer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <ScoreBoard />
      <Letter />
      {/* <StartButton /> */}
      <Answer />
    </div>
    </Provider>
  );
}

export default App;
