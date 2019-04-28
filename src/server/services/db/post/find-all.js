const Post = require("../../../models/post.js");

module.exports = function(relationString = "") {
    return Post.query().eager(relationString);
};
