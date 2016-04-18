import React, {Component} from 'react';
import store from '../store/index.js'
import {Provider} from 'react-redux';
import DateTime from './dateTime.js';
import UserState from './userState.js';
import AsideButton from './asideButton.js';
import MainRender from './mainRender.js';


export default class Main extends Component {
  render() {
    return (
      <div>
      <header id="logoArea">
      <img id="logo" src="./logo.jpg" alt="logo" />
      <span id="logoTitle">正法寶藏工作室</span>
      <span id="titleRight">
        <div id="date">
          <DateTime />
        </div>
        <div id="userState">
          <UserState />
        </div>
      </span>
      </header>
      <div id="main">
      <aside id="aside">
        <AsideButton />
      </aside>
      <div id="mainRender">
        <div id="abc"></div>
        <MainRender />
      </div>
      </div>
      </div>
    );
  }
}
