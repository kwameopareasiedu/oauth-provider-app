const AuthToken = require("../../../models/auth-token.js");

module.exports = function(id, relationString = "") {
    return AuthToken.query()
        .where({ id })
        .eager(relationString)
        .returning("*")
        .first();
};
