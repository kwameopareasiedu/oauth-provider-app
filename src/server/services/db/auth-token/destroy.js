const AuthToken = require("../../../models/auth-token.js");

module.exports = function(id) {
    return AuthToken.query().deleteById(id);
};
