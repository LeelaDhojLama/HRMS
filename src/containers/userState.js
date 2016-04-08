import React, {Component} from 'react';

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
