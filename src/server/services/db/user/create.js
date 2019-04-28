const User = require("../../../models/user.js");

module.exports = function(args) {
    return User.query()
        .insert(args)
        .returning("*")
        .first();
};
