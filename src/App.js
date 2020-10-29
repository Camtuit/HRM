
import './App.css';
import 'antd/dist/antd.css';
import DarkLayer from './components/DarkLayer';
import UserList from './pages/UserList.js';
import Login from './pages/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserRegist from './pages/UserRegist';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact="true" path="/">
              <Login/>
          </Route>

          <Route  path="/userlist">
            <UserList />
          </Route>
          
          <Route  path="/userregist">
            <UserRegist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
