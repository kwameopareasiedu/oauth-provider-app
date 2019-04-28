const Post = require("../../../models/post.js");

module.exports = function(id, args) {
    return Post.query()
        .where({ id })
        .patch(args)
        .returning("*")
        .first();
};
