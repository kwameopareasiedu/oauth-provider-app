const RequestToken = require("../../../models/request-token.js");

module.exports = function(id, relationString = "") {
	return RequestToken.query()
		.where({ id })
		.eager(relationString)
		.returning("*")
		.first();
};
