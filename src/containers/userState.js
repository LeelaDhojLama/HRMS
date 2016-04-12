import React, {Component} from 'react';
import store from '../store/index.js';
import actions from '../actions/action.js';

export default class UserState extends Component {
  constructor() {
    super();
    this.state = {
      userName: 'Visitor',
      Hello: ', Hello',
      signOut: <button href="#" onClick={this.signOut.bind(this)} onclick={() => {this.signOut()}}>Sign out</button>
    };
  }

  signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
    console.log(store);
    console.log(actions.signOut);
    actions.signOut();
    console.log('User signed out.');
  }

  render() {
    return (
      <span id="userState">
      <div id="state">{this.state.userName}{this.state.Hello}</div>
      {this.state.signOut}
      </span>
    );
  }

}
