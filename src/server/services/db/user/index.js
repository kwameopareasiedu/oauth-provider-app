const create = require("./create");
const destroy = require("./destroy");
const edit = require("./edit");
const findAll = require("./find-all");
const findById = require("./find-by-id");
const findByEmail = require("./find-by-email");
const findWhereConditions = require("./find-where-conditions");

module.exports = { create, destroy, edit, findAll, findById, findByEmail, findWhereConditions };
