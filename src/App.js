import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import './App.css';
import 'antd/dist/antd.css';
import './assets/scss/_base-index.scss';
import Routes from './routes/index';

import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Routes />
    </ReduxProvider>
  );
}

export default App;
