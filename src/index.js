import 'babel-polyfill';
import './index.css';
import './../assets/img/logo.jpg';
import React from 'react';
import {render} from 'react-dom';
import store from './store/index.js';
import { Provider } from 'react-redux';
import Main from './containers/Main';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)