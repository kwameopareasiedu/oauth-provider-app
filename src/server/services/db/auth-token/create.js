const AuthToken = require("../../../models/auth-token.js");

module.exports = function(args) {
    return AuthToken.query()
        .insert(args)
        .returning("*")
        .first();
};
