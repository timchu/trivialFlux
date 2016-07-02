var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _comments = ["Comment 1", "Comment 2"];

var CommentStore = merge(EventEmitter.prototype, {
  emitChange: function() { 
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _comments[id];
  },

  getAll: function() {
    return _comments;
  }
});

CommentStore.dispatchToken = AppDispatcher.register(function(payload) {

  var action = payload.action;
  switch(action.type) {
    case "ADD_COMMENT":
      _comments.push(action.comment);
      CommentStore.emitChange();
      break;

    default:
      // Do nothing
  }
});

module.exports = CommentStore;
