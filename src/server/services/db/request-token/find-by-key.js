const RequestToken = require("../../../models/request-token.js");

module.exports = function(key, relationString = "") {
	return RequestToken.query()
		.where({ key })
		.eager(relationString)
		.returning("*")
		.first();
};
