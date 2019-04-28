const AuthToken = require("../../../models/auth-token.js");

module.exports = function(id, args) {
    return AuthToken.query()
        .where({ id })
        .patch(args)
        .returning("*")
        .first();
};
