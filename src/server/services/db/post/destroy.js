const Post = require("../../../models/post.js");

module.exports = function(id) {
    return Post.query().deleteById(id);
};
