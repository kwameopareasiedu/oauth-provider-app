const AuthToken = require("../../../models/auth-token.js");

module.exports = function(userId, relationString = "") {
    return AuthToken.query()
        .where({ user_id: userId })
        .eager(relationString)
        .returning("*");
};
