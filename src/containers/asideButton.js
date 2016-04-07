import React, {Component} from 'react';

export default class AsideButton extends Component {
  render() {
    return (
      <div id="asidebutton">
      <p><button id="clockInOut" className="asidebtn">簽到/簽退</button></p>
      <p><button id="clockInOut" className="asidebtn">請假</button></p>
      <p><button id="clockInOut" className="asidebtn">加班</button></p>
      <p><button id="clockInOut" className="asidebtn">統計報表</button></p>
      </div>
    );
  }

}
