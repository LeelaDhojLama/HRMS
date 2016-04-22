import React from 'react';
import {connect} from 'react-redux';
import store from '../store/index.js';
import {onClockInOut, onLeave, onOverTime, onStaReport} from '../actions/action.js';

const renderAsideButton = (state) => {
  if(state.signState.sign.sign) {
    return (
      <aside id="aside">
      <div id="asidebutton">
      <p><button id="clockInOutbtn" className="asidebtn" onClick={() => {store.dispatch(onClockInOut())}}>簽到/簽退</button></p>
      <p><button id="leavebtn" className="asidebtn" onClick={() => {store.dispatch(onLeave())}}>請假</button></p>
      <p><button id="overTimebtn" className="asidebtn" onClick={() => {store.dispatch(onOverTime())}}>加班</button></p>
      <p><button id="staReportbtn" className="asidebtn" onClick={() => {store.dispatch(onStaReport())}}>統計報表</button></p>
      </div>
      </aside>
    );
  } else {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signState: state
  }
}

const AsideButton = connect(mapStateToProps)(renderAsideButton)

export default AsideButton
