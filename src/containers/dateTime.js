import React, {Component} from 'react';

export default class DateTime extends Component {
  setDateTime() {
    let now = new Date();
    let weekday = [
      '(日)',
      '(一)',
      '(二)',
      '(三)',
      '(四)',
      '(五)',
      '(六)'
    ];
    let date = [
      now.getFullYear(), 
      now.getMonth() + 1, 
      now.getDate(),
    ].join('/');
    let time = [
      now.getHours(),
      ('0' + now.getMinutes()).substr(now.getMinutes().toString().length - 1, 2),
      ('0' + now.getSeconds()).substr(now.getSeconds().toString().length - 1, 2)
    ].join(':');
    let day = weekday[now.getDay()];
    this.setState({
      date: date,
      day: day,
      time: time
    })
  }

  componentWillMount() {
    this.setDateTime();
  }

  componentDidMount() {
    window.setInterval(function () {
      this.setDateTime();
    }.bind(this), 1000);
  }

  render() {
    return (
      <div>{this.state.date} {this.state.day} {this.state.time}</div>
    );
  }

}
