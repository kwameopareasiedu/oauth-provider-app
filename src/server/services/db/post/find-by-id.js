const Post = require("../../../models/post.js");

module.exports = function(id, relationString = "") {
    return Post.query()
        .where({ id })
        .eager(relationString)
        .returning("*")
        .first();
};
