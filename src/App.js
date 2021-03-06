import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import 'antd/dist/antd.css';
import './assets/scss/_base-index.scss';
import Routes from './routes/index';
import configureStore from './redux/configureStore';

const store = configureStore();

function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    </div>
  );
}

export default App;

if (module.hot) {
  module.hot.accept();
}
