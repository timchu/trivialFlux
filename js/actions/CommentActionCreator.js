var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  addComment: function(comment) {
    AppDispatcher.handleViewAction({
      type: "ADD_COMMENT",
      comment: comment
    });
  },
};
