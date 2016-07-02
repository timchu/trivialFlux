var CommentStore = require('../stores/CommentStore');
var CommentActionCreator= require('../actions/CommentActionCreator');
var React = require('react');

var ENTER_KEY_CODE = 13;

function getStateFromStores() {
  return {
    comments: CommentStore.getAll()
  };
};

var Comment = React.createClass ({
  render: function() {
    return (
      <li> { this.props.text } </li>
    );
  }
});

var TextBox = React.createClass ({
  getInitialState: function () {
    return {};
  },

  render: function () {
    return (<textarea onKeyDown={this._onKeyDown} />);
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      CommentActionCreator.addComment("Comment!")
    }
  }
});

var CommentBox = React.createClass ({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        { this.state.comments.map ((c) => <Comment text= { c }/>) }
        <TextBox />
      </div>
      );
  },

  _onChange: function() {
    this.setState(getStateFromStores());
  },
});

module.exports = CommentBox;
