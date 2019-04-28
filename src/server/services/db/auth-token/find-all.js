const AuthToken = require("../../../models/auth-token.js");

module.exports = function(relationString = "") {
    return AuthToken.query().eager(relationString);
};
