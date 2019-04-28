const RequestToken = require("../../../models/request-token.js");

module.exports = function(id) {
	return RequestToken.query().deleteById(id);
};
