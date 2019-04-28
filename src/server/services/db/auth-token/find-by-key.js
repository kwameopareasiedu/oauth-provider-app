const AuthToken = require("../../../models/auth-token.js");

module.exports = function(key, relationString = "") {
	return AuthToken.query()
		.where({ key })
		.eager(relationString)
		.returning("*")
		.first();
};
