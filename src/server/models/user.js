const Model = require("../config/objection");

module.exports = class User extends Model {
    static get tableName() {
        return "users";
    }
    
    static get relationMappings() {
        return {
            posts: {
                relation: Model.HasManyRelation,
                modelClass: require("./post.js"),
                join: {
                    from: "users.id",
                    to: "posts.user_id"
                }
            },
            auth_tokens: {
                relation: Model.HasManyRelation,
                modelClass: require("./auth-token.js"),
                join: {
                    from: "users.id",
                    to: "auth_tokens.user_id"
                }
            }
        };
    }
};
