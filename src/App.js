import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';
import DarkLayer from './components/DarkLayer';
import UserList from './pages/UserList';
import Login from './pages/Login';

import UserRegist from './pages/UserRegist';
<<<<<<< HEAD
import SkillRegist from './pages/SkillRegist';
=======
import HolidayList from './pages/HolidayList';
>>>>>>> a1579f846241a7885456100be0c58d26920add73

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />

<<<<<<< HEAD
          <Route exact path="/userlist">
            <UserList />
          </Route>

          <Route path="/userregist">
            <UserRegist />
          </Route>

          <Route exact path="/skillregist">   
            <SkillRegist />
          </Route>
          
=======
          <Route exact path="/userlist" component={UserList} />
          
          <Route exact path="/userregist" component={UserRegist} />
           
          <Route exact path="/holidaylist" component={HolidayList} /> 
>>>>>>> a1579f846241a7885456100be0c58d26920add73
        </Switch>
      </Router>
    </div>
  );
}

export default App;
