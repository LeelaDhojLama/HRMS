import React from 'react';
import {connect} from 'react-redux';
import store from '../store/index.js';
import {signOut} from '../actions/action.js';

const onSignOut = () => {
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut();
  store.dispatch(signOut())
  console.log(store.getState());
}

const renderState = (state) => {
  let signOutbtn;
  if(state.signState.sign) {
    signOutbtn = <button id="signOutbtn" href="#" onClick={() => {onSignOut()}}>Sign out</button>;
  } else {
    signOutbtn = ' ';
  }
  return (
  <span id="userState">
  <div id="state">{state.signState.userName}, Hello</div>
  {signOutbtn}
  </span>
  )
}

const mapStateToProps = (state) => {
  return {
    signState: state
  }
}

const UserState = connect(mapStateToProps)(renderState)

export default UserState




