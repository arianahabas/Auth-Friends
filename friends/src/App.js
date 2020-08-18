import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import './App.css';
import { LoginForm } from './components/LoginForm';
import { FriendsList } from './components/FriendsList'

function App() {

  return (
    <div className="App">
      <Router>

        <nav>
          <Link to='/login'> Login </Link>
          <Link to='/friends'> Friends </Link>
        </nav>
        <Switch>
          <Route path='/login' component={LoginForm}/>
          <Route path='/friends' component={FriendsList}/>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
