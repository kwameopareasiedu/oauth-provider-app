const edit = require("./edit");

module.exports = (id, userId) => edit(id, { status: "verified", user_id: userId });
