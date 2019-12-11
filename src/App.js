import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import SignupContainer from './components/SignupContainer'
import AlbumContainer from './components/AlbumContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignupContainer} />
        <Route path="/album" component={AlbumContainer} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
