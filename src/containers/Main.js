import React, {Component} from 'react';
import DateTime from './dateTime.js';
import UserState from './userState.js';
import AsideButton from './asideButton.js';
import MainRender from './mainRender.js';


export default class Main extends Component {

  render() {
    return (
      <body id="bg">
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
        <MainRender />
      </div>
      </div>
      </body>
    );
  }
}
