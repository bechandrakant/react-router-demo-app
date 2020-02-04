import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './About'
import Shop from './Shop'
import Nav from './Nav'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/shop' exact component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
