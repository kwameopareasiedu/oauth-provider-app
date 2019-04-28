const RequestToken = require("../../../models/request-token.js");

module.exports = function(args) {
	return RequestToken.query()
		.insert(args)
		.returning("*")
		.first();
};
