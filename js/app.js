// This file bootstraps the entire application.

var CommentBox = require('./components/CommentBox.react');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools ????

React.render( <CommentBox />, document.getElementById('react'));
