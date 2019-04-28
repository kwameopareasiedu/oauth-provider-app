const User = require("../../../models/user.js");

module.exports = function(id) {
    return User.query().deleteById(id);
};
