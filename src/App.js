import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';
import DarkLayer from './components/DarkLayer';
import UserList from './pages/UserList';
import Login from './pages/Login';

import UserRegist from './pages/UserRegist';
import HolidayList from './pages/HolidayList';
import SkillList from './pages/SkillList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/users" component={UserList} />
          
          <Route exact path="/userregist" component={UserRegist} />
           
          <Route exact path="/holiday" component={HolidayList} />
           
          <Route exact path="/skills" component={SkillList} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
