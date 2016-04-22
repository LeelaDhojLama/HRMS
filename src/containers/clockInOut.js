import React from 'react';
import {connect} from 'react-redux';

const renderState = (asideState) => {
  if(1 === asideState.state.asideState) {
    return (
      <div id="clockInOut">just render</div>
    )
  } else {
    return (<span></span>)
  }
  
}


const mapStateToProps = (state) => {
  return {
    state: state.asideButton
  }
}

const ClockInOut = connect(mapStateToProps)(renderState)
  
export default ClockInOut