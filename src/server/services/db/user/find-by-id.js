const User = require("../../../models/user.js");

module.exports = function(id, relationString = "") {
    return User.query()
        .where({ id })
        .eager(relationString)
        .returning("*")
        .first();
};
