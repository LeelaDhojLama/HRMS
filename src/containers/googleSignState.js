import React from 'react';
import {connect} from 'react-redux';

const renderState = (state) => {
  return (
  <span>
  {state.signState.userName}
  </span>
  )
}

const mapStateToProps = (state) => {
  return {
    signState: state
  }
}

const GoogleSingState = connect(mapStateToProps)(renderState)

export default GoogleSingState