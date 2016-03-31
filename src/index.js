require('babel-polyfill');
require('./index.css');
require('./../assets/img/logo.jpg');
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';

ReactDOM.render(<Main />, document.getElementById('root'));
