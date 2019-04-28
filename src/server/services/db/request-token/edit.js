const RequestToken = require("../../../models/request-token.js");

module.exports = function(id, args) {
	return RequestToken.query()
		.where({ id })
		.patch(args)
		.returning("*")
		.first();
};
