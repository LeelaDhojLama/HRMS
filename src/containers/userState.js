import React, {Component} from 'react';
import {signOut} from '../actions/action.js';
import {connect} from 'react-redux';
import store from '../store/index.js';
import GoogleSignState from './googleSignState';

export default class UserState extends Component {
  constructor() {
    super();
    this.state = {
      signOutbtn: <button id="signOutbtn" href="#" onClick={this.signOut.bind(this)} onclick={() => {this.signOut()}}>Sign out</button>
    };
  }


  signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
    store.dispatch(signOut())
    console.log(store.getState());
    console.log('User signed out.');
  }

  render() {
    return (
      <span id="userState">
      <div id="state" value><GoogleSignState />, Hello</div>
      {this.state.signOutbtn}
      </span>
    );
  }
}




