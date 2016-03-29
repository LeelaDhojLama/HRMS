var CommentBox = React.createClass({
  displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {id: "commentBox"},
        "Hello, world!!!!"
      )
    );
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('mainRender')
);

