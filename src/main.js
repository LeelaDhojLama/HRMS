var React = require('react');
var ReactDOM = require('react-dom');
var MainComment = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world!
      </div>
    );
  }
});
ReactDOM.render(
  <MainComment/>,
  document.getElementById('mainRender')
);

