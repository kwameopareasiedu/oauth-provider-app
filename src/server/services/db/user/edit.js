const User = require("../../../models/user.js");

module.exports = function(id, args) {
    return User.query()
        .where({ id })
        .patch(args)
        .returning("*")
        .first();
};
