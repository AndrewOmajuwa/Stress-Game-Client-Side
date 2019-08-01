import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Routes from './components/Routes'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <Routes />
        </main>
      </div>
    </Provider>
  );
}

export default App;
