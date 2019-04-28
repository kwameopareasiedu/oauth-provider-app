const Post = require("../../../models/post.js");

module.exports = function(args) {
    return Post.query()
        .insert(args)
        .returning("*")
        .first();
};
