import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Signup from './components/Signup'
import Login from './components/Login'
import Album from './components/Album'
import Upload from './components/Upload'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/album" component={Album} />
        <Route path="/login" component={Login} />
        <Route path="/upload" component={Upload} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
