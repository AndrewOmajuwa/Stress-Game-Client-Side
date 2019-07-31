import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import ScoreBoard from './components/ScoreBoard'
import Letter from './components/Letter'
import Timer from './components/Timer'
import Answer from './components/Answer'
import Countries from './components/Countries'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <ScoreBoard />
      <Letter />
      <Timer />
      <Answer />
      <Countries />
    </div>
    </Provider>
  );
}

export default App;
