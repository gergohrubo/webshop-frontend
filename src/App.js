import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import SignupContainer from './components/SignupContainer'
import LoginContainer from './components/LoginContainer'
import AlbumContainer from './components/AlbumContainer'
import UploadContainer from './components/UploadContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={SignupContainer} />
        <Route path="/album" component={AlbumContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/upload" component={UploadContainer} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
