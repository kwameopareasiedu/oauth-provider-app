const Model = require("../config/objection");

module.exports = class Post extends Model {
    static get tableName() {
        return "posts";
    }
    
    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: require("./user.js"),
                join: {
                    from: "posts.user_id",
                    to: "users.id"
                }
            }
        };
    }
};
