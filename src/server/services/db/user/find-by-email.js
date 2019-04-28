const User = require("../../../models/user.js");

module.exports = function(email, relationString = "") {
	return User.query()
		.where({ email })
		.eager(relationString)
		.returning("*")
		.first();
};
