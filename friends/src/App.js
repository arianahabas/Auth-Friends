import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import { LoginForm } from './components/LoginForm';
import { FriendsList } from './components/FriendsList'


function App() {

  return (
    <Router>
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item" to='/friends'>
              My Friends
            </Link>
      
            <Link class="navbar-item" to='/login'>
              Login
            </Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path='/login' component={LoginForm}/> 
        <PrivateRoute path='/friends' component={FriendsList}/>
      </Switch>

    </Router>

  );
}

export default App;
