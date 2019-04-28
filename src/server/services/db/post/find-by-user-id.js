const Post = require("../../../models/post.js");

module.exports = function(userId, relationString = "") {
    return Post.query()
        .where({ user_id: userId })
        .eager(relationString)
        .returning("*");
};
