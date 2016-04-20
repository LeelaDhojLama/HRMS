import React from 'react';
import {connect} from 'react-redux';

const renderAsideButton = (state) => {
  if(state.signState.sign) {
    return (
      <aside id="aside">
      <div id="asidebutton">
      <p><button id="clockInOutbtn" className="asidebtn">簽到/簽退</button></p>
      <p><button id="leavebtn" className="asidebtn">請假</button></p>
      <p><button id="overTimebtn" className="asidebtn">加班</button></p>
      <p><button id="reportbtn" className="asidebtn">統計報表</button></p>
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
