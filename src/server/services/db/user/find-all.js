const User = require("../../../models/user.js");

module.exports = function(relationString = "") {
    return User.query().eager(relationString);
};
