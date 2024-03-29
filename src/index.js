import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './components/store/store';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

