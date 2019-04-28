const create = require("./create");
const destroy = require("./destroy");
const edit = require("./edit");
const findAll = require("./find-all");
const findById = require("./find-by-id");
const findWhereConditions = require("./find-where-conditions");

module.exports = { create, destroy, edit, findAll, findById, findWhereConditions };