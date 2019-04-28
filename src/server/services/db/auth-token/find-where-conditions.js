const AuthToken = require("../../../models/auth-token.js");

module.exports = function(page = 1, conditions = {}, relationString = "", pageSize = 10) {
    page = Math.max(0, parseInt(page - 1));
    
    return AuthToken.query()
        .where(conditions)
        .page(parseInt(page), pageSize)
        .orderBy("created_at", "DESC")
        .eager(relationString);
};
