import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} /> 
      </Switch>
    </>
  );
}

export default App;
