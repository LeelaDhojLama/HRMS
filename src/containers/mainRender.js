import React, {Component} from 'react';
import GoogleLogin from './googlelogin.js';
import ClockInOut from './clockInOut.js';
import Leave from './leave.js';
import OverTime from './overTime.js';
import StaReport from './staReport.js';

export default class MainRender extends Component {
  render() {
    return (
      <div>
      <GoogleLogin />
      <ClockInOut />
      <Leave />
      <OverTime />
      <StaReport />
      </div>
    );
  }

}
