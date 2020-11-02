import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
<<<<<<< HEAD

import store from './store/store';
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
 
  document.getElementById('root')
=======
=======
>>>>>>> 47994254dc8ad22144452bb7d8ba0baffb2d09ca
import  { Provider } from 'react-redux';
import store from './store/store';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
>>>>>>> 4799425... fix SkillTable
);
