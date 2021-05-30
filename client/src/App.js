import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from './pages/Home'
import AddHabit from './pages/AddHabit'
import Login from './pages/Login'

import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/addhabit" component={AddHabit} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
