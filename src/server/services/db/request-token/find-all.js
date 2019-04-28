const RequestToken = require("../../../models/request-token.js");

module.exports = function(relationString = "") {
	return RequestToken.query().eager(relationString);
};
