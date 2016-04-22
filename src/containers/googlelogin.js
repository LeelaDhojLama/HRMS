import React, {Component} from 'react';
import {signIn} from '../actions/action.js';
import store from '../store/index.js';

export default class GoogleLogin extends Component {
  signIn(googleUser) {
    let arr = [];
    let profile = googleUser.getBasicProfile();
    let idToken = googleUser.getAuthResponse()['id_token'];
    store.dispatch(signIn(profile.getName()));
    console.log(store.getState().sign);
//    arr.push('ID: ' + profile.getId());
//    arr.push('Name: ' + profile.getName());
//    arr.push('Image URL: ' + profile.getImageUrl());
//    arr.push('Email: ' + profile.getEmail());
//    arr.push('ID Token: ' + idToken);
//    console.log(arr.join('\n'));
  }

  componentDidMount() {
    gapi.signin2.render('my-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 300,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.signIn
    });  
  }

  render() {
    return (
      <span>
      <div id="homeTitle">差勤系統</div>
      <div id="my-signin2" />
      </span>
    );
  }

}
