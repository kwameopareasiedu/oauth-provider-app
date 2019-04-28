const Post = require("../../../models/post.js");

module.exports = function(page = 1, conditions = {}, relationString = "", pageSize = 10) {
    page = Math.max(0, parseInt(page - 1));
    
    return Post.query()
        .where(conditions)
        .page(parseInt(page), pageSize)
        .orderBy("created_at", "DESC")
        .eager(relationString);
};
