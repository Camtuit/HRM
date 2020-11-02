import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';
import UserList from './pages/UserList';
import Login from './pages/Login';

import UserRegist from './pages/UserRegist';
import HolidayList from './pages/HolidayList';
import SkillRegist from './pages/SkillRegist';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/users" component={UserList} />
          
          <Route exact path="/userregist" component={UserRegist} />
           
          <Route exact path="/holiday" component={HolidayList} /> 

          <Route exact path="/skillregist" component={SkillRegist} />   
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
