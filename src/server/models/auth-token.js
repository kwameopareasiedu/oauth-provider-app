const Model = require("../config/objection");

module.exports = class AuthToken extends Model {
    static get tableName() {
        return "auth_tokens";
    }
    
    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: require("./user.js"),
                join: {
                    from: "auth_tokens.user_id",
                    to: "users.id"
                }
            }
        };
    }
};
