const Model = require("../config/objection");

module.exports = class RequestToken extends Model {
	static get tableName() {
		return "request_tokens";
	}
};
