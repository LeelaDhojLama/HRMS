var React = require('react');
var ReactDOM = require('react-dom');
var MainComment = React.createClass({
  render: function() {
    return (
      React.createElement('div', {id: "commentBox"},
        "Hello, world!!!!"
      )
    );
  }
});
ReactDOM.render(
  React.createElement(MainComment, null),
  document.getElementById('mainRender')
);

