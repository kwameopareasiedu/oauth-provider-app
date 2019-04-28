const create = require("./create");
const destroy = require("./destroy");
const edit = require("./edit");
const findAll = require("./find-all");
const findById = require("./find-by-id");
const findByKey = require("./find-by-key");
const findWhereConditions = require("./find-where-conditions");
const setStatusToVerified = require("./set-status-to-verified");

module.exports = { create, destroy, edit, findAll, findById, findByKey, findWhereConditions, setStatusToVerified };
