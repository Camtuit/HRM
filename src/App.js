import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';
import DarkLayer from './components/DarkLayer';
import UserList from './pages/UserList';
import Login from './pages/Login';

import UserRegist from './pages/UserRegist';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/userlist">
            <UserList />
          </Route>

          <Route path="/userregist">
            <UserRegist />
          </Route>

    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
